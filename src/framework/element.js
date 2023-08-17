export default class Element {

    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
    }

    async type(text) {
        return (await $(this.locator)).addValue(text);
    }

    async clearAndType(text) {
        return (await $(this.locator)).setValue(text);
    }

    async isDisplayed() {
        return (await $(this.locator)).isDisplayed();
    }

    async waitForDisplayed() {
        return (await $(this.locator)).waitForDisplayed();
    }

    async waitForClickable() {
        return (await $(this.locator)).waitForClickable();
    }

    async getElementsCount() {
        const elements = await $$(this.locator);
        return elements.length;
    }

    async getText() {
        return (await $(this.locator)).getText();
    }

    async click() {
        return (await $(this.locator)).click();
    }

    async doubleClick() {
        return (await $(this.locator)).doubleClick();
    }

    async moveTo() {
        return (await $(this.locator)).moveTo();
    }
}