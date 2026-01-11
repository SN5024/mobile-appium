// test/native/ios/specs/sum.e2e.js
import SumPage from '../pageobjects/sum.page.js';
import { expect } from 'chai';

describe('Sum Functionality in TestApp', () => {
    let sumPage;

    before(async () => {
        sumPage = new SumPage();
    });

    it('should calculate the sum of two integers correctly', async () => {
        const firstNumber = '5';
        const secondNumber = '10';
        const expectedSum = '15';
        await sumPage.enterFirstNumber(firstNumber);
        await sumPage.enterSecondNumber(secondNumber);
        await sumPage.tapSumButton();
        const result = await sumPage.getResult();
        expect(result).to.equal(expectedSum);
    });
});