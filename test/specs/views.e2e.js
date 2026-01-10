import ViewsPage from '../pageobjects/views.page.js';
import { expect } from 'chai';

describe('ApiDemos Views Menu Tests', () => {
    let viewsPage;

    before(async () => {
        viewsPage = new ViewsPage();
    });

    it('should open Animation from Views', async () => {
        await viewsPage.openViews();
        await viewsPage.openAnimation();
        // Verify that the Animation screen opened by checking a known element
        await browser.pause(500); // tiny wait for screen transition
        const animationList = await $('android.widget.TextView'); // first element in Animation screen
        expect(await animationList.isDisplayed()).to.be.true;
    });
    
    it('should open Controls from Views', async () => {
        await driver.back();
        await viewsPage.openControls();
        // Verify that the Contorl screen opened by checking a known element
        await browser.pause(500); // tiny wait for screen transition
        const controlList = await $('android.widget.TextView'); // first element in Animation screen
        expect(await controlList.isDisplayed()).to.be.true;
    });
});