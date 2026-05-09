const svgoConfig = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIds: false,
          convertPathData: {
            floatPrecision: 3,
          },
          mergePaths: false,
        },
      },
    },
    {
      name: 'removeViewBox',
      active: false,
    },
    {
      name: 'removeDimensions',
      active: false,
    },
  ],
};

export default svgoConfig;
