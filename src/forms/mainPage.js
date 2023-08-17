import Page from '../framework/page.js';
import Element from '../framework/element.js';

class MainPage extends Page {

    constructor() {
        super('//h1[text()="todos"]', 'TODOS Main Page');
    }

    get newTodoField() {
        return new Element('//input[contains(@class, "new-todo")]', 'New Todo input field');
    }

    get listItem() {
        return new Element('//ul[@class="todo-list"]//li', 'List item');
    }

    get listItemInEditMode() {
        return new Element('//input[@class="edit"]', 'List item in edit mode');
    }

    getListItemByText(text) {
        return new Element(`${this.listItem.locator}//label[text()="${text}"]`, `List item with text ${text}`);
    }

    getListItemByIndex(index) {
        return new Element(`(${this.listItem.locator})[${index}]`, `List item with index${index}`);
    }

    getListItemCompletedCheckboxByIndex(index) {
        return new Element(`${this.listItem.locator}//input[@type="checkbox"])[${index}]`, `List item completed checkbox with index '${index}'`);
    }

    getListItemDeleteBtnByIndex(index) {
        return new Element(`(${this.listItem.locator}//button[@class="destroy"])[${index}]`, `List item delete button with index '${index}'`);
    }

    async sendTextToNewTodoField(text) {
        return this.newTodoField.type(text);
    }

    async getListItemsCount() {
        return this.listItem.getElementsCount();
    }

    async isListItemDisplayedByText(text) {
        return this.getListItemByText(text).waitForDisplayed();
    }

    async deleteListItemByIndex(index) {
        await this.getListItemByIndex(index).moveTo();
        await this.getListItemDeleteBtnByIndex(index).waitForClickable();
        return this.getListItemDeleteBtnByIndex(index).click();
    }

    async doubleClickOnListItemByIndex(index) {
        await this.getListItemByIndex(index).doubleClick();
    }

    async sendEditTextToListItem(text) {
        await this.listItemInEditMode.type(text);
    }
}

export default new MainPage();