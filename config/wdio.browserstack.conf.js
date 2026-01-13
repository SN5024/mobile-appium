// config/wdio.browserstack.conf.js

export const config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    runner: 'local',
    specs: [
        '../test/browser/android/specs/**/*.js'
    ],
    maxInstances: 1,
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec'],

    capabilities: [{
        platformName: 'Android',
        'appium:device': 'Samsung Galaxy S23',
        'appium:os_version': '13.0',
        'appium:browserName': 'Chrome',
        'bstack:options': {
            projectName: 'Mobile Appium',
            buildName: 'Android Browser CI',
            sessionName: 'Android Chrome Test',
            local: true // enable BrowserStack Local
        }
    }],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};