const express = require("express");
const mongoose = require("./Config/config"); // استيراد إعدادات الاتصال بقاعدة البيانات
require("dotenv").config();
const Stripe = require("stripe");
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cartRouter = require("./Routes/cart");
app.use(cookieParser());

// استبدل بمسار النطاق المسموح به
app.use(
  cors({
    origin: "http://localhost:1000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// استيراد الطرق
const authRoutes = require("./Routes/userRoutes");

// استخدام الطرق
app.use("/api/auth", authRoutes);
const contactRoutes = require("./Routes/contactRouter");

app.use("/api/contact", contactRoutes);

const reviewdish = require("./Routes/reviewdishroutes");
app.use("/api/dish", reviewdish); // Changed this line

const catalogdish = require("./Routes/catalogdishroutes");
const catalogrecipe = require("./Routes/catalogreciperoutes");
const reviewrecipe = require("./Routes/reviewreciperoutes");
app.use("/api/records", catalogdish);
app.use("/api/recipe", catalogrecipe);
app.use("/api/recipe", reviewrecipe);

const chefRoutes = require("./Routes/chefRoutes");
app.use("/api/chef", chefRoutes);

app.use("/cart", cartRouter);

// بدء تشغيل الخادم
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
