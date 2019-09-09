"use strict";
const Controller = require("egg").Controller;
const { toInt } = require("../common/util");

class GroupController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    ctx.body = await ctx.model.Group.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Group.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { name } = ctx.request.body;
    const Group = await ctx.model.Group.create({ name });
    ctx.status = 201;
    ctx.body = Group;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const Group = await ctx.model.Group.findByPk(id);
    if (!Group) {
      ctx.status = 404;
      return;
    }

    const { name } = ctx.request.body;
    await Group.update({ name });
    ctx.body = Group;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const Group = await ctx.model.Group.findByPk(id);
    if (!Group) {
      ctx.status = 404;
      return;
    }

    await Group.destroy();
    ctx.status = 200;
  }
}

module.exports = GroupController;
