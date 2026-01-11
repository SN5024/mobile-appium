// test/native/ios/specs/launch.e2e.js

import LaunchPage from '../pageobjects/launch.page.js';
import { expect } from 'chai';

describe('TestApp Launch', () => {
    let launchPage;
    
    before(async () => {
        launchPage = new LaunchPage();
    });
    
    it('should open TestApp on iOS simulator and verify the title', async () => {
        const mainView = await launchPage.getMainPageTitle();
        expect(mainView).to.equal('TestApp');
    });
});