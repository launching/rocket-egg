"use strict";

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Group = app.model.define("groups", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING(30), unique: true, allowNull: false },
  });

  return Group;
};
