module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  auth: {
    options: {
      expiresIn: "365d",
    },
    secret: env('ADMIN_JWT_SECRET'),
  },
});
