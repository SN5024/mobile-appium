// test/native/android/pageobjects/views.page.js
export default class ViewsPage {
    get viewsMenu() { 
        return $('~Views'); 
    }
    
    get animationOption() { 
        return $('~Animation'); 
    }
     
    get controlsOption() { 
        return $('~Controls'); 
    }

    async openViews() {
        await this.viewsMenu.waitForDisplayed();
        await this.viewsMenu.click();
    }

    async openAnimation() {
        await this.animationOption.waitForDisplayed();
        await this.animationOption.click();
    }
    
    async openControls() { 
        await this.controlsOption.waitForDisplayed();
        await this.controlsOption.click();
    }
}