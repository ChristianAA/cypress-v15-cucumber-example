const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

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

  await preprocessor.addCucumberPreprocessorPlugin(on, config);
    

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        plugins: [
          new NodePolyfillPlugin()
        ],        
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  return config;
}