const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin, afterRunHandler } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { nodeModulesPolyfillPlugin } = require('esbuild-plugins-node-modules-polyfill');

module.exports = defineConfig({
  requestTimeout: 30000, 
  pageLoadTimeout: 30000,
  defaultCommandTimeout: 30000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  screenshotsFolder: "cypress/screenshots",
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',   
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
        nodeModulesPolyfillPlugin(),
        createEsbuildPlugin(config),
      ],
    })
  );

  return config;
}