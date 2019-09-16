"use strict";

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const RolePermission = app.model.define(
    "role_permission",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      createdAt: DATE,
      updatedAt: DATE,
    },
    {
      freezeTableName: true,
    }
  );
  RolePermission.associate = function() {
    app.model.Permission.belongsToMany(app.model.Role, {
      through: "role_permission",
    });
    app.model.Role.belongsToMany(app.model.Permission, {
      through: "role_permission",
    });
  };
  return RolePermission;
};
