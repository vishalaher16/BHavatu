import { factories } from '@strapi/strapi';

// Create a core controller for orders
export default factories.createCoreController('api::order.order', ({ strapi }) => ({
  // Override the default `find` function if needed
  async find(ctx) {
    try {
      // You can add custom logic here if necessary
      const { query } = ctx;

      // Call the default find service
      const orders = await strapi.entityService.findMany('api::order.order', {
        filters: query.filters,
        populate: query.populate || '*', // Adjust based on relationships or populate settings
      });

      return orders;
    } catch (error) {
      ctx.throw(500, 'An error occurred while fetching orders.');
    }
  },

  // Add other methods like findOne, create, update, delete as needed
}));
