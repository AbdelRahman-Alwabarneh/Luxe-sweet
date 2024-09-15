// const express = require('express');
// const { login, authenticate } = require('../controllers/authController');

// const router = express.Router();

// router.post('/login', login);
// router.use(authenticate);

// module.exports = router;




// const express = require('express');
// const jwt = require('jsonwebtoken');
// const Admin = require('../models/adminModel');
// const router = express.Router();
// const cookieParser = require('cookie-parser');

// // Middleware to parse cookies
// router.use(cookieParser());

// // Login route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const admin = await Admin.findOne({ email });
//     if (!admin) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     const isMatch = await admin.comparePassword(password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.cookie('token', token, { httpOnly: true }).json({ message: 'Logged in successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Middleware to protect routes
// const authenticate = (req, res, next) => {
//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }
//     req.admin = decoded;
//     next();
//   });
// };

// module.exports = { router, authenticate };


///////new/////////


// authRoutes.js (Server-side)
const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');
const router = express.Router();
const cookieParser = require('cookie-parser');

// Middleware to parse cookies
router.use(cookieParser());

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Include admin ID in the token payload
    const token = jwt.sign(
      { 
        id: admin._id,
        email: admin.email
      }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // maxAge set to 1 hour in milliseconds
    res.json({ 
      message: 'Logged in successfully',
      token,
      admin: { id: admin._id, email: admin.email }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Middleware to protect routes
const authenticate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.admin = decoded; // This now includes { id, email }
    next();
  });
};

// Logout route
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
});

// Protected route example
router.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'This is a protected route', admin: req.admin });
});

module.exports = { router, authenticate };