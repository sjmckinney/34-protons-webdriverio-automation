//const browsers = require("../capabilities/browsers");
const parentConfig = require("./wdio.conf.cjs").config;

exports.config = {
    ...parentConfig,
    services: ['devtools'],
    specFileRetries: 0
}
