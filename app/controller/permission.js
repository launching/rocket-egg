"use strict";
const Controller = require("egg").Controller;
const { toInt } = require("../common/util");

class PermissionController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
      include: [
        {
          model: ctx.model.Role,
          as: "roles",
        },
      ],
    };
    ctx.body = await ctx.model.Permission.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Permission.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { name } = ctx.request.body;
    const Permission = await ctx.model.Permission.create({ name });
    ctx.status = 201;
    ctx.body = Permission;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const Permission = await ctx.model.Permission.findByPk(id);
    if (!Permission) {
      ctx.status = 404;
      return;
    }

    const { name } = ctx.request.body;
    await Permission.update({ name });
    ctx.body = Permission;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const Permission = await ctx.model.Permission.findByPk(id);
    if (!Permission) {
      ctx.status = 404;
      return;
    }

    await Permission.destroy();
    ctx.status = 200;
  }
}

module.exports = PermissionController;
