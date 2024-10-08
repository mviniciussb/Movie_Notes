const knex = require("../database/knex/index");

class NotesController {
  async create(request, response) {
    const { title, description, avaliation } = request.body;
    const { user_id } = request.params;

    if (avaliation >= 1 && avaliation <= 5) {
      const [notes_id] = await knex("notes").insert({
        title,
        description,
        avaliation,
        user_id,
      });
    }  else {
      return response
        .status(400)
        .json({ error: "Digite apenas números no intervalo de 1 a 5." });
    }



    return response
      .status(201)
      .json({ message: `Avaliação do filme ${title} cadastrada com sucesso.` });
  }
}

module.exports = NotesController;
