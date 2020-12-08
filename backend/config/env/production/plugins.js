module.exports = {
  upload: {
    provider: 'google-cloud-storage',
    providerOptions: {
      bucketName: 'pascal-vaccaro.appspot.com',
      publicFiles: true,
      uniform: false,
      basePath: '/uploads',
    }
  }
}