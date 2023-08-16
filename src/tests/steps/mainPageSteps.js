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

When(/^I mark as checked random item from list$/, async function () {

});

When(/^I delete last added item from list$/, async function () {

});

When(/^I edit text in last added item$/, async function () {

});

When(/^I click 'Clear completed' button$/, async function () {

});

When(/^I add item that contains only spaces$/, async function () {

});

When(/^I add item with '(.*)'$/, async function (text) {

});

Then(/^$item with the same random text is on the list/, async function () {

});

Then(/^displayed count of items on list is correct$/, async function () {

});

Then(/^text of item is edited$/, async function () {

});

Then(/^'Clear completed' button is displayed$/, async function () {

});

Then(/^list is empty$/, async function () {

});

Then(/^item with '(.*)' is present on list$/, async function (text) {

});