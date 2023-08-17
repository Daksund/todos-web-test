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

    get completedListItem() {
        return new Element('//li[@class="completed"]', 'Completed list item');
    }

    get clearCompletedBtn() {
        return new Element('//button[@class="clear-completed"]', 'Clear completed button');
    }

    get itemsCount() {
        return new Element('//span[@class="todo-count"]//strong', 'Items count');
    }

    getListItemTextByIndex(index) {
        return new Element(`(${this.listItem.locator}//label)[${index}]`, `List item text with index '${index}'`);
    }

    getListItemByText(text) {
        return new Element(`${this.listItem.locator}//label[text()="${text}"]`, `List item with text ${text}`);
    }

    getListItemByIndex(index) {
        return new Element(`(${this.listItem.locator})[${index}]`, `List item with index${index}`);
    }

    getListItemCompletedCheckboxByIndex(index) {
        return new Element(`(${this.listItem.locator}//input[@type="checkbox"])[${index}]`, `List item completed checkbox with index '${index}'`);
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
        return this.getListItemByIndex(index).doubleClick();
    }

    async sendEditTextToListItem(text) {
        return this.listItemInEditMode.type(text);
    }

    async getCompletedListItemsCount() {
        return this.completedListItem.getElementsCount();
    }

    async clickItemCompletedCheckboxByIndex(index) {
        return this.getListItemCompletedCheckboxByIndex(index).click();
    }

    async isClearCompletedButtonDisplayed() {
        return this.clearCompletedBtn.waitForDisplayed();
    }

    async clickClearCompletedBtn() {
        return this.clearCompletedBtn.click();
    }

    async getItemsCountValue() {
        return parseInt(await this.itemsCount.getText());
    }

    async getTextFromItemByIndex(index) {
        return this.getListItemTextByIndex(index).getText();
    }
}

export default new MainPage();