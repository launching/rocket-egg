/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1567749120671_3234";

  // add your middleware config here
  config.middleware = ["errorHandler", "authHandler"];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.sequelize = {
    dialect: "mysql",
    host: "127.0.0.1",
    password: "password",
    port: 3306,
    database: "rocketEgg",
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.jwt = {
    secret: "123456",
  };
  return {
    ...config,
    ...userConfig,
    errorHandler: {
      match: "/api",
    },
  };
};
