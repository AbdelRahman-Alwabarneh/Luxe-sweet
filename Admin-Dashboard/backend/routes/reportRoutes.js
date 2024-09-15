// // routes/reportRoutes.js
// const express = require("express");
// const { getReportedDishes } = require("../controllers/reportController");

// const router = express.Router();

// // Route to get all reported dishes
// router.get("/", getReportedDishes);

// module.exports = router;


// routes/reportRoutes.js
const express = require("express");
const { getReportedDishes, sendEmail } = require("../controllers/reportController");

const router = express.Router();

// Route to get all reported dishes
router.get("/", getReportedDishes);

// Route to send email
router.post("/send-email", sendEmail);

module.exports = router;
