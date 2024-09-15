const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    stripePaymentId: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    status: { type: String, required: true },
    userId: {
      type: String,

      default: null, // يمكن أن تكون null بشكل افتراضي
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      default: null, // يمكن أن تكون null بشكل افتراضي
    },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    items: {
      type: mongoose.Schema.Types.Mixed,

      default: null, // يمكن أن تكون null بشكل افتراضي
    },
    acceptable: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
