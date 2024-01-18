const express = require("express");

const SessionController = require("../controller/SessionController");

const sessionRouter = express.Router();

const sessionController = new SessionController();

sessionRouter.post("/", sessionController.create);

module.exports = sessionRouter;
