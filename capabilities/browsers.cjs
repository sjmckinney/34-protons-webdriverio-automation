const desktop = {
    // Common browser capabilities go here
    "acceptInsecureCerts": true
 };
 
 if(process.env.HUB_HOST) {
    desktop.hostname = process.env.HUB_HOST;
 }
 
 const chrome = {
    ...desktop,
    "maxInstances": 2,
    "browserName": "chrome",
    "goog:chromeOptions": {
       "args": [ "--incognito" ]
    }
 };
 
 const firefox = {
    ...desktop,
    "maxInstances": 2,
    "browserName": "firefox"
 };
 
 const ie11 = {
    "browserName": "internet explorer",
    "se:ieOptions":{
       "ie.ignoreProtectedModeSettings": true,
       "ie.ensureCleanSession": true
    }
 };
 
 const safari = {
    "browserName": "safari"
 };
 
 // Headless Browsers:
 // These are browsers that run "in the background", so to speak.
 // An actual browser window won't popup, but screenshots/video reporting are still supported.
 // https://en.wikipedia.org/wiki/Headless_browser
 
 const chromeHeadless = {
    ...desktop,
    "browserName": "chrome",
    "goog:chromeOptions": {
       // Log Levels: INFO = 0, WARNING = 1, ERROR = 2, LOG_FATAL = 3.
       "args": ["--headless", "--disable-gpu", "--window-size=1920,1080", "--log-level=1"]
    }
 };
 
 const firefoxHeadless = {
    ...desktop,
    "browserName": "firefox",
    "moz:firefoxOptions": {
       "args": ["--headless"]
       // Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1
    }
 };
 
 // Mobile Emulation in Desktop Browsers:
 const chromeMobile = {
    ...desktop,
    "browserName": "chrome",
    "goog:chromeOptions": {
       "mobileEmulation": {
          "deviceName": "iPhone 8 Plus"
       },
       "args": ["--window-size=414,736"]
    }
 };
 
 const chromeMobileHeadless = {
    ...desktop,
    "browserName": "chrome",
    "goog:chromeOptions": {
       "mobileEmulation": {
          "deviceName": "iPhone 8 Plus"
       },
       // Log Levels: INFO = 0, WARNING = 1, ERROR = 2, LOG_FATAL = 3.
       "args": ["--headless", "--disable-gpu", "--log-level=1"]
    }
 };
 
 const fireFoxMobile = {
    ...desktop,
    "browserName": "firefox",
    "moz:firefoxOptions": {
       prefs: {
          'general.useragent.override': "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
       },
       "args": ["-width=375", "-height=667"]
    }
 };
 
 module.exports = {
    chrome,
    firefox,
    ie11,
    safari,
    chromeHeadless,
    firefoxHeadless,
    chromeMobile,
    chromeMobileHeadless,
    fireFoxMobile
 };