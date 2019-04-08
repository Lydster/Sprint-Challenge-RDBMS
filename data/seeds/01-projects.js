exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      name: "Create algorithm to do all my work for me",
      description:
        "make a comprehensive list of how I spend my time. Allocate those activities to machine"
    },
    {
      name: "Adopt a puppy",
      description: "Find cute dog to bring home."
    }
  ]);
};
