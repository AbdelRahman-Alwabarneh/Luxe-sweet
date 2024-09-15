const Recipe = require('../models/Recipe'); // تأكد من مسار النموذج الصحيح

// عرض جميع الوصفات
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).send('Error fetching recipes');
  }
};

// تحديث حالة الموافقة للوصفة
exports.updateApprovalStatus = async (req, res) => {
  const { recipeId, approved } = req.body;
  try {
    const recipe = await Recipe.findByIdAndUpdate(
      recipeId,
      { isApproved: approved },
      { new: true }
    );
    if (!recipe) {
      return res.status(404).send('Recipe not found');
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).send('Error updating approval status');
  }
};


// Get count of approved recipes
exports.getApprovedCount = async (req, res) => {
  try {
    const count = await Recipe.countDocuments({ isApproved: true });
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).send('Error fetching approved recipes count');
  }
};