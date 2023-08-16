import { $ } from '@wdio/globals';

class MainPage {
    get logo() { return $('//h1[text()="todos"]')}

    async isPageOpen() {
        return this.logo.isDisplayed();
    }
}

export default new MainPage();