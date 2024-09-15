const express = require("express");
const { signUpChef, loginChef } = require("../controllers/ChefControllers");


const router = express.Router();

router.post("/signUpChef", signUpChef);
router.post("/loginChef", loginChef);

module.exports = router;
