import Element from "./element.js";
import { logger } from '../framework/logger.js';

export default class Page {

    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
        this.form = new Element(this.locator, this.name);
    }

    async waitForPageToOpen() {
        logger.info(`Waiting for '${this.name}' to open`);
        return this.form.waitForDisplayed();
    }
}