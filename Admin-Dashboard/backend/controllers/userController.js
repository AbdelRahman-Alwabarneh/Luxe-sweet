// const User = require('../models/User');

// // Get all users
// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };



// exports.updateUser = async (req, res) => {
//   try {
//     const { userId, isActive } = req.body;
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     user.isActive = isActive !== undefined ? isActive : user.isActive;
//     await user.save();
//     res.status(200).json({ message: 'User status updated successfully', user });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get the count of active users
// exports.getActiveUserCount = async (req, res) => {
//   try {
//     const activeUserCount = await User.countDocuments({ isActive: true });
//     res.status(200).json({ count: activeUserCount });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const User = require('../models/User');

// // Get all users
// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Update user status
// exports.updateUser = async (req, res) => {
//   try {
//     const { userId, isActive } = req.body;
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     user.isActive = isActive !== undefined ? isActive : user.isActive;
//     await user.save();
//     res.status(200).json({ message: 'User status updated successfully', user });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // // Get the count of active users
// // exports.getActiveUserCount = async (req, res) => {
// //   try {
// //     const activeUserCount = await User.countDocuments({ isActive: true }); // استعلام المستخدمين النشطين
// //     res.status(200).json({ count: activeUserCount }); // تأكد من وجود "count" في الاستجابة
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // };
// // Get the count of active users
// exports.getActiveUserCount = async (req, res) => {
//   try {
//     // استعلام قاعدة البيانات للعثور على المستخدمين النشطين
//     const activeUserCount = await User.countDocuments({ isActive: true }); 
//     res.status(200).json({ count: activeUserCount }); // إرجاع العدد في الاستجابة
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };



const User = require('../models/User');
const nodemailer = require('nodemailer');

// Set up Nodemailer transporter with Gmail configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'abedalmajedalajarmah@gmail.com',
    pass: 'ndgx zdev lywb gohb'
  },
});

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user status and send email
exports.updateUser = async (req, res) => {
  try {
    const { userId, isActive } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.isActive = isActive;
    await user.save();

    // Send email to the user
    const mailOptions = {
      from: 'abedalmajedalajarmah@gmail.com',
      to: user.email,
      subject: 'Account Status Update',
      text: `Dear ${user.name},\n\nYour account status has been updated. Your account is now ${isActive ? 'active' : 'inactive'}.\n\nIf you have any questions, please contact our support team.\n\nBest regards,\nLuxeSweets Team`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email: ', error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.status(200).json({ message: 'User status updated successfully and email sent', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get the count of active users
exports.getActiveUserCount = async (req, res) => {
  try {
    const activeUserCount = await User.countDocuments({ isActive: true });
    res.status(200).json({ count: activeUserCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};