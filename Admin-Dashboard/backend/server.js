const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Import Routes
const contactRoutes = require('./routes/contactRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');
const { router: authRoutes } = require('./routes/authRoutes');
const dishRoutes = require('./routes/dishRoutes');
const recipeRoutes = require('./routes/recipeRoutes'); // تأكد من مسار الراوتر
const chefRoutes = require('./routes/chefs');
const reportRoutes = require("./routes/reportRoutes"); // Import the routes
const reportRecipeRoutes = require("./routes/reportRecipeRoute"); // Import the routes
// Use Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/dishes', dishRoutes); // Ensure this path is correct
app.use('/api', recipeRoutes);
app.use('/api', chefRoutes);
app.use('/api/reports', reportRoutes); // This should match your route path
app.use('/api/recipereports', reportRecipeRoutes); // This should match your route path
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
