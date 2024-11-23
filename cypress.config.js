const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://posit.cloud',
        supportFile: false,
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
    }
})
