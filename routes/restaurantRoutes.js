const express = require("express");
const router = express.Router();
const { createRestaurant, getRestaurants } = require("../controllers/restaurantController");
const auth = require("../middlewares/auth");
router.post("/create/restaurant",auth,createRestaurant);
router.get("/all/restaurants",getRestaurants);

module.exports.restaurantRoutes = router;