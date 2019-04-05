const express = require("express");
const helmet = require("helmet");
const db = require("./data/dbConfig");
const { getProjects } = require("./helpers/project-helpers");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/api/projects", (req, res) => {
  getProjects()
    .then(projects => {
      res.status(200).json(projects);
      console.log(projects);
    })
    .catch(err => {
      res.status(500).json({ error: "cound not get projects." });
    });
});

const port = 5000;
server.listen(port, () => {
  console.log(`listening on port ${port}!!`);
});
