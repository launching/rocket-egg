"use strict";
const Controller = require("egg").Controller;
const { toInt } = require("../common/util");

class RoleController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    ctx.body = await ctx.model.Role.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Role.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { name } = ctx.request.body;
    const Role = await ctx.model.Role.create({ name });
    ctx.status = 201;
    ctx.body = Role;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const Role = await ctx.model.Role.findByPk(id);
    if (!Role) {
      ctx.status = 404;
      return;
    }

    const { name } = ctx.request.body;
    await Role.update({ name });
    ctx.body = Role;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const Role = await ctx.model.Role.findByPk(id);
    if (!Role) {
      ctx.status = 404;
      return;
    }

    await Role.destroy();
    ctx.status = 200;
  }
}

module.exports = RoleController;
