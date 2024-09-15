const express = require("express");
const router = express.Router();
const recipeController = require("../Controllers/reviewrecipe");
const verifyToken = require('../Middleware/auth');

router.put("/:id/like", verifyToken,recipeController.likeRecipe);
router.put("/:id/Favorites", verifyToken,recipeController.Favorites);
router.get("/getFavorites", verifyToken,recipeController.getFavorites);
router.put("/:id/comment", verifyToken,recipeController.addComment);
router.put("/:id/report", verifyToken,recipeController.reportRecipe);
router.put("/:id/share", recipeController.shareRecipe);
router.get("/:id", recipeController.getrecipe);
module.exports = router;
