const { Then } = require("@badeball/cypress-cucumber-preprocessor");

import * as resultsActions from "../actions/resultsActions";

Then("results are displayed", () => {
  resultsActions.assertResultsArePresent();
})