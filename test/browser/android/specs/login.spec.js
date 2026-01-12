// /test/browser/android/specs/login.spec.js

import LoginPage from '../pageobjects/login.page.js';
import { expect } from 'chai';

describe('SauceDemo Android Chrome Login Test', () => {
    let loginPage;

    before(async () => {
        loginPage = new LoginPage();
    });

    it('should open SauceDemo login page', async () => {
        await loginPage.open();
        await browser.pause(500); // tiny wait for page to load
    });

    it('should login successfully with valid credentials', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        // Verify URL contains /inventory after login
        const currentUrl = await browser.getUrl();
        expect(currentUrl).to.include('inventory');
        await browser.pause(500); 
    });
});