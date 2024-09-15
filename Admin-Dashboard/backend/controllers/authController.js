const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, { httpOnly: true }).json({ message: 'Logged in successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.authenticate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });
    req.admin = decoded;
    next();
  });
};
