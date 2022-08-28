Feature: Verify Category at FairPrice E-Commerce
  User able to see items with properly category
  @verify_category

  Scenario: User able to see items with properly category
    Given User visit FairPrice website
    When User click a Promotions menu
    And User see all items of tagAll
    Then User see all items by <Category> category

    Examples:
        | Category              | 
        | PWP                   |  
        | Digital Club Exclusive| 
        | Weekly Deals          |  
