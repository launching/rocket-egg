"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE } = Sequelize;
    await queryInterface.createTable("role_permission", {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      role_id: {
        type: INTEGER,
      },
      permission_id: {
        type: INTEGER,
      },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable("permission");
  },
};
