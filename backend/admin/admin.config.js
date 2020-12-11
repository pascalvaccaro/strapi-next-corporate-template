module.exports = {
  webpack: (config, webpack) => {
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.NEXT_PREVIEW_API_URL': JSON.stringify(process.env.NEXT_PREVIEW_API_URL),
      'process.env.STRAPI_PREVIEW_SECRET': JSON.stringify(process.env.STRAPI_PREVIEW_SECRET),
      'process.env.GITHUB_ACCESS_TOKEN': JSON.stringify(process.env.GITHUB_ACCESS_TOKEN),
      'process.env.GITHUB_REPOSITORY': JSON.stringify(process.env.GITHUB_REPOSITORY),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }));

    return config;
  },
};