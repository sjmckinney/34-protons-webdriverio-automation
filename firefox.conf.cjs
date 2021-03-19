//const browsers = require("../capabilities/browsers");
const parentConfig = require("./wdio.conf.cjs").config;

exports.config = {
    ...parentConfig,
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'firefox',
            acceptInsecureCerts: true
        },
    ],
    exclude: [
        './test/specs/mock.e2e.js',
        './test/specs/puppeteer.e2e.js'
    ],
}
