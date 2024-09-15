const User = require("../models/UserModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); // أضف هذا إذا لم يكن موجوداً في الأعلى

const { OAuth2Client } = require("google-auth-library");

const SECRET_KEY = process.env.JWT_SECRET_KEY || "your_secret_key";

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // تشفير كلمة المرور
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    // تخزين التوكن في الكوكيز
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: false,
      maxAge: 1 * 60 * 60 * 1000,
    });
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user", error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      // مقارنة كلمة المرور
      return res.status(401).json({ message: "Invalid credentials" });
    }
    if (!user.isActive) {
      return res.status(403).json({ message: "Your subscription has expired" });
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: false,
      maxAge: 1 * 60 * 60 * 1000,
    }); // تعيين التوكن في الكوكي

    res.status(200).json({ message: "Login successful!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to login", error });
  }
};
const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.CLIENT_SECRET
);
exports.googleSignup = async (req, res) => {
  try {
    const { id_token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
      secret: process.env.CLIENT_SECRET,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      throw new Error("Failed to get payload from Google token");
    }

    const { email, name, picture } = payload;
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        name,
        email,
        image: picture,
        googleId: payload.sub,
      });
      await user.save();
    }

    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1d",
    });
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: false,
      maxAge: 1 * 60 * 60 * 1000,
    });

    res
      .status(200)
      .json({ token, user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error("Google signup error:", error);
    res.status(500).json({ message: "Error during Google signup" });
  }
};
exports.googleLogin = async (req, res) => {
  try {
    const { id_token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email, name } = ticket.getPayload();
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ name, email });
      await user.save();
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: false,
      maxAge: 1 * 60 * 60 * 1000,
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Google login failed", error });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const Users = await User.find({ isActive: true, _id: req.user.id });

    res.status(200).json({ Users });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  const { userId } = req.params;
  const { name, newPassword, image } = req.body;

  try {
    // Find user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user details
    if (name) user.name = name;
    if (image) user.image = image;

    // Hash new password if provided
    if (newPassword) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      user.password = hashedPassword;
    }

    // Save updated user
    await user.save();

    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile", error });
  }
};

exports.logout = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    secure: false,
    maxAge: 0,
  });
  res.status(200).json({ message: "Logged out successfully" });
};
