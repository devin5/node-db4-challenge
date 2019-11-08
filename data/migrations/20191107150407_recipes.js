exports.up = function(knex) {
  return knex.schema
    .createTable("steps", tbl => {
      // the type of the Primary Key is: integer without negative values, also called unsigned
      tbl.increments();

      tbl.string("step", 255).notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.integer("step_number").unsigned();
    })

    .createTable("recipes", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable();

     
    })
    .createTable("ingrediants", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
    })
    .createTable("recipe_ingrediants", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("ingrediant_id")
        .unsigned()
        .references("id")
        .inTable("ingrediants")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.float("quantity");
    });
};

exports.down = function(knex) {
  // drop tables in reverse order when using foreign keys
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingrediants")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipe_ingrediants");
};

// knex ... command not found: knex -> npx knex ... or install knex globally with npm i -g knex
