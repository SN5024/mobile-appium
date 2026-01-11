// config/wdio.ios.conf.js

import { join } from 'path';

export const config = {
    runner: 'local',
    path: '/',

    // ==================
    // Specify Test Files
    // ==================
    specs: [
        '../test/native/ios/specs/**/*.js'
    ],

    // ============
    // Capabilities
    // ============
    maxInstances: 1,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    capabilities: [{
        // iOS Appium capabilities
        'platformName': 'iOS',
        'appium:deviceName': 'iPhone 17 Pro',
        'appium:platformVersion': '26.2',
        'appium:automationName': 'XCUITest',
        'appium:app': join(import.meta.dirname, '../app/ios/TestApp.app'),
        'appium:newCommandTimeout': 240
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