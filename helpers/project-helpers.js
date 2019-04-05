const db = require("../data/dbConfig");

module.exports = {
  getProjects,
  getProject,
  addProject
};

function getProjects() {
  return db("projects");
}

function getProject(id) {
  return db("projects")
    .leftOuterJoin("actions", "projects.id", "actions.project_id")
    .select("*")
    .where({ "projects.id": id });
}

function addProject(project) {
  return db("projects").insert(project);
}
