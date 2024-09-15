// routes/reportRoutes.js
const express = require("express");
const { getReportedDishes ,sendEmailResponse} = require("../controllers/reportRecipeController");

const router = express.Router();

// Route to get all reported dishes
router.get("/", getReportedDishes);
router.post("/send-response", sendEmailResponse);

module.exports = router;
