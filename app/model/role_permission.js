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
    app.model.RolePermission.belongsTo(app.model.Role, { as: "role" });
    app.model.RolePermission.belongsTo(app.model.Permission, {
      as: "permission",
    });
  };
  return RolePermission;
};
