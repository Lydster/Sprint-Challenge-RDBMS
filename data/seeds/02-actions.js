exports.seed = function(knex, Promise) {
  return knex("actions").insert([
    {
      project_id: 1,
      description: "record myself",
      notes: "Do i actually say anything that a robot couldnt say?"
    }
  ]);
};
