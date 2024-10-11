const userRoutes = require("./usersRoutes");
const notesRoutes = require("./notesRoutes");
const tagsRoutes = require("./tagsRoutes");

const { Router } = require("express");
const routes = Router();

routes.use("/users", userRoutes);
routes.use("/notes", notesRoutes);
routes.use("/tags", tagsRoutes);


module.exports = routes;
