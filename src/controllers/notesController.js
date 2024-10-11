const knex = require("../database/knex/index");

class NotesController {
  async create(request, response) {
    const { title, description, avaliation, tags } = request.body;
    const { user_id } = request.params;
    let note_id;

    if (avaliation >= 1 && avaliation <= 5) {
      [note_id] = await knex("notes").insert({
        title,
        description,
        avaliation,
        user_id,
      });
    } else {
      return response
        .status(400)
        .json({ error: "Digite apenas números no intervalo de 1 a 5." });
    }

    const insertTags = tags.map((name) => {
      return {
        name,
        user_id,
        note_id,
      };
    });

    await knex("tags").insert(insertTags);

    return response
      .status(201)
      .json({ message: `Avaliação do filme ${title} cadastrada com sucesso.` });
  }

  async update(request, response) {
    const { title, description, avaliation, tags } = request.body;
    const { id } = request.params;

    if (avaliation < 1 || avaliation > 5) {
      return response
        .status(400)
        .json({ error: "Digite apenas números no intervalo de 1 a 5." });
    }

    const noteExists = await knex("notes").where({ id }).first();

    if (!noteExists) {
      return response.status(404).json({ error: "Nota não encontrada." });
    }

    await knex("notes").where({ id }).update({
      title,
      description,
      avaliation,
      updated_at: knex.fn.now(),
    });

    return response
      .status(200)
      .json({ message: "Nota atualizada com sucesso." });
  }

  async show(request, response) {
    const { id } = request.params;

    const note = await knex("notes").where({ id }).first();

    if (!note) {
      return response.status(404).json({ Error: "Nota não encontrada." });
    }

    const tags = await knex("tags").where({ note_id: note.id });

    return response.status(200).json({
      ...note,
      tags,
    });
  }

  async index(request, response) {
    const { user_id, title, tags } = request.query
    let notes

    if (tags) {
      const filterTags = tags.split(",").map(tag => tag.trim())

      notes = await knex("tags")
        .select([
          "notes.id",
          "notes.title",
          "notes.user_id"
        ])
        .where("notes.user_id", user_id)
        .whereIn("name", filterTags)
        .innerJoin("notes", "notes.id", "tags.note_id")

    } else {
      notes = await knex("notes")
        .where({ user_id })
        .whereLike("title", `%${title}%`)
    }

    const userTags = await knex("tags").where({ user_id })


    const notesWithTags = notes.map(note => {
      const notesTag = userTags.filter(tag => tag.note_id === note.id)

      return {
        ...note, tags: notesTag
      }
    })


    return response.status(200).json(notesWithTags)
  }
}

module.exports = NotesController;
