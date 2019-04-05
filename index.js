const express = require("express");
const helmet = require("helmet");
const db = require("./data/dbConfig");

//import helpers later!! don't forget >:o

const server = express();

server.use(helmet());
server.use(express.json());

const port = 5000;
server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
