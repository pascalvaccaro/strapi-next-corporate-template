module.exports = {
  webpack: (config, webpack) => {
    config.plugins.push(new webpack.DefinePlugin({
      'NEXT_PREVIEW_API_URL': JSON.stringify(process.env.NEXT_PREVIEW_API_URL),
      'STRAPI_PREVIEW_SECRET': JSON.stringify(process.env.STRAPI_PREVIEW_SECRET),
      'GITHUB_ACCESS_TOKEN': JSON.stringify(process.env.GITHUB_ACCESS_TOKEN),
      'REPOSITORY_PATH': JSON.stringify(process.env.REPOSITORY_PATH),
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }));

    return config;
  },
};