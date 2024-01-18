const express = require("express");

const DocumentsController = require("../controller/DocumentsController");

const documentsRouter = express.Router();

const documentsController = new DocumentsController();

documentsRouter.get("/", documentsController.findAll);
documentsRouter.get("/:id", documentsController.findById);
documentsRouter.post("/", documentsController.create);
documentsRouter.put("/:id", documentsController.update);
documentsRouter.delete("/:id", documentsController.delete);

module.exports = documentsRouter;
