import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals'
import { assert } from 'chai';
import MainPage from '../../forms/mainPage.js';
import RadnomUtils from '../../framework/utils/randomUtils.js';
import ENV from '../../../config/environment.js';

const RANDOM_STRING_LENGTH = 8;

Given(/^todos page is open$/, async function () {
    await browser.url(ENV.todosMainUrl);
    assert.isTrue(await MainPage.waitForPageToOpen(), "Todos Main PAge is not open");
});

When(/^I add to list item with random text$/, async function () {
    this.randomText = RadnomUtils.generateRandomString(RANDOM_STRING_LENGTH);
    await MainPage.sendTextToNewTodoField(this.randomText);
    await browser.keys('Enter');
});

When(/^I mark as completed random item from list$/, async function () {
    await MainPage.clickItemCompletedCheckboxByIndex(RadnomUtils.getRandomNumberByRange(1, await MainPage.getListItemsCount()));
});

When(/^I delete last added item from list$/, async function () {
    await MainPage.deleteListItemByIndex(await MainPage.getListItemsCount());
});

When(/^I edit text in last added item with adding random text$/, async function () {
    this.editText = RadnomUtils.generateRandomString(RANDOM_STRING_LENGTH);
    await MainPage.doubleClickOnListItemByIndex(await MainPage.getListItemsCount());
    await MainPage.sendEditTextToListItem(this.editText);
    await browser.keys('Enter');
});

When(/^I click 'Clear completed' button$/, async function () {
    await MainPage.clickClearCompletedBtn();
});

When(/^I add item with text '(.*)'$/, async function (text) {
    await MainPage.sendTextToNewTodoField(text);
    await browser.keys('Enter');
});

Then(/^item with the same random text is on the list$/, async function () {
    assert.isTrue(await MainPage.isListItemDisplayedByText(this.randomText), `List item with text '${this.randomText}' is not displayed`);
});

Then(/^count of items on list is the same as actual number of items on list$/, async function () {
    const countValue = await MainPage.getItemsCountValue();
    const actualItemsCount = await MainPage.getListItemsCount();
    assert.deepEqual(countValue, actualItemsCount, `Count of items is not correct: count - '${countValue}', actual items count - '${actualItemsCount}'`);
});

Then(/^text of last added item is edited with addition of random text$/, async function () {
    const editedText = `${this.randomText}${this.editText}`
    assert.isTrue(await MainPage.getListItemByText(editedText).waitForDisplayed(), `List item with text '${editedText}' is not displayed`);
});

Then(/^'Clear completed' button is displayed$/, async function () {
    assert.isTrue(await MainPage.isClearCompletedButtonDisplayed(), 'Clear Completed button is not displayed');
});

Then(/^list is empty$/, async function () {
    assert.deepEqual(await MainPage.getListItemsCount(), 0, 'List of items is not empty');
});

Then(/^last added item on list have text '(.*)'$/, async function (text) {
    const actualText = await MainPage.getTextFromItemByIndex(await MainPage.getListItemsCount());
    assert.deepEqual(actualText, text, `Last added item on list have text '${actualText}' insteaad of '${text}'`);
});

Then(/^item mark as completed is (||not )present on list$/, async function (isPresent) {
    if (isPresent === '') {
        assert.isAbove(await MainPage.getCompletedListItemsCount(), 0, 'Item marked as completed is not present on list');
    } else {
        assert.deepEqual(await MainPage.getCompletedListItemsCount(), 0, 'Item marked as completed is present on list');
    }
});

Then(/^count of items is not containing items marked as completed$/, async function () {
    const expectedNumber = (await MainPage.getListItemsCount()) - (await MainPage.getCompletedListItemsCount());
    assert.deepEqual(await MainPage.getItemsCountValue(), expectedNumber, 'Count value of items is not ccorect');
});