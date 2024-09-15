// // controllers/reportController.js
// const Dish = require("../models/Recipe"); // Import the Dish model

// // Fetch all reports with isReported: true
// const getReportedDishes = async (req, res) => {
//     // Find dishes where the reportFlag.isReported is true
//     //const dishes = await Dish.find({ "ratings.reportFlag.isReported": true });
//     const dishes = await Dish.find({ "ratings.0.reportFlag.isReported": true });

    
//     console.log(dishes)
//     res.status(200).json(dishes);
// };

// module.exports = {
//   getReportedDishes,
// };


// // controllers/reportController.js
// const Dish = require("../models/Recipe"); // Import the Dish model

// // Fetch all reports with isReported: true
// const getReportedDishes = async (req, res) => {
//   try {
//     // Find dishes where the reportFlag.isReported is true
//     const dishes = await Dish.find({ "ratings.reportFlag.isReported": true })
//       .populate({
//         path: "ratings.reportFlag.reports.user", // Path to populate the user field
//         select: "name email", // Select only the name and email fields
//       });

//     res.status(200).json(dishes);
//   } catch (error) {
//     console.error("Error fetching reported dishes:", error);
//     res.status(500).json({ message: "Failed to fetch reported dishes" });
//   }
// };

// module.exports = {
//   getReportedDishes,
// };



// controllers/reportController.js
const Dish = require("../models/Recipe"); // Import the Dish model
const nodemailer = require("nodemailer"); // Import nodemailer

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abedalmajedalajarmah@gmail.com', // Replace with your email address
    pass: 'ndgx zdev lywb gohb' // Your email password or app-specific password
  },
});

// Fetch all reports with isReported: true
const getReportedDishes = async (req, res) => {
  try {
    // Find dishes where the reportFlag.isReported is true
    const dishes = await Dish.find({ "ratings.reportFlag.isReported": true })
      .populate({
        path: "ratings.reportFlag.reports.user", // Path to populate the user field
        select: "name email", // Select only the name and email fields
      });

    res.status(200).json(dishes);
  } catch (error) {
    console.error("Error fetching reported dishes:", error);
    res.status(500).json({ message: "Failed to fetch reported dishes" });
  }
};

// Send email response to the user
const sendEmailResponse = async (req, res) => {
  const { email, response } = req.body;

  const mailOptions = {
    from: 'abedalmajedalajarmah@gmail.com', // Replace with your email address
    to: email,
    subject: 'Response to your report',
    text: response,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Response sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send response" });
  }
};

module.exports = {
  getReportedDishes,
  sendEmailResponse,
};
