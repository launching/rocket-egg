"use strict";

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Role = app.model.define("roles", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING(30), unique: true, allowNull: false },
  });

  return Role;
};
