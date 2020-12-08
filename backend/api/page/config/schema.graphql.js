module.exports = {
  query: `
    pageBySlug(slug: String): Page
  `,
  resolver: {
    Query: {
      pageBySlug: {
        description: 'Return a single page based on its slug',
        resolver: 'application::page.page.findOneBySlug'
      },
    },
  },
};