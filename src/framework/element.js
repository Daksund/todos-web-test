import { logger } from '../framework/logger.js';

export default class Element {

    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
    }

    async type(text) {
        logger.info(`Sending text '${text}' to '${this.name}'`);
        return (await $(this.locator)).addValue(text);
    }

    async clearAndType(text) {
        logger.info(`Clearing and sending text '${text}' to '${this.name}'`);
        return (await $(this.locator)).setValue(text);
    }

    async isDisplayed() {
        logger.info(`Checking if '${this.name}' is displayed`);
        return (await $(this.locator)).isDisplayed();
    }

    async waitForDisplayed() {
        logger.info(`Waiting for '${this.name}' to be displayed`);
        return (await $(this.locator)).waitForDisplayed();
    }

    async waitForClickable() {
        logger.info(`Waiting for '${this.name}' to be clickable`);
        return (await $(this.locator)).waitForClickable();
    }

    async getElementsCount() {
        logger.info(`Getting count of '${this.name}'`);
        const elements = await $$(this.locator);
        logger.info(`Count of '${this.name}': ${elements.length}`);
        return elements.length;
    }

    async getText() {
        logger.info(`Getting text from '${this.name}'`);
        const text = (await $(this.locator)).getText();
        logger.info(`Received text from '${this.name}': ${text}`);
        return text;
    }

    async click() {
        logger.info(`Clicking '${this.name}'`);
        return (await $(this.locator)).click();
    }

    async doubleClick() {
        logger.info(`Double clicking '${this.name}'`);
        return (await $(this.locator)).doubleClick();
    }

    async moveTo() {
        logger.info(`Moving pointer over '${this.name}'`);
        return (await $(this.locator)).moveTo();
    }

    async clear() {
        logger.info(`Clearing text from '${this.name}'`);
        return (await $(this.locator)).clearValue();
    }
}