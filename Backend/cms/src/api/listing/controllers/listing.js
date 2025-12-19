'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::listing.listing', ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized();
    }

    // 🔥 AUTO-SET OWNER
    ctx.request.body.data.owner = user.id;

    return await super.create(ctx);
  },

  async find(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.unauthorized();
    }

    ctx.query = {
      ...ctx.query,
      filters: { owner: user.id },
      populate: '*',
    };

    return await super.find(ctx);
  },
}));
