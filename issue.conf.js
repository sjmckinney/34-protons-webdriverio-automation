'use strict';
 
const chai = require('chai');
 
global.assert = chai.assert;
global.chai = chai;
chai.Should();
 
exports.config = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  region: 'us-west-1',
 
  maxInstances: 1,
  capabilities: [
      {
        browserName: 'chrome',
        platformName: 'Windows 10',
        browserVersion: '83.0',
        'sauce:options': {
          parentTunnel: '<insert tunnel name>',
          public: 'team',
          screenResolution: '1280x960',
          tunnelIdentifier: 'Primary',
          extendedDebugging: true,
        }
      }
  ],
  execArgv: [],
  sync: true,
  logLevel: 'trace',
  bail: 0,
  screenshotPath: 'screenshots',
  baseUrl: '',
  outputDir: './wdio-log',
  waitforTimeout: 60000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    [
      'sauce',
      {
        sauceConnect: true,
        sauceConnectOpts: {
          parentTunnel: '<insert tunnel name here>',
          tunnelIdentifier: 'Primary',
        },
      },
    ],
  ],
  framework: 'mocha',
  reporters: [
    [
      'junit',
      {
        outputDir: './reports/',
        outputFileFormat: function (opts) {
          return `results-${opts.cid}.${opts.capabilities.browserName}-v${opts.capabilities.browserVersion}.xml`;
        },
      },
    ],
  ],
 
  mochaOpts: {
    retries: 2,
    timeout: 0,
   ui: 'bdd',
  }
};