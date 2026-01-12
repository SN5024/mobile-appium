// config/wdio.browser.android.conf.js

import { join } from 'path';

export const config = {
    runner: 'local',
    path: '/',

    // ==================
    // Specify Test Files
    // ==================
    specs: [
        '../test/browser/android/specs/**/*.js'
    ],

    // ============
    // Capabilities
    // ============
    maxInstances: 1,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,

    capabilities: [{
        // Android mobile browser capabilities
        platformName: 'Android',
        'appium:deviceName': 'Android Emulator', // use "adb devices" to get device name
        'appium:automationName': 'UiAutomator2',
        'appium:browserName': 'Chrome',          // <-- Mobile browser
        'appium:newCommandTimeout': 240,         // Prevents session from closing during debugging
        'appium:chromedriverAutodownload': true,  // Auto-download compatible ChromeDriver
        'appium:chromedriverExecutableDir': '/Users/srishti/Documents/drivers' // Path to store downloaded ChromeDrivers
    }],

    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    // ===================
    // Appium Service
    // ===================
    services: [
        ['appium', {
            args: {
                allowInsecure: '*:chromedriver_autodownload',
            },
            command: 'appium'
        }]
    ],
    appium: {
        command: 'appium'
    },

    // ===================
    // Hooks
    // ===================
    before: async function () {
        // Make sure chai is globally available
        global.expect = (await import('chai')).expect;
    }
};