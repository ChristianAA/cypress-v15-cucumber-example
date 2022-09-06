Feature: Searches in Home Page
  
  @CapturePageScreenshot
  Scenario: User can do a search from the home page
    Given a user typing "Selenium" in the search input
    When presses the search button
    Then results are displayed