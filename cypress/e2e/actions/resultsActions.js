import {visibilityUtils} from "../utils/visibilityUtils";

const resultLinks = "[data-testid='mainline'] [data-testid='result']";

export const assertResultsArePresent = function () {
  visibilityUtils.assertElementIsVisible(resultLinks);
}