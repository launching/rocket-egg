"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable("users", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      login: STRING,
      name: { type: STRING(30), unique: true },
      password: STRING(32),
      age: INTEGER,
      last_sign_in_at: DATE,
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable("users");
  },
};
