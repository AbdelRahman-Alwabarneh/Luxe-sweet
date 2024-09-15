// const Chef = require('../models/chef');
// const nodemailer = require('nodemailer');

// // جلب جميع الشيفات
// exports.getAllChefs = async (req, res) => {
//   try {
//     const chefs = await Chef.find();
//     res.status(200).json(chefs);
//   } catch (error) {
//     res.status(500).send('Error fetching chefs');
//   }
// };

// // // تحديث حالة الموافقة لشيف
// // exports.updateApprovalStatus = async (req, res) => {
// //   const { chefId, approved } = req.body;
// //   try {
// //     const chef = await Chef.findByIdAndUpdate(
// //       chefId,
// //       { isApproved: approved },
// //       { new: true }
// //     );
// //     if (!chef) {
// //       return res.status(404).send('Chef not found');
// //     }
// //     res.status(200).json(chef);
// //   } catch (error) {
// //     res.status(500).send('Error updating approval status');
// //   }
// // };



// // Function to update chef approval status
// exports.updateApprovalStatus = async (req, res) => {
//   const { chefId, approved } = req.body;
//   try {
//     const chef = await Chef.findByIdAndUpdate(
//       chefId,
//       { isApproved: approved },
//       { new: true }
//     );
//     if (!chef) {
//       return res.status(404).send('Chef not found');
//     }
//     res.status(200).send('Approval status updated successfully');
//   } catch (error) {
//     res.status(500).send('Error updating approval status');
//   }
// };

// // Function to send email notifications to the chef
// exports.sendEmailNotification = async (req, res) => {
//   const { to, subject, text } = req.body;

//   // Create a transporter object using the default SMTP transport
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'abedalmajedalajarmah@gmail.com', // Replace with your email address
//       pass: 'ndgx zdev lywb gohb' // Your email password or app-specific password
//     },
//   });

//   const mailOptions = {
//     from: 'abedalmajedalajarmah@gmail.com', // Replace with your email
//     to,
//     subject,
//     text,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error.message);
//     res.status(500).send('Error sending email');
//   }
// };




// // // جلب عدد الشيفات النشطين
// // exports.getActiveChefsCount = async (req, res) => {
// //     try {
// //       const count = await Chef.countDocuments({ isApproved: true });
// //       res.status(200).json({ count });
// //     } catch (error) {
// //       res.status(500).send('Error fetching active chefs count');
// //     }
// //   };

// // جلب عدد الشيفات النشطين
// exports.getActiveChefsCount = async (req, res) => {
//     try {
//       const count = await Chef.countDocuments({ isApproved: true });
//       res.status(200).json({ count });
//     } catch (error) {
//       res.status(500).send('Error fetching active chefs count');
//     }
//   };

  


const Chef = require('../models/chef');
const nodemailer = require('nodemailer');

// Get all chefs
exports.getAllChefs = async (req, res) => {
  try {
    const chefs = await Chef.find();
    res.status(200).json(chefs);
  } catch (error) {
    res.status(500).send('Error fetching chefs');
  }
};

// Update approval status for a chef
exports.updateApprovalStatus = async (req, res) => {
  const { chefId, approved } = req.body;
  try {
    const chef = await Chef.findByIdAndUpdate(
      chefId,
      { isApproved: approved },
      { new: true }
    );
    if (!chef) {
      return res.status(404).send('Chef not found');
    }
    res.status(200).send('Approval status updated successfully');
  } catch (error) {
    res.status(500).send('Error updating approval status');
  }
};

// Send email notifications to the chef
exports.sendEmailNotification = async (req, res) => {
  const { to, subject, text } = req.body;

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'abedalmajedalajarmah@gmail.com', // Replace with your email address
      pass: 'ndgx zdev lywb gohb' // Your email password or app-specific password
    },
  });

  // const mailOptions = {
  //   from: process.env.EMAIL_USER, // Use environment variable
  //   to,
  //   subject,
  //   text,
  // };
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: "Reply to your chef request",
    text,
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).send('Error sending email');
  }
};

// Get count of active chefs
exports.getActiveChefsCount = async (req, res) => {
  try {
    const count = await Chef.countDocuments({ isApproved: true });
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).send('Error fetching active chefs count');
  }
};
