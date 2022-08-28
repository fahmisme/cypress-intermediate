Feature: Verify Detail of category at Promotions Menu of FairPrice E-Commerce
  User able to see detail items with properly category
  @verify_details

  Scenario: User able to see detail items with properly category
    Given User load a FairPrice website
    When User choose a Promotions menu
    And User look all items of tagAll
    And User see items by <Category> category
    Then User check <Label> of items

    Examples:
        | Category              | Label |
        | PWP                   |  PWP  |
        | Weekly Deals          | Weekly Deals |
        | Digital Club Exclusive| Offer |
