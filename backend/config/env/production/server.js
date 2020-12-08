module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://backend-dot-pascal-vaccaro.ew.r.appspot.com',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'c7c380b1d24146ec15eec81783d9af24'),
    },
  },
});
