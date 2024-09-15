// auth.js
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET_KEY || "your_secret_key";

const verifyToken = (req, res, next) => {
  // جلب التوكن من الكوكيز أو الهيدرز
  const token = req.cookies.jwt || req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  try {
    // التحقق من صحة التوكن وفك تشفيره
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // تخزين بيانات المستخدم المفككة في الطلب
    next(); // متابعة المسار
  } catch (err) {
    res.status(400).json({ message: "Invalid token." });
  }
};

module.exports = verifyToken;
