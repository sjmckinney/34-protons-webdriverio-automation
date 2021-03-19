//const browsers = require("../capabilities/browsers");
const parentConfig = require("./wdio.conf.cjs").config;

exports.config = {
    ...parentConfig,
    capabilities: [
        {
            maxInstances: 5,
            browserName: 'chrome',
            acceptInsecureCerts: true
        },
    ]
}
