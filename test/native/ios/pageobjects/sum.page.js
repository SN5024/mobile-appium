// test/native/ios/pageobjects/sum.page.js

export default class SumPage {

    // First Number Input Field
    get firstNumberInput() {
        return $('~IntegerA');
    }

    // Second Number Input Field
    get secondNumberInput() {
        return $('~IntegerB');
    }

    // Sum Button
    get sumButton() {
        return $('~ComputeSumButton');
    }

    // Result Text
    get resultText() {
        return $('~Answer');
    }

    async enterFirstNumber(number) {
        await this.firstNumberInput.waitForDisplayed({ timeout: 3000 });
        await this.firstNumberInput.setValue(number);
    }

    async enterSecondNumber(number) {
        await this.secondNumberInput.waitForDisplayed({ timeout: 3000 });
        await this.secondNumberInput.setValue(number);
    }

    async tapSumButton() {
        await this.sumButton.waitForDisplayed({ timeout: 3000 });
        await this.sumButton.click();
    }

    async getResult() {
        await this.resultText.waitForDisplayed({ timeout: 3000 });
        return await this.resultText.getText();
    }
}