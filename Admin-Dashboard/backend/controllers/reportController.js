// // controllers/reportController.js
// const Dish = require("../models/Dish"); // Import the Dish model

// // Fetch all reports with isReported: true
// const getReportedDishes = async (req, res) => {
//     // Find dishes where the reportFlag.isReported is true
//     // const dishes = await Dish.find({ "ratings.reportFlag.isReported": true });
//     const dishes = await Dish.find({ "ratings.0.reportFlag.isReported": true });

    
//     console.log(dishes)
//     res.status(200).json(dishes);
// };

// module.exports = {
//   getReportedDishes,
// };


// // controllers/reportController.js
// const Dish = require("../models/Dish"); // Import the Dish model

// // Fetch all reports with isReported: true
// const getReportedDishes = async (req, res) => {
//   try {
//     // Find dishes where reportFlag.isReported is true and populate the user details
//     const dishes = await Dish.find({ "ratings.reportFlag.isReported": true })
//       .populate({
//         path: "ratings.reportFlag.reports.user",
//         select: "name email", // Select the fields you want to retrieve
//       });

//     console.log(dishes);
//     res.status(200).json(dishes);
//   } catch (error) {
//     console.error("Error fetching reported dishes:", error);
//     res.status(500).json({ message: "Error fetching reported dishes" });
//   }
// };

// module.exports = {
//   getReportedDishes,
// };


// controllers/reportController.js
const Dish = require("../models/Dish"); // Import the Dish model
const nodemailer = require("nodemailer"); // Import nodemailer

// Fetch all reports with isReported: true
const getReportedDishes = async (req, res) => {
  try {
    // Find dishes where reportFlag.isReported is true and populate the user details
    const dishes = await Dish.find({ "ratings.reportFlag.isReported": true }).populate({
      path: "ratings.reportFlag.reports.user",
      select: "name email", // Select the fields you want to retrieve
    });

    console.log(dishes);
    res.status(200).json(dishes);
  } catch (error) {
    console.error("Error fetching reported dishes:", error);
    res.status(500).json({ message: "Error fetching reported dishes" });
  }
};

// Send email to the user
const sendEmail = async (req, res) => {
  const { userEmail, message } = req.body;

  // Configure nodemailer transport
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Use your email provider
    auth: {
      user: 'abedalmajedalajarmah@gmail.com', // Replace with your email address
      pass: 'ndgx zdev lywb gohb' // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "Reply to your report",
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
};

module.exports = {
  getReportedDishes,
  sendEmail,
};
