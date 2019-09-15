"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get("/", controller.home.index);
  router.post("auth", "/login", controller.auth.login);
  router.resources("users", "/users", controller.user);
  router.resources("groups", "/groups", controller.group);
  router.resources("roles", "/roles", controller.role);
  router.resources(
    "permissions",
    "/permissions",
    app.jwt,
    controller.permission
  );
  router.resources("topics", "/api/v2/topics", app.controller.topics);
};
