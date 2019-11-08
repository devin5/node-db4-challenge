const express = require("express");

const ingrediantsRouter = require("./Routes/ingrediantsRoute/ingrediantsRoute");
const recipeRouter = require("./Routes/recipeRouter/recipeRoute");
const rIRouter = require("./Routes/recipeIngrediants/rIRouter");
const stepsRouter = require("./Routes/steps/stepsRouter");

const server = express();
server.use(express.json());
server.use(Logger);

server.use("/api/ingrediants", ingrediantsRouter);
server.use("/api/recipes", recipeRouter);
server.use("/api/ri", rIRouter);
server.use("/api/steps", stepsRouter);

function Logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url}
      )}`
  );

  next();
}

module.exports = server;
