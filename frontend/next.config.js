require('dotenv').config();

module.exports = {
    env: {
        STRAPI_URL: process.env.API_URL,
        ASSET_URL: process.env.ASSET_URL,
    },
};