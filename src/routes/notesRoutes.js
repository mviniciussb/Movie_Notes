const NotesController = require("../controllers/NotesController");
const { Router } = require("express");
const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.post("/:user_id", notesController.create);
notesRoutes.put("/:id", notesController.update);


module.exports = notesRoutes;
