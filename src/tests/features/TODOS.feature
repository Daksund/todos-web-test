Feature: TODOS

    Testing positive and negative test scenarios of todos list web page

    Background: Opening TODOS page
        Given todos page is open

    @positive
    Scenario: Add item to list
        When I add to list item with random text
        Then item with the same random text is on the list

    @positive
    Scenario: Add item to list and delete it
        When I add to list item with random text
            And I delete last added item from list
        Then list is empty

    @positive
    Scenario: Add item to list and edit it
        When I add to list item with random text
            And I edit text in last added item
        Then text of last added item is different

    @positive      
    Scenario: Add item to list, mark it as completed and use 'Clear completed' button
        When I add to list item with random text
            And I add to list item with random text
            And I mark as completed random item from list
        Then 'Clear completed' button is displayed
        When I click 'Clear completed' button
        Then item mark as completed is not on list

    @positive
    Scenario: Count of items is correct according to changes on list
        When I add to list item with random text
        Then count of items on list is the same as actual number of items on list
        When I add to list item with random text
        Then count of items on list is the same as actual number of items on list
        When I delete last added item from list
        Then count of items on list is the same as actual number of items on list

    @positive
    Scenario: Count of items is not taking into account items marked as completed
        When I add to list item with random text
        Then count of items on list is the same as actual number of items on list
        When I mark as completed random item from list
        Then count of items is not containing items marked as completed

    @negative
    Scenario: Item is not added when field is empty
        When I add item with text ''
        Then list is empty

    @negative
    Scenario: Item is not added when field contains only white spaces
        When I add item with text '      '
        Then list is empty

    @negative
    Scenario: When you edit item and delete text, item is removed from list
        When I add to list item with random text
            And I edit text in last added item with text ''
        Then list is empty

    @negative
    Scenario: When you add two word with many spaces beetwen them, added item contains only one white space beetwen words
        When I add item with text 'one     two'
        Then item with 'one two' is present on list