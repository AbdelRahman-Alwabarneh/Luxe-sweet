const express = require("express");
const { createDish, GetDish, UpdateDish, searchDishes } = require("../controllers/DishController");


const router = express.Router();

router.post("/createDish", createDish);
router.get("/GetDish", GetDish);
router.put("/UpdateDish/:_id", UpdateDish);
router.get('/searchDishes', searchDishes); 


module.exports = router;