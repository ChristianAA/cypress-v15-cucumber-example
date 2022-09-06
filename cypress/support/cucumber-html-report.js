const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumber-results", // ** Path of .json file **//
  reportPath: "./cypress/cucumber-results/html"
});