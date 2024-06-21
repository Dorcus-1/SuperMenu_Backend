const express = require("express");
const router = express.Router();
const { createUser,loginUser, getUsers, getProfile } = require("../controllers/userController");
const auth = require("../middlewares/auth");

router.post("/user/create",createUser); 
router.post("/user/login", loginUser); 
router.get("/user/all",getUsers);
router.get("/user/profile",auth,getProfile)


module.exports.userRoutes = router;