const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UserController");
const verifyToken = require('../Middleware/auth');
const paymentController = require("../Controllers/paymentController");


router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/googleSignup", userController.googleSignup);

router.post("/Googellogin", userController.googleLogin);
router.post("/pay", paymentController.createPaymentIntent);
router.get("/getOrders", verifyToken,paymentController.getOrders);


router.get("/getAllUsers", verifyToken,userController.getAllUsers);
router.put("/updateProfile/:userId", userController.updateProfile);
router.post("/logout", userController.logout);

module.exports = router;
