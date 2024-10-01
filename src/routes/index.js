const userRoutes = require("./usersRoutes");
const notesRoutes = require("./notesRoutes");
const { Router } = require("express");
const routes = Router();

routes.use("/users", userRoutes);
routes.use("/notes", notesRoutes);

module.exports = routes;
