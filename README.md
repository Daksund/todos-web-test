Hello!

This is test of 'https://todomvc.com/examples/angular2/' page

Used tech stack:
- JavaScript
- WebDriverIO
- Cucumber

---How to run test---

What you need to install:
- Node.js
- npm
- Chrome browser

Set up:
- Open cmd in project folder
- Install npm packages with command "npm i"

Run test:
- In project folder use command "npm run test"

Reports are generated in reports/html directory in HTML format.

-----

Test scenarios (in Gherkin format, you can find feature file in 'todos-web-test/src/tests/features)

    Scenario: Add item to list
        When I add to list item with random text
        Then item with the same random text is on the list

    Scenario: Add item to list and delete it
        When I add to list item with random text
            And I delete last added item from list
        Then list is empty

    Scenario: Add item to list and edit it
        When I add to list item with random text
            And I edit text in last added item with adding random text
        Then text of last added item is edited with addition of random text

    Scenario: Add item to list, mark it as completed and use 'Clear completed' button
        When I add to list item with random text
            And I add to list item with random text
            And I mark as completed random item from list
        Then item mark as completed is present on list
            And 'Clear completed' button is displayed
        When I click 'Clear completed' button
        Then item mark as completed is not present on list

    Scenario: Count of items is correct according to changes on list
        When I add to list item with random text
        Then count of items on list is the same as actual number of items on list
        When I add to list item with random text
        Then count of items on list is the same as actual number of items on list
        When I delete last added item from list
        Then count of items on list is the same as actual number of items on list

    Scenario: Count of items is not taking into account items marked as completed
        When I add to list item with random text
        Then count of items on list is the same as actual number of items on list
        When I mark as completed random item from list
        Then count of items is not containing items marked as completed

    Scenario: Item is not added when field is empty
        When I add item with text ''
        Then list is empty

    Scenario: Item is not added when field contains only white spaces
        When I add item with text '      '
        Then list is empty

    Scenario: When you add two word with many spaces beetwen them, added item contains only one white space beetwen words
        When I add item with text 'one     two'
        Then last added item on list have text 'one two'