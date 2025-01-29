# Cypress v14 + Cucumber Example

This repository contains the base setup of an UI testing project, using Cypress v14 + Cucumber

A simple search in DuckDuckGo to check that results are displayed is used as example

# Requirements

The minimum requirements are:

* node v18.16
* npm 9.5.1

# Setup

1. Download or clone the repository
2. Open a terminal
3. Go to the path of the "package.json" file and execute:

```
npm install
```

# Test Execution

To run the tests in headless mode, go to main directory and execute:

```
npm run execution
```

To open the Cypress IDE, run:

```
npm run open
```

# Results

Once the execution (only with 'npm run tests') has finished:

A cucumber report will be generated in the '/cucumber-results/cucumber.json' file.

An html report will also be generated in the '/cucumber-results/report.html' file.

# Links
    
[Cypress](<https://www.cypress.io/>)

[cypress-cucumber-preprocessor](<https://github.com/badeball/cypress-cucumber-preprocessor>)