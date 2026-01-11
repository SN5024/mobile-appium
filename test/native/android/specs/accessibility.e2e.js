// /test/native/android/specs/accessibility.e2e.js
import AccessibilityPage from '../pageobjects/accessibility.page.js';
import { expect } from 'chai';

describe('ApiDemos Accessibility Menu Tests', () => {
    let accessibilityPage;

    before(async () => {
        accessibilityPage = new AccessibilityPage();
       // await driver.startActivity({
       //     appPackage: 'io.appium.android.apis',
       //     appActivity: '.ApiDemos',
       // });
    });

    it('should navigate to Accessibility Menu', async () => {
        // Click on Accessibility menu
        await accessibilityPage.openAccessibility();
        await browser.pause(500); // tiny wait for screen transition
    });
    
    it('should verify Accessibility Node Querying option', async () => {
        // Open Node Querying option
        await accessibilityPage.openNodeQuerying();
        const titleNodeQuerying = await $('android.widget.TextView').getText(); // Node Querying screen option
        expect(titleNodeQuerying).to.include('Node Querying');
    });

    it('should verify Task Take out Trash is present', async () => {
        const taskText = await accessibilityPage.verifyTaskTakeOutTrash();
        expect(taskText).to.equal('Task Take out Trash');
    });
});