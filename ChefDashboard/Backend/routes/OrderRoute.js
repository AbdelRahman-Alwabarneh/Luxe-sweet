const express = require("express");
const { getPaymentsByChef, updateAcceptable } = require("../controllers/OrderController");


const router = express.Router();

router.get("/getAllPayments/:chefId", getPaymentsByChef);
router.put('/updateAcceptable/:paymentId', updateAcceptable);



module.exports = router;