const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin, afterRunHandler} = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const NodeModulesPolyfillPlugin = require("@esbuild-plugins/node-modules-polyfill").NodeModulesPolyfillPlugin;

module.exports = defineConfig({
  requestTimeout: 30000, 
  pageLoadTimeout: 30000,
  defaultCommandTimeout: 30000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  screenshotsFolder: "cypress/screenshots",
  e2e: {
    baseUrl: "https://duckduckgo.com/",	
    specPattern: "**/*.feature",
    setupNodeEvents
  }
});

async function setupNodeEvents(on, config) {

  await addCucumberPreprocessorPlugin(on, config, { });
    
  on(
    "file:preprocessor",
    createBundler({
      plugins: [
        NodeModulesPolyfillPlugin(),
        createEsbuildPlugin(config),
      ],
    })
  );

  return config;
}