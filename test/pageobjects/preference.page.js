// /test/pageobjects/preference.page.js

export default class PreferencePage {
    get preferenceMenu() { return $('~Preference'); }
    get preferenceDependencies() { return $('~3. Preference dependencies'); }
    get wifiCheckbox() { return $('android=new UiSelector().resourceId("android:id/checkbox")'); }
    get wifiSettingsOption() { return $('android=new UiSelector().text("WiFi settings")'); }
    get wifiInput() { return $('android.widget.EditText'); }
    get okButton() { return $('android=new UiSelector().text("OK")'); }

    async openPreference() {
        await this.preferenceMenu.waitForExist();
        await this.preferenceMenu.click();
    }

    async openPrefDependencies() {
        await this.preferenceDependencies.waitForExist();
        await this.preferenceDependencies.click();
    }

    async toggleWifi() {
        await this.wifiCheckbox.waitForExist();
        await this.wifiCheckbox.click();
    }

    async openWifiSettings() {
        await this.wifiSettingsOption.waitForExist();
        await this.wifiSettingsOption.click();
        await this.wifiInput.waitForExist();
    }

    async setWifiName(name) {
        await this.wifiInput.waitForExist({ timeout: 2000 });
        await this.wifiInput.setValue(name);
    }

    async openSwitchView() {
        await this.switchView.waitForDisplayed({ timeout: 2000 });
        await this.switchView.click();
    }
    
    async clickCheckBoxPreference() {
        await this.checkBoxPreference.waitForDisplayed({ timeout: 3000 });
        await this.checkBoxPreference.click();
    }

    async displayCheckBoxText() {
        await this.checkBoxPreference.waitForDisplayed();
        return await this.checkBoxText.getText();
    }

    async toggleSwitchPreference() {
        await this.switchToggle.waitForDisplayed();
        await this.switchToggle.click();
    }

    async displaySwitchToggleText() {
        await this.switchToggle.waitForDisplayed();
        return await this.switchToggleText.getText();
    }

    get wifiDialogTitle() {
        return $('android=new UiSelector().text("WiFi settings")');
    }

    get wifiInput() {
        return $('android.widget.EditText');
    }

    get switchView() {
        return $('~9. Switch');
    }
    
    get checkBoxPreference() { 
        return $('android=new UiSelector().resourceId("android:id/checkbox")'); 
    }

    get checkBoxText() {
        return $('android=new UiSelector().text("Checkbox preference")');
    }

    get switchToggle(){
        return $('android=new UiSelector().resourceId("android:id/switch_widget")');
    }

    get switchToggleText() {
        return $('android=new UiSelector().text("Switch preference")');
    }
}