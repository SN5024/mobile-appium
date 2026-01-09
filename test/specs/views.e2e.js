import ViewsPage from '../pageobjects/views.page.js';
import { expect } from 'chai';

describe('ApiDemos Views Tests', () => {
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
});