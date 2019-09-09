"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable("groups", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: STRING(30), unique: true, allowNull: false },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable("groups");
  },
};
