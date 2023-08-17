import Element from "./element.js";

export default class Page {

    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
        this.form = new Element(this.locator, this.name);
    }

    async waitForPageToOpen() {
        const isOpen = await this.form.waitForDisplayed();
        return isOpen;
    }
}