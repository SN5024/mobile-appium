// config/wdio.conf.js
import { join } from 'path';

export const config = {
    runner: 'local',
    path: '/',

    // ==================
    // Specify Test Files
    // ==================
    specs: [
        '../test/native/android/specs/**/*.js'
    ],

    // ============
    // Capabilities
    // ============
    maxInstances: 1,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    capabilities: [{
        // Android device capabilities
        platformName: 'Android',
        'appium:deviceName': 'Android Emulator', // use "adb devices" to get device name
        'appium:automationName': 'UiAutomator2', 
        'appium:app': join(import.meta.dirname, '../app/android/ApiDemos-debug.apk'),
        'appium:autoGrantPermissions': true,
        'appium:newCommandTimeout': 240 // Prevents session from closing during debugging
    }
    ],

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