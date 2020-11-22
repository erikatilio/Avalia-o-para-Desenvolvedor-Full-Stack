module.exports = (app) => {
  const colaboradores = require("../controller/colaborador.controller.js");

  var router = require("express").Router();

  // Create a new colaborador
  router.post("/", colaboradores.create);

  // Retrieve all colaboradores
  router.get("/", colaboradores.findAll);

  // Retrieve a single colaborador with id
  router.get("/:id", colaboradores.findOne);

  // Update a colaborador with id
  router.put("/:id", colaboradores.update);

  // Delete a colaborador with id
  router.delete("/:id", colaboradores.delete);

  // Delete all colaboradores
  router.delete("/", colaboradores.deleteAll);

  app.use("/api/colaboradores", router);
};
