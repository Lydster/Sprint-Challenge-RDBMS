const express = require("express");
const helmet = require("helmet");
const db = require("./data/dbConfig");
const {
  getProjects,
  getProjectActions,
  addProject,
  getActions,
  addAction,
  getProject,
  getProject1
} = require("./helpers/project-helpers");

const server = express();

server.use(helmet());
server.use(express.json());

//PROJECTS
server.get("/api/projects", (req, res) => {
  getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ error: "cound not get projects." });
    });
});

server.post("/api/projects", (req, res) => {
  const project = req.body;
  console.log(project);
  if (!project.name || !project.description) {
    res.status(404).json({
      error: "please provide a name and description for the project."
    });
  } else {
    addProject(project)
      .then(here => {
        res.status(200).json({ message: "Successfully added" });
      })
      .catch(err => {
        res.status(500).json({ error: "Could not add project" });
      });
  }
});

server.get("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  getProject(id)
    .then(project => {
      if (project) {
        return getProjectActions(id).then(actions => {
          project.actions = actions;
          return res.status(200).json({ project });
        });
      } else {
        res.status(404).json({ error: "please provide a project id" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Could not get project" });
    });
});

//ACTIONS
server.get("/api/actions", (req, res) => {
  getActions()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ error: "cound not get actions." });
    });
});

server.post("/api/actions", (req, res) => {
  const action = req.body;
  console.log(action);
  if (!action.notes || !action.description || !action.project_id) {
    res.status(404).json({
      error:
        "please provide a name and description and project_id for the action."
    });
  } else {
    addAction(action)
      .then(here => {
        res.status(200).json({ message: "Successfully added" });
      })
      .catch(err => {
        res.status(500).json({ error: "Could not add action" });
      });
  }
});

// server.get("/api/projects/:id", (req, res) => {
//   const { id } = req.params;
//   getProject1(id)
//     .then(project => {
//       res.status(200).json(project);
//     })
//     .catch(err => {
//       res.status(500).json({ error: "Could not get project" });
//     });
// });

const port = 5000;
server.listen(port, () => {
  console.log(`listening on port ${port}!!`);
});
