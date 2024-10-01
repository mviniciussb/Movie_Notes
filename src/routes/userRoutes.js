const { Router } = require("express");
const userRoutes = Router();

userRoutes.get("/", (request, response) => {
  response.send("Ai Ai Ai :D");
});

module.exports = userRoutes;
