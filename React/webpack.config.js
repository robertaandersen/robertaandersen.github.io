const commonConfig = require('./build-utils/webpack.common');
const argv = require('webpack-nano/argv');
const { merge } = require('webpack-merge');


module.exports = () => {

  const envConfig = require(`./build-utils/webpack.prod.js`);
  const mergedConfig = merge(commonConfig, envConfig);

  return mergedConfig;
};