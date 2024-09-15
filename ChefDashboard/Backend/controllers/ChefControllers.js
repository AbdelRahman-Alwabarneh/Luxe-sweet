const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwtUtils');
const Chef = require('../models/ChefModel');

/****************sign Up Chef************* */
const signUpChef = async (req, res) => {
  try {
    const { name, email, password, bio, image } = req.body;


    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required fields.' });
    }

  
    const existingChef = await Chef.findOne({ email });
    if (existingChef) {
      return res.status(400).json({ message: 'A chef with this email already exists.' });
    }

   
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);


    const newChef = new Chef({
      name,
      email,
      password: hashedPassword, 
      bio,
      image,
      isApproved: false 
    });

    const savedChef = await newChef.save();

    res.status(201).json({ message: 'Chef created successfully. Awaiting admin approval.', chef: savedChef });

 

  } catch (error) {
    console.error('Error creating chef:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
/****************end sign Up Chef************* */



/**********************login Chef************************ */
const loginChef = async (req, res) => {
  try {
    const { email, password } = req.body;


    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required fields.' });
    }

    const chef = await Chef.findOne({ email });

   
    if (!chef) {
      return res.status(401).json({ message: 'Chef not found.' });
    }

    
    if (!chef.isApproved) {
      return res.status(403).json({ message: 'Chef not approved.' });
    }

  
    const isMatch = await bcrypt.compare(password, chef.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    const token = jwt.sign({ id: chef._id, email: chef.email }, JWT_SECRET, { expiresIn: '1h' });

   
    res.cookie('auth_token', token, {
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production', 
      maxAge: 3600000, 
      sameSite: 'strict', 
    });

    
    res.status(200).json({ message: 'Login successful.', token, id: chef._id });
  } catch (error) {
    console.error('Error during chef login:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
/**********************end login Chef************************ */

module.exports = { signUpChef, loginChef };



