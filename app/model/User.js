"use strict";

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define("users", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    login: STRING,
    name: { type: STRING(30), unique: true, allowNull: false },
    password: { type: STRING(32), allowNull: false },
    age: INTEGER,
    lastSignInAt: DATE,
  });

  User.findByLogin = async function(login) {
    return await this.findOne({
      where: {
        login,
      },
    });
  };

  // don't use arraw function
  User.prototype.logSignin = async function() {
    return await this.update({ last_sign_in_at: new Date() });
  };
  return User;
};
