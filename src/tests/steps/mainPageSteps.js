import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals'
import { assert } from 'chai';
import MainPage from '../../forms/mainPage.js';
import RadnomUtils from '../../framework/utils/randomUtils.js';

Given(/^todos page is open$/, async function () {
    await browser.url('https://todomvc.com/examples/angular2/');
    assert.isTrue(await MainPage.waitForPageToOpen());
});

When(/^I add to list item with random text$/, async function () {
    this.randomText = RadnomUtils.generateRandomString(8);
    await MainPage.sendTextToNewTodoField(this.randomText);
    await browser.keys('Enter');
});

When(/^I delete random item from list$/, async function () {
    
});

When(/^I mark as completed random item from list$/, async function () {
    await MainPage.clickItemCompletedCheckboxByIndex(RadnomUtils.getRandomNumberByRange(1, await MainPage.getListItemsCount()));
});

When(/^I delete last added item from list$/, async function () {
    await MainPage.deleteListItemByIndex(await MainPage.getListItemsCount());
});

When(/^I edit text in last added item with adding random text$/, async function () {
    this.editText = RadnomUtils.generateRandomString(8);
    await MainPage.doubleClickOnListItemByIndex(await MainPage.getListItemsCount());
    await MainPage.sendEditTextToListItem(this.editText);
    await browser.keys('Enter');
});

When(/^I edit text in last added item with text '(.*)'$/, async function (text) {

});

When(/^I click 'Clear completed' button$/, async function () {
    await MainPage.clickClearCompletedBtn();
});

When(/^I add item with text '(.*)'$/, async function (text) {

});

Then(/^item with the same random text is on the list$/, async function () {
    assert.isTrue(await MainPage.isListItemDisplayedByText(this.randomText));
});

Then(/^count of items on list is the same as actual number of items on list$/, async function () {

});

Then(/^text of last added item is edited with addition of random text$/, async function () {
    assert.isTrue(await MainPage.getListItemByText(`${this.randomText}${this.editText}`).waitForDisplayed());
});

Then(/^'Clear completed' button is displayed$/, async function () {
    assert.isTrue(await MainPage.isClearCompletedButtonDisplayed());
});

Then(/^list is empty$/, async function () {
    assert.isTrue(await MainPage.getListItemsCount() === 0);
});

Then(/^item with '(.*)' is present on list$/, async function (text) {

});

Then(/^item mark as completed is (||not )present on list$/, async function (isPresent) {
    if (isPresent === '') {
        assert.isAbove(await MainPage.getCompletedListItemsCount(), 0);
    } else {
        assert.deepEqual(await MainPage.getCompletedListItemsCount(), 0);
    }
});

Then(/^count of items is not displayed$/, async function () {

});