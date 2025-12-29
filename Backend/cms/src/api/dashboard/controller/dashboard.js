module.exports = {
  async stats(ctx) {
    try {
      const totalListings = await strapi.db
        .query("api::listing.listing")
        .count();

      const totalUsers = await strapi.db
        .query("plugin::users-permissions.user")
        .count();

      const totalBookings = await strapi.db
        .query("api::booking.booking")
        .count();

      ctx.body = {
        totalListings,
        totalUsers,
        totalBookings,
      };
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
