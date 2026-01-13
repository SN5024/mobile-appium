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
        'appium:device': 'Samsung Galaxy S25', // 2026 Standard
        'appium:os_version': '15.0',          // 2026 Standard
        'appium:browserName': 'Chrome',
        'bstack:options': {
            projectName: 'Mobile Appium',
            buildName: 'Android Browser CI',
            sessionName: 'Android Chrome Test',
            local: true // Must remain true for service to connect
        }
    }],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};