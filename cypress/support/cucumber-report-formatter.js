const Formatter = require('cucumber-json-report-formatter').Formatter;

const formatter = new Formatter();
const sourceFile = "./cypress/cucumber-results/cucumber-messages.ndjson"
const outputFile = "./cypress/cucumber-results/cucumber-report.json"

formatter.parseCucumberJson(sourceFile, outputFile);