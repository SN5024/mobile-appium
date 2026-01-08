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
        await this.wifiInput.setValue(name);
    }
}