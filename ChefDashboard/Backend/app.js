const express = require('express');
const http = require('http');
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const config = require('./config/config'); 
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
const server = http.createServer(app);

const CuisineRoutes = require('./routes/CuisineRoute');

const DishRoute = require('./routes/DishRoute');
const ChefRoute = require('./routes/ChefRoute');
const recipeRoutes = require('./routes/RecipeRoute');
const getAllPayments = require("./routes/OrderRoute");
  


app.use('/api/cuisine', CuisineRoutes); 
app.use('/api/Dish', DishRoute);
app.use('/api/newChef', ChefRoute);
app.use('/api/order', getAllPayments);


app.use('/api/recipes', recipeRoutes);


// الاتصال بقاعدة البيانات باستخدام URI من ملف التكوين
mongoose.connect(config.mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
    });

server.listen(3000, function(){
    console.log("Server is running at http://localhost:3000");
});