class CloudPage {
    // Elements
    get submitButton() {
        return cy.get('button[type="submit"]:not([class])')
    }

    get createSpaceButton() {
        return cy.get('button.newSpace')
    }

    get navButton() {
        return cy.get('button.navMenuToggler')
    }

    get spaceName() {
        return cy.get('div#headerTitle')
    }

    get newProjectButton() {
        return cy.get('button[title="New Project"]')
    }

    get moreActionsButton() {
        return cy.get('button.moreActions')
    }

    // Simple Actions
    clickSubmit() {
        this.submitButton.click()
    }

    goWorkspace() {
        cy.visit('/content/yours')
    }

    openNav() {
        this.navButton.click()
    }

    checkNavOpen() {
        // TODO get this working, so you can check if it's already open before toggling
        cy.get('div#app').then(element => {
            if (element.css('class') === 'shrinkHeader') {
                this.openNav()
                cy.get('div.showNavPanel').should('be.visible')
            }
        })
    }

    goToSpace(spaceName) {
        //this.checkNavOpen()
        this.openNav()
        cy.get('nav[aria-label="Space Menu"]').find('div.spaceNameWithOwner').contains(spaceName).click()
        this.spaceName.contains(spaceName)
    }

    clickMoreActions() {
        this.moreActionsButton.click()
    }

    clickNewProject() {
        this.newProjectButton.click()
    }

    newRstudioProject() {
        this.clickNewProject()
        cy.get('button.newRStudioProject').click()
        // TODO timeout check for main RStudio iframe did not work, added explicit wait
        cy.wait(40000)
        // Wait for key RStudio iframe to load
        cy.get('iframe#contentIFrame', { timeout: 50000 })
    }


    // Workflows
    login() {
        cy.visit('https://login.posit.cloud/login')
        cy.get('input[name="email"]').type(Cypress.env('USER_EMAIL'))
        this.clickSubmit()
        cy.get('input[type="password"]').type(Cypress.env('USER_PASSWORD'))
        this.clickSubmit()
    }

    createSpace(spaceName='Test Space') {
        //this.checkNavOpen()
        this.openNav()

        this.createSpaceButton.click()
        cy.get('dialog[aria-labelledby="NEW_SPACE_DIALOG-purpose"] input#name').type(spaceName)
        this.clickSubmit()
    }

    deleteSpace(spaceName) {
        this.goToSpace(spaceName)
        this.clickMoreActions()

        cy.get('button.action.delete').should('be.visible').should('not.be.disabled').click()
        cy.get('dialog[aria-labelledby="DELETE_SPACE_DIALOG-purpose"] input#deleteSpaceTest').type(`Delete ${spaceName}`)
        cy.get('button#deleteSpaceSubmit').click()
    }
}

export default new CloudPage()
