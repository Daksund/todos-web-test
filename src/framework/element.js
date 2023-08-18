import { logger } from '../framework/logger.js';

export default class Element {

    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
    }

    getElement() {
        return $(this.locator);
    }

    getElements() {
        return $$(this.locator);
    }

    async type(text) {
        logger.info(`Sending text '${text}' to '${this.name}'`);
        await this.getElement().addValue(text);
    }

    async clearAndType(text) {
        logger.info(`Clearing and sending text '${text}' to '${this.name}'`);
        await this.getElement().setValue(text);
    }

    async isDisplayed() {
        logger.info(`Checking if '${this.name}' is displayed`);
        return this.getElement().isDisplayed();
    }

    async waitForDisplayed() {
        logger.info(`Waiting for '${this.name}' to be displayed`);
        return this.getElement().waitForDisplayed();
    }

    async waitForClickable() {
        logger.info(`Waiting for '${this.name}' to be clickable`);
        return this.getElement().waitForClickable();
    }

    async getElementsCount() {
        logger.info(`Getting count of '${this.name}'`);
        const elements = await this.getElements();
        logger.info(`Count of '${this.name}': ${elements.length}`);
        return elements.length;
    }

    async getText() {
        logger.info(`Getting text from '${this.name}'`);
        const text = await this.getElement().getText();
        logger.info(`Received text from '${this.name}': ${text}`);
        return text;
    }

    async click() {
        logger.info(`Clicking '${this.name}'`);
        await this.getElement().click();
    }

    async doubleClick() {
        logger.info(`Double clicking '${this.name}'`);
        await this.getElement().doubleClick();
    }

    async moveTo() {
        logger.info(`Moving pointer over '${this.name}'`);
        await this.getElement().moveTo();
    }

    async clear() {
        logger.info(`Clearing text from '${this.name}'`);
        await this.getElement().clearValue();
    }
}