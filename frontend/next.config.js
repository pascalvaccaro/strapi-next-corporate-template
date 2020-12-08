require('dotenv').config();

module.exports = {
    env: {
        STRAPI_URL: process.env.STRAPI_URL,
        ASSET_URL: process.env.ASSET_URL,
    },
};