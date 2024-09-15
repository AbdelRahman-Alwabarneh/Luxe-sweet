const express = require("express");
const router = express.Router();
const dishController = require("../Controllers/reviewdish");
const verifyToken = require('../Middleware/auth');


router.put("/:id/like", verifyToken,dishController.likeDish);
router.put("/:id/Favorites", verifyToken,dishController.Favorites);
router.get("/getFavorites", verifyToken,dishController.getFavorites);
router.put("/:id/comment", verifyToken,dishController.addComment);
router.put("/:id/report", verifyToken,dishController.reportdish);
router.get("/:id", dishController.getrecipe);
module.exports = router;
