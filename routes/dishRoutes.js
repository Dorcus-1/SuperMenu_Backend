const express = require("express");
const router = express.Router();
const { createDish, getAllDishes,deleteDish,deleteAllDishes,getDishByMenuId,getDishWithChicken,getDishWithCheese, getAllDishesByMenu } = require("../controllers/dishesController");
const auth = require("../middlewares/auth");
const upload = require('../middlewares/multer');
router.post("/create/dish",auth, upload.single('image'),createDish);
router.get('/dish/all',getAllDishes);
router.delete('/dish/delete/:id',auth,deleteDish);
router.delete('/dish/deleteAll',auth,deleteAllDishes);
router.get('/dish/menu/:id',getDishByMenuId);
router.get('/dish/chicken',getDishWithChicken);
router.get('/dish/cheese',getDishWithCheese);

module.exports.dishRoutes = router;