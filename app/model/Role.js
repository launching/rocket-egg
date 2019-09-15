"use strict";

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const Role = app.model.define(
    "role",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: STRING(30),
        unique: true,
        allowNull: false,
      },
      status: {
        type: INTEGER,
      },
    },
    {
      freezeTableName: true,
    }
  );
  Role.associate = function() {
    app.model.Role.hasMany(app.model.User, {
      as: "user",
    });
  };
  return Role;
};
