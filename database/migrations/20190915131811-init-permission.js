"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable("permission", {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: STRING,
        unique: true,
        allowNull: false,
      },
      url: {
        type: STRING,
      },
      status: {
        type: INTEGER,
      },
      created_at: DATE,
      updated_at: DATE,
      permission_id: {
        type: INTEGER,
      },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable("permission");
  },
};
