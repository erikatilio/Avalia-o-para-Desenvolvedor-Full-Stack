module.exports = (sequelize, Sequelize) => {
  const Colaborador = sequelize.define("colaborador", {
    nome: {
      type: Sequelize.STRING,
    },
    cpf: {
      type: Sequelize.STRING,
    },
    cargo: {
      type: Sequelize.STRING,
    },
    setor: {
      type: Sequelize.STRING,
    },
  });

  return Colaborador;
};
