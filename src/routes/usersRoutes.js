const UserController = require("../controllers/userController");
const { Router } = require("express");
const userRoutes = Router();

const userController = new UserController();

userRoutes.put("/:id", userController.update);
userRoutes.post("/", userController.create);


module.exports = userRoutes;
