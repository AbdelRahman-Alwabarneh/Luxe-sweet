const Cuisine = require("../models/CuisineModel");

const setCuisine = async (req, res) => {
  try {
    // Extract the name of the cuisine from the request body
    const { name } = req.body;

    // Check if the name is provided
    if (!name) {
      return res.status(400).json({ message: "Cuisine name is required" });
    }

    // Check if the cuisine already exists in the database
    const existingCuisine = await Cuisine.findOne({ name });
    if (existingCuisine) {
      return res.status(400).json({ message: "Cuisine already exists" });
    }

    // Create a new Cuisine instance
    const newCuisine = new Cuisine({
      name
    });

    // Save the new Cuisine to the database
    await newCuisine.save();

    // Respond with success message and the created cuisine
    res.status(201).json({ message: "Cuisine created successfully", cuisine: newCuisine });

  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error creating cuisine:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


const getAllCuisines = async (req, res) => {
  try {
  
    const cuisines = await Cuisine.find();

    // Respond with the list of cuisines
    res.status(200).json({ message: "Cuisines retrieved successfully", cuisine: cuisines });
    } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error fetching cuisines:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = { setCuisine, getAllCuisines };
