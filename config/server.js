module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url:'http://5a58ddd88f2c.ngrok.io',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'bfa62541e70fb910975806585f93a4ea'),
    },
  },
});
