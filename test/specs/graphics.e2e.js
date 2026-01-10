// /test/pageobjects/graphics.e2e.js

import GraphicsPage from '../pageobjects/graphics.page.js';
import { expect } from 'chai';

describe('ApiDemos Graphics Menu Tests', () => {
    let graphicsPage;

    before(async () => {
        graphicsPage = new GraphicsPage();
    });

    it('should navigate to Graphics Menu', async () => {
        // Click on Graphics menu
        await graphicsPage.openGraphics();
        await browser.pause(500); // tiny wait for screen transition
    });

    it('should verify Xfermodes option', async () => {
        const xfermodesTitle = await graphicsPage.getXfermodesTitle();
        expect(xfermodesTitle).to.equal('Xfermodes');
    });
    
});