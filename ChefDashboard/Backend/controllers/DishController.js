const Dish = require("../models/DishModel");



// Function to create a new dish
const createDish = async (req, res) => {
  try {
    // Extract dish details from the request body
    const {
      name,
      description,
      price,
      chef,
      images,
      availableQuantity,
      size,
      cuisine
    } = req.body;

    // Validate required fields
    if (!name || !price || !chef) {
      return res.status(400).json({ message: 'Name, price, and chef are required fields.' });
    }

    // Create a new Dish instance
    const newDish = new Dish({
      name,
      description,
      price,
      chef,
      images: images || [],
      availableQuantity: availableQuantity || 0,
      size: size || 'medium',
      cuisine
    });

    // Save the dish to the database
    const savedDish = await newDish.save();

    // Respond with success message and the created dish
    res.status(201).json({ message: 'Dish created successfully', dish: savedDish });
  } catch (error) {
    console.error('Error creating dish:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
/********************* */
const GetDish = async (req, res) => {
  try {
    let { page = 1, limit = 10, chefId } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    if (isNaN(page) || page <= 0 || isNaN(limit) || limit <= 0) {
      return res.status(400).json({ message: 'Invalid page or limit value' });
    }

    limit = Math.max(limit, 1);

    const skip = (page - 1) * limit;

    let query = { isDeleted: false };

    // Add chefId filter if provided
    if (chefId) {
      query.chef = chefId;
    }

    const dishes = await Dish.find(query)
      .populate('cuisine', 'name')
      .populate('chef', 'name email image')
      .skip(skip)
      .limit(limit);

    const totalDishes = await Dish.countDocuments(query);

    const totalPages = Math.ceil(totalDishes / limit);

    res.status(200).json({
      message: 'Dishes retrieved successfully',
      dishes,
      page,
      totalPages,
      totalDishes,
    });
  } catch (error) {
    console.error('Error retrieving dishes:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

/***************************** */
const UpdateDish = async (req, res) => {
  try {
   
    const { _id } = req.params;
    const data = req.body;

    
    const updatedDish = await Dish.findByIdAndUpdate(_id, data, {
      new: true, 
      runValidators: true, 
    });

   
    if (!updatedDish) {
      return res.status(404).json({ message: 'Dish not found' });
    }

    res.status(200).json({ message: 'Dish updated successfully', updatedDish });
  } catch (error) {
    console.error('Error updating dish:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
/************************************ */
const searchDishes = async (req, res) => {
  try {
    const { name, chef, cuisine } = req.query;

    // Create a filter object
    let filter = { isDeleted: false };

    if (name) {
      filter.name = { $regex: name, $options: 'i' }; // Case-insensitive regex search
    }

    if (chef) {
      filter.chef = chef;
    }

    if (cuisine) {
      filter.cuisine = cuisine;
    }

    const dishes = await Dish.find(filter).populate('cuisine', 'name');

    res.status(200).json({ message: 'Dishes retrieved successfully', dishes });
  } catch (error) {
    console.error('Error retrieving dishes:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = { createDish, GetDish, UpdateDish, searchDishes };


