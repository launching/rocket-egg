"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let permission, role, res;
    try {
      permission = await queryInterface.bulkInsert("permission", [
        {
          name: "ServiceAdmin",
        },
      ]);
    } catch (e) {
      console.dir(e);
    }

    try {
      role = await queryInterface.bulkInsert("role", [
        {
          name: "Admin",
        },
      ]);
    } catch (e) {
      console.dir(e);
    }

    try {
      res = await queryInterface.bulkInsert("role_permission", [
        {
          role_id: role,
          permission_id: permission,
        },
      ]);
    } catch (e) {
      console.dir(e);
    }

    try {
      res = await queryInterface.bulkInsert("user", [
        {
          name: "op_service",
          password: "xp123456@",
          role_id: role,
        },
      ]);
    } catch (e) {
      console.dir(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    let res;
    try {
      res = await queryInterface.bulkDelete("user", null, {});
    } catch (e) {}
    console.dir(res);

    try {
      res = await queryInterface.bulkDelete("role_permission", null, {});
    } catch (e) {}

    console.dir(res);

    try {
      res = await queryInterface.bulkDelete("role", null, {});
    } catch (e) {}

    console.dir(res);
    try {
      res = await queryInterface.bulkDelete("permission", null, {});
    } catch (e) {}

    console.dir(res);
  },
};
