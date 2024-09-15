// controllers/dishController.js
const Dish = require('../models/Dish');
const Cuisine = require('../models/Cuisine'); // Ensure the path is correct

// Fetch all dishes
exports.getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find({ isDeleted: false }).populate('chef').populate('cuisine');
    res.status(200).json(dishes);
  } catch (error) {
    console.error('Error fetching dishes:', error.message);
    res.status(500).json({ message: 'Error fetching dishes', error: error.message });
  }
};

// Update dish approval status
exports.updateApprovalStatus = async (req, res) => {
  const { dishId, approved } = req.body;

  try {
    const dish = await Dish.findByIdAndUpdate(
      dishId,
      { approved },
      { new: true }
    );

    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }

    res.status(200).json({ message: 'Dish updated successfully', dish });
  } catch (error) {
    console.error('Error updating approval status:', error.message);
    res.status(500).json({ message: 'Error updating approval status', error: error.message });
  }
};


// Get count of approved dishes
exports.getApprovedDishesCount = async (req, res) => {
  try {
    const count = await Dish.countDocuments({ approved: true });
    res.status(200).json({ count });
  } catch (error) {
    console.error('Error fetching approved dishes count:', error.message);
    res.status(500).json({ message: 'Error fetching approved dishes count', error: error.message });
  }
};