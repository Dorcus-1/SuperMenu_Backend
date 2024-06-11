const express = require("express");
const router = express.Router();
const { createMenu, getAllMenu } = require("../controllers/menuController");
const auth = require("../middlewares/auth");
router.post("/create/menu",auth,createMenu);
router.get('/menu/all',getAllMenu)

module.exports.menuRoutes = router;