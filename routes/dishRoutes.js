const express = require("express");
const router = express.Router();
const { createDish, getAllDishes } = require("../controllers/dishesController");
const auth = require("../middlewares/auth");
router.post("/create/dish",auth,createDish);
router.get('/dish/all',getAllDishes)

module.exports.dishRoutes = router;