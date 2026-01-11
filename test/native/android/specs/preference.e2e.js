// /test/native/android/specs/preference.e2e.js

import PreferencePage from '../pageobjects/preference.page.js';
import { expect } from 'chai';

describe('ApiDemos Preference Menu Tests', () => {
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
        // Wait for input instead of OK button
        await preferencePage.wifiInput.waitForDisplayed({ timeout: 10000 });
        await preferencePage.okButton.waitForDisplayed();
        const dialogTitle = await preferencePage.wifiDialogTitle.getText();
        expect(dialogTitle).to.equal('WiFi settings');
        // Close dialog safely
        await preferencePage.okDialogBox();
    });


    it('should set a WiFi name', async () => {
        await preferencePage.openWifiSettings();
        const testName = 'MyNetwork_2026';
        await preferencePage.wifiInput.setValue(testName);
        const value = await preferencePage.wifiInput.getAttribute('text');
        expect(value).to.equal(testName);
        // await preferencePage.okButton.click();
        // Close dialog safely
        await preferencePage.okDialogBox();

    });

    it('should verify Switch View is present and clickable', async () => {

        await driver.back();
        await preferencePage.openSwitchView();
        const switchTitle = await $('android.widget.TextView').getText(); // Switch View screen option
        expect(switchTitle).to.include('Switch');
    });

    it('should verify checkbox preference is present and clickable', async () => {
        await preferencePage.clickCheckBoxPreference();
        const checkBoxTitle = await preferencePage.displayCheckBoxText(); // Checkbox preference
        expect(checkBoxTitle).to.include('Checkbox');
    });

    it('should verify switch preference toggle is present and clickable', async () => {
        await preferencePage.toggleSwitchPreference();
        const switchTitle = await preferencePage.displaySwitchToggleText(); // Switch toggle preference
        expect(switchTitle).to.include('Switch');
    });

});