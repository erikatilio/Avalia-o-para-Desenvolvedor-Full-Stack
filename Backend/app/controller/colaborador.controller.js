const db = require("../model");
const Colaborador = db.colaborador;
const Op = db.Sequelize.Op;

// Create and Save a new colaborador
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nome) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Colaborador
  const colaborador = {
    nome: req.body.nome,
    cpf: req.body.cpf,
    cargo: req.body.cargo,
    setor: req.body.setor,
    salvo: req.body.salvo ? req.body.salvo : false,
  };

  // Save Colaborador in the database
  Colaborador.create(colaborador)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the colaborador.",
      });
    });
};

// Retrieve all colaboradors from the database.
exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  Colaborador.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Colaboradors.",
      });
    });
};

// Find a single colaborador with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Colaborador.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Colaborador with id=" + id,
      });
    });
};

// Update a colaborador by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Colaborador.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Colaborador was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Colaborador with id=${id}. Maybe Colaborador was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Colaborador with id=" + id,
      });
    });
};

// Delete a colaborador with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Colaborador.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Colaborador was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Colaborador with id=${id}. Maybe Colaborador was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Colaborador with id=" + id,
      });
    });
};

// Delete all colaboradors from the database.
exports.deleteAll = (req, res) => {
  Colaborador.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Colaboradors were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Colaboradors.",
      });
    });
};
