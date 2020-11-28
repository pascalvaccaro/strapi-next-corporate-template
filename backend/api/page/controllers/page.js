'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findOneBySlug(ctx) {
    const { _slug } = ctx.params;
    const [page] = await strapi.query('page').find({ slug: _slug });
    ctx.send(page);
  }
};
