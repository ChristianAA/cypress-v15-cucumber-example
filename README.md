# Cypress v10 + Cucumber Example

This repository contains the base setup of an UI testing project, using Cypress v10 + Cucumber

A simple search in DuckDuckGo to check that results are displayed is used as example

# Requirements

The minimum requirements are:

* node v16.16
* npm 8.11.0

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
npm run tests
```

To open the Cypress IDE, run:

```
npm run open
```

# Results

Once the execution has finished, a cucumber report will be generated in the '/cucumber-results/cucumber-report.json' file.

To get an HTML Report with the results, execute:

```
npm run report
```

The report will be generated in the '/cucumber-results/html/index.html' file.

# Links
    
[Cypress](<https://www.cypress.io/>)

[cypress-cucumber-preprocessor](<https://github.com/badeball/cypress-cucumber-preprocessor>)

[multiple-cucumber-html-reporter](<https://github.com/wswebcreation/multiple-cucumber-html-reporter>)

[cucumber-json-report-formatter](<https://github.com/Vitalizzzer/cucumber-json-report-formatter>)