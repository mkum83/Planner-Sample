var webpackConfig = require('./configs/webpack.common.js');
//webpackConfig.entry = {};

var testGlob = './tests/**/*.test.js';
var srcGlob = './src/js/*.js';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    autoWatchBatchDelay: 300,

    files: [testGlob,srcGlob],

    preprocessors: {
      [testGlob]: ['webpack'],      
      [srcGlob]: ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
}