import CloudPage from '../pages/CloudPage'

describe('Space Tests', () => {

    const spaceName = 'Test Space'

    beforeEach(() => {
        cy.session('login', () => {
            CloudPage.login()
        })
        CloudPage.goWorkspace()
        CloudPage.createSpace(spaceName)
        CloudPage.spaceName.contains(spaceName)
    })

    afterEach(() => {
        CloudPage.deleteSpace(spaceName)
        CloudPage.spaceName.contains('Your Workspace')
    })

    it('User should be able to launch an RStudio IDE project', () => {
        CloudPage.goWorkspace()
        CloudPage.goToSpace(spaceName)
        CloudPage.newRstudioProject()

        // Check RStudio has loaded
        cy.get('iframe#contentIFrame', {timeout: 6000}).its('0.contentDocument.body').then(cy.wrap).as('iframeBody')
        cy.get('@iframeBody').find('div#rstudio_container').should('exist')
        cy.get('@iframeBody').find('pre#rstudio_console_output').should('exist')
    })
})
