import {visibilityUtils} from "../utils/visibilityUtils";

const resultLinks = "#links [data-testid='result']";

export const assertResultsArePresent = function () {
  visibilityUtils.assertElementIsVisible(resultLinks);
}