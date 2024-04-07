const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for html reports
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // for html reports
      on("file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
	specPattern: "**/*.feature",
  defaultCommandTimeout: 10000 // global timeout
  },
})