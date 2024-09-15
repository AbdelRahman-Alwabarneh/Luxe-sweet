const Payment = require("../models/paymentModel");

// Route handler to get all payments for a specific chef
const getPaymentsByChef = async (req, res) => {
    const chefId = req.params.chefId;  // Assuming chefId is passed as a route parameter

    try {
        // Fetch all payments
        const payments = await Payment.find();

        // Filter payments where items' chef matches the provided chefId
        const chefPayments = payments.filter(payment => 
            payment.items && payment.items.chef && payment.items.chef.toString() === chefId
        );

        // Count the number of orders
        const orderCount = chefPayments.length;

        res.status(200).json({ success: true, payments: chefPayments, orderCount: orderCount });
    } catch (error) {
        console.error("Error fetching payments for chef:", error);
        res.status(500).json({ success: false, message: "Error fetching payments for chef" });
    }
};

/*********************** */

const updateAcceptable = async (req, res) => {
    try {
        const { paymentId } = req.params; // Use paymentId if that's how you're passing it
        const { acceptable } = req.body;
        
        if (typeof acceptable !== 'boolean') {
            return res.status(400).json({ success: false, message: 'Acceptable must be a boolean value' });
        }

        const updatedOrder = await Payment.findByIdAndUpdate(
            paymentId,
            { acceptable },
            { new: true } // Return the updated document
        );

        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        res.status(200).json({ success: true, payment: updatedOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getPaymentsByChef, updateAcceptable };
