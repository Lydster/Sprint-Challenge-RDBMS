const db = require("../data/dbConfig");

module.exports = {
  getProjects,
  getProject
};

function getProjects() {
  return db("projects");
}

function getProject(id) {
  return db("projects")
    .leftJoin("actions", "projects.id", "actions.project_id")
    .select("*")
    .where({ "projects.id": id });
}
