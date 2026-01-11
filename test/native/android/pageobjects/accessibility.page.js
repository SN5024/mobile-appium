// test/native/android/pageobjects/accessibility.page.js
export default class AccessibilityPage {

    // Main menu option
    get accessibilityMenu() {
        return $('~Accessibility');
    }

    // Sub-menu option
    get nodeQueryingOption() {
        return $('~Accessibility Node Querying');
    }

    // list under Accessibility Node Querying
    get nodeQueryingList() {
        return $('~Task Take out Trash');
    }

    async openAccessibility() {
        await this.accessibilityMenu.waitForDisplayed();
        await this.accessibilityMenu.click();
    }

    async openNodeQuerying() {
        await this.nodeQueryingOption.waitForDisplayed();
        await this.nodeQueryingOption.click();
    }

    async verifyTaskTakeOutTrash() {
        await this.nodeQueryingList.waitForDisplayed();
       // return await this.nodeQueryingList.getText(); for Get Text from element
       return await this.nodeQueryingList.getAttribute('content-desc');
    }
}