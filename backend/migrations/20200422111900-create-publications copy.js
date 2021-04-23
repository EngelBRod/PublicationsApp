module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('publications', {
      id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      author: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      body: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      time: {
        type: Sequelize.TIME,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('publications');
  },
};
