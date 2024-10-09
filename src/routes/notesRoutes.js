const NotesController = require("../controllers/NotesController");
const { Router } = require("express");
const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.get("/", notesController.index);
notesRoutes.put("/:id", notesController.update);
notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);



module.exports = notesRoutes;
