const express = require("express");
const { getRecords } = require("../Controllers/catalogdish");
const { getComingsoon } = require("../Controllers/catalogdish");

const router = express.Router();

router.get("/", getRecords);
router.get("/comingsoon", getComingsoon);

module.exports = router;
