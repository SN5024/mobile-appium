export default class ViewsPage {
    get viewsMenu() { 
        return $('~Views'); 
    }
    
    get animationOption() { 
        return $('~Animation'); 
    }

    async openViews() {
        await this.viewsMenu.waitForDisplayed();
        await this.viewsMenu.click();
    }

    async openAnimation() {
        await this.animationOption.waitForDisplayed();
        await this.animationOption.click();
    }
}