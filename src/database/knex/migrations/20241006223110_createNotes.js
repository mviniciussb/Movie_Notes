exports.up = function (knex) {
  return knex.schema.createTable("notes", (table) => {
    table.increments("id");
    table.integer("note_id").references("id").inTable("notes");
    table.text("title");
    table.text("description");
    table.integer("avaliation").check("avaliation >= 1 AND avaliation <= 5");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("notes");
};
