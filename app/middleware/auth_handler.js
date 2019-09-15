"use strict";

module.exports = () => {
  return async function authHandler(ctx, next) {
    if (ctx.request.url === "/login") {
      return next();
    }

    try {
      const authorization = ctx.request.headers.authorization;
      const token = authorization.split(" ")[1];

      const decoded = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);

      const user = await ctx.model.User.findByPk(decoded.id);
      if (user && user.name === decoded.name) {
        return next();
      }
    } catch (e) {
      console.error(e);
    }
    ctx.status = 401;
    ctx.body = {
      error: "401",
      message: "token is invalid",
    };
  };
};
