// /test/specs/preference.e2e.js
import PreferencePage from '../pageobjects/preference.page.js';
import { expect } from 'chai';

describe('ApiDemos Preference Tests', () => {
    let preferencePage;

    before(async () => {
        preferencePage = new PreferencePage();
    });

    it('should toggle WiFi and set a WiFi name', async () => {
        await preferencePage.openPreference();
        await preferencePage.openPrefDependencies();
        await preferencePage.toggleWifi();
        await preferencePage.openWifiSettings();

        const testName = 'MyNetwork_2026';
        await preferencePage.wifiInput.setValue(testName);

        // FIX: Fetch the 'text' attribute directly instead of using .getValue()
        const value = await preferencePage.wifiInput.getAttribute('text'); 
        
        expect(value).to.equal(testName);

        await preferencePage.okButton.click();
    });
});
