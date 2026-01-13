export const config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    // NEW: Manage tunnel connections automatically via the BrowserStack service
    services: [
        ['browserstack', { 
            browserstackLocal: true,
            opts: { forcelocal: false } 
        }]
    ],

    runner: 'local',
    specs: ['../test/browser/android/specs/**/*.js'],
    maxInstances: 1,
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec'],

    capabilities: [{
        platformName: 'Android',
        // Use these specific W3C keys for 2026 compliance:
        'appium:deviceName': 'Samsung Galaxy S25', 
        'appium:platformVersion': '15.0',          
        'appium:automationName': 'UiAutomator2',
        'browserName': 'Chrome',
        'bstack:options': {
            projectName: 'Mobile Appium',
            buildName: 'Android Browser CI',
            sessionName: 'Android Chrome Test',
            local: true 
        }
    }],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};