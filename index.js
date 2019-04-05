const express = require("express");
const helmet = require("helmet");
const db = require("./data/dbConfig");
const { getProjects, getProject } = require("./helpers/project-helpers");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/api/projects", (req, res) => {
  getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: "cound not get projects." });
    });
});

server.post("api/projects", (req, res) => {
  const { name, description } = req.body;
  addProject({ name, description })
    .then(project => {
      req.status(200).json({ message: "Successfully added" });
    })
    .catch(err => {
      res.status(500).json({ error: "Could not add project" });
    });
});

server.get("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  getProject(id)
    .then(project => {
      res.status(200).json({ project });
    })
    .catch(err => {
      res.status(500).json({ error: "Could not get project" });
    });
});

const port = 5000;
server.listen(port, () => {
  console.log(`listening on port ${port}!!`);
});
