const Dish = require("../models/DishModel");
const users = require("../models/UserModels");


exports.getrecipe = async (req, res) => {
  try {
    const { id } = req.params;

    const records = await Dish.findById(id).populate("ratings.comments.user");
    // تحقق إذا لم يتم العثور على أي وصفة
    if (!records || records.length === 0) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.likeDish = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) {
      return res.status(404).json({ message: "dish not found" });
    }

    const userId = req.user.id;
    if (dish.ratings.length === 0) {
      dish.ratings.push({});
    }

    const likeIndex = dish.ratings[0].likes.indexOf(userId);

    if (likeIndex > -1) {
      dish.ratings[0].likes.splice(likeIndex, 1);
    } else {
      dish.ratings[0].likes.push(userId);
    }

    await dish.save();
    res.json({ likes: dish.ratings[0].likes.length });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
exports.addComment = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) {
      return res.status(404).json({ message: "dish not found" });
    }

    const { text, parentId } = req.body;
    const userId = req.user.id;

    if (dish.ratings.length === 0) {
      dish.ratings.push({});
    }

    if (parentId) {
      const parentComment = dish.ratings[0].comments.id(parentId);
      if (!parentComment) {
        return res.status(404).json({ message: "Parent comment not found" });
      }
      parentComment.replies.push({ text, user: userId });
    } else {
      dish.ratings[0].comments.push({ text, user: userId });
    }

    await dish.save();
    res.json(dish.ratings[0].comments);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.reportdish = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) {
      return res.status(404).json({ message: "dish not found" });
    }

    const { reason } = req.body;
    const userId = req.user.id; // Using the hardcoded user ID for testing

    dish.ratings[0].reportFlag.isReported = true;
    dish.ratings[0].reportFlag.reports.push({ reason, user: userId });

    await dish.save();
    res.json({ message: "dish reported successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.Favorites = async (req, res) => {
    try {
      const dish = await Dish.findById(req.params.id);
      if (!dish) {
        return res.status(404).json({ message: "dish not found" });
      }
  
      const userId = req.user.id;
      if (dish.ratings.length === 0) {
        dish.ratings.push({});
      }
  
      const FavoriteIndex = dish.ratings[0].Favorites.indexOf(userId);
  
      if (FavoriteIndex > -1) {
        dish.ratings[0].Favorites.splice(FavoriteIndex, 1);
      } else {
        dish.ratings[0].Favorites.push(userId);
      }
  
      await dish.save();
      res.json({ Favorites: dish.ratings[0].Favorites.length });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };


  exports.getFavorites = async (req, res) => {
    try {
      const Favorite = await Dish.find({ "ratings.Favorites": req.user.id });
  
      res.status(200).json({ Favorite });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  };