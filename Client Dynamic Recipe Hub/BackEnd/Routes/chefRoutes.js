const express = require("express");
const { getChef } = require("../Controllers/chefController");

const router = express.Router();

router.get("/getChef", getChef);

module.exports = router;
