'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::listing.listing', ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user;
    if (!user) return ctx.unauthorized();

    ctx.request.body.data.owner = user.id;
    return await super.create(ctx);
  },

  async find(ctx) {
    const user = ctx.state.user;
    if (!user) return ctx.unauthorized();

    ctx.query = {
      ...ctx.query,
      filters: { owner: user.id },
      populate: '*',
    };

    return await super.find(ctx);
  },

  async update(ctx) {
  const user = ctx.state.user;
  const id = ctx.params.id;

  if (!user) return ctx.unauthorized();

  const listing = await strapi.entityService.findOne(
    "api::listing.listing",
    id,
    { populate: ["owner"] }
  );

  if (listing.owner.id !== user.id) {
    return ctx.forbidden("Not allowed");
  }

  return await super.update(ctx);
}

}));
