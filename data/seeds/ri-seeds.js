exports.seed = function(knex) {
  return knex("recipe_ingrediants").insert([
    { recipe_id: 1, step_number: 1, instructions: "solve prime number theory" },
    { recipe_id: 1, step_number: 2, instructions: "crack cyber security" },
    { recipe_id: 1, step_number: 1, instructions: "blackmail world leaders" },
   

  ]);
};
