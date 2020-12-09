module.exports = {
  webpack: (config, webpack) => {
    config.plugins.push(new webpack.DefinePlugin({
      'NEXT_PREVIEW_API_URL': JSON.stringify(process.env.NEXT_PREVIEW_API_URL),
      'STRAPI_PREVIEW_SECRET': JSON.stringify(process.env.STRAPI_PREVIEW_SECRET),
    }));

    return config;
  },
};