// config/wdio.conf.js
import { join } from 'path';

export const config = {
    runner: 'local',
    path: '/',

    // ==================
    // Specify Test Files
    // ==================
    specs: [
        '../test/specs/**/*.js'
    ],

    // ============
    // Capabilities
    // ============
    maxInstances: 1,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android Emulator', // or your real device
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(import.meta.dirname, '../app/ApiDemos-debug.apk'),
        'appium:autoGrantPermissions': true,
        'appium:newCommandTimeout': 240 // Prevents session from closing during debugging
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
    services: ['appium'],
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