"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::listing.listing", ({ strapi }) => ({

  // ✅ CREATE – only logged in users
  async create(ctx) {
    const user = ctx.state.user;
    if (!user) return ctx.unauthorized();

    ctx.request.body.data.owner = user.id;
    return await super.create(ctx);
  },

  // ✅ FIND – allow public + admin + host
  async find(ctx) {
    return await super.find(ctx);
  },

  // ✅ UPDATE – only owner can update
  async update(ctx) {
    const user = ctx.state.user;
    const { id } = ctx.params;

    if (!user) return ctx.unauthorized();

    const listing = await strapi.entityService.findOne(
      "api::listing.listing",
      id,
      { populate: ["owner"] }
    );

    if (!listing) {
      return ctx.notFound("Listing not found");
    }

    if (listing.owner?.id !== user.id) {
      return ctx.forbidden("You are not allowed to edit this listing");
    }

    return await super.update(ctx);
  },

  // ✅ DELETE – only owner
  async delete(ctx) {
    const user = ctx.state.user;
    const { id } = ctx.params;

    if (!user) return ctx.unauthorized();

    const listing = await strapi.entityService.findOne(
      "api::listing.listing",
      id,
      { populate: ["owner"] }
    );

    if (listing.owner?.id !== user.id) {
      return ctx.forbidden("You cannot delete this listing");
    }

    return await super.delete(ctx);
  },
}));
