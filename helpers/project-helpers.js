const db = require("../data/dbConfig");

module.exports = {
  getProjects,
  getProject,
  addProject,
  getActions,
  addAction,
  getProjectActions,
  getProject1
};

function getProjects() {
  return db("projects");
}

function getProject(id) {
  return db("projects")
    .where({ id })
    .first();
}

function addProject(project) {
  return db("projects").insert(project);
}

function getActions() {
  return db("actions");
}

function addAction(action) {
  return db("actions").insert(action);
}

function getProjectActions(id) {
  return db("actions").where({ project_id: id });
}

function getProject1(id) {
  return db("projects")
    .leftJoin("actions", "projects.id", "actions.project_id")
    .select("*")
    .where({ "projects.id": id });
}
