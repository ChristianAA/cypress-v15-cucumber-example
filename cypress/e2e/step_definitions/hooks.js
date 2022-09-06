const { After } = require("@badeball/cypress-cucumber-preprocessor");

import {cypressUtils} from "../utils/cypressUtils";

After({ tags: "@CapturePageScreenshot"}, () => {
  cypressUtils.capturePageScreenshot ();
})
