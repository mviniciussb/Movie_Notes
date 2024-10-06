exports.up = function (knex) {
  return knex.schema.createTable("notes", (table) => {
    table.increments("id").primary();
    table.text("title").notNullable();
    table.text("description").notNullable();
    table.integer("avaliation").notNullable();
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("notes");
};
