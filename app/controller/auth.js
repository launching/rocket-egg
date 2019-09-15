"use strict";
const Controller = require("egg").Controller;
const { toInt } = require("../common/util");

class AuthController extends Controller {
  async login() {
    const { request } = this.ctx;
    const { name, password } = request.body;

    // usually this would be a database call:
    const user = await this.ctx.model.User.findOne({
      where: {
        name,
        password,
      },
    });
    console.dir(user);
    if (!user) {
      this.ctx.status = 401;
      this.ctx.body = { message: "no such user found" };
      return;
    }

    const payload = { id: user.id, name: user.name };
    const token = this.ctx.app.jwt.sign(
      payload,
      this.ctx.app.config.jwt.secret
    );
    this.ctx.status = 200;
    this.ctx.body = { message: "ok", token: token };
  }

  async logout() {
    const ctx = this.ctx;
  }
}

module.exports = AuthController;
