const express = require("express");
const { getrecipe } = require("../Controllers/catalogrecipe");

const router = express.Router();

router.get("/", getrecipe);

module.exports = router;
