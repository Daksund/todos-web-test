import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser, $ } from '@wdio/globals'
import { assert } from 'chai';
import MainPage from '../../forms/mainPage.js';

Given(/^todos page is open$/, async function () {
    await browser.url('https://todomvc.com/examples/angular2/');
    assert.isTrue(await MainPage.isPageOpen());
});

When(/^I add to list item with random text$/, async function () {

});

When(/^I delete random item from list$/, async function () {

});

When(/^I mark as completed random item from list$/, async function () {

});

When(/^I delete last added item from list$/, async function () {

});

When(/^I edit text in last added item with adding random text$/, async function () {

});

When(/^I edit text in last added item with text '(.*)'$/, async function (text) {

});

When(/^I click 'Clear completed' button$/, async function () {

});

When(/^I add item with text '(.*)'$/, async function (text) {

});

Then(/^item with the same random text is on the list$/, async function () {

});

Then(/^count of items on list is the same as actual number of items on list$/, async function () {

});

Then(/^text of last added item is different$/, async function () {

});

Then(/^'Clear completed' button is displayed$/, async function () {

});

Then(/^list is empty$/, async function () {

});

Then(/^item with '(.*)' is present on list$/, async function (text) {

});

Then(/^item mark as completed is not on list$/, async function () {

});

Then(/^count of items is not displayed$/, async function () {

});

Then(/^count of items is not containing items marked as completed$/, async function () {

});