const db = require("../data/dbConfig");

module.exports = {
  getProjects
};

function getProjects() {
  return db("projects");
}
