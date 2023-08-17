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
        return new Element('//ul[@class="todo-list"]//li//label', 'List item');
    }

    getListItemByText(text) {
        return new Element(`//ul[@class="todo-list"]//li//label[text()="${text}"]`, `List item with text ${text}`);
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
}

export default new MainPage();