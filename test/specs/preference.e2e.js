// /test/specs/preference.e2e.js
import PreferencePage from '../pageobjects/preference.page.js';
import { expect } from 'chai';

describe('ApiDemos Preference Tests', () => {
    let preferencePage;

    before(async () => {
        preferencePage = new PreferencePage();
    });
    it('should show WiFi disabled by default', async () => {
        await preferencePage.openPreference();
        await preferencePage.openPrefDependencies();
        const beforeToggle = await preferencePage.wifiCheckbox.getAttribute('checked');
        expect(beforeToggle).to.equal('false');
    });
    it('should enable WiFi checkbox', async () => {
        await preferencePage.toggleWifi();
        const isChecked = await preferencePage.wifiCheckbox.getAttribute('checked');
        expect(isChecked).to.equal('true');
    });
    it('should display and close WiFi settings dialog', async () => {
        await preferencePage.openWifiSettings();
        await preferencePage.wifiInput.waitForDisplayed();
        expect(await preferencePage.wifiInput.isDisplayed()).to.be.true;
        await preferencePage.okButton.click();
        await preferencePage.wifiInput.waitForDisplayed({ reverse: true });
    });
    it('should set a WiFi name', async () => {
        await preferencePage.openWifiSettings();
        const testName = 'MyNetwork_2026';
        await preferencePage.wifiInput.setValue(testName);
        const value = await preferencePage.wifiInput.getAttribute('text');
        expect(value).to.equal(testName);
        await preferencePage.okButton.click();
    });
});