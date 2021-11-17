describe("Rant generation user flows", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
      .intercept({
        method: 'GET',
        url: 'https://smashbros-unofficial-api.vercel.app/api/v1/ultimate/characters',
        hostname: 'localhost'
      })
      .get('select')
      .select('Mario')
      .get('.submit-character-button')
      .click()
  })

  it('Should generate rant cards', () => {
    cy.get('.rant-card')
      .should('exist')
      .get('.character-name')
      .contains('Mario')
      .get('.rant-text')
      .contains('Mario')
      .should('exist')
  })

  it('Should generate a new rant card each time', () => {
    cy.get('.rant-card')
      .should('exist')
      .get('.character-name')
      .contains('Mario')
      .get('.rant-text')
      .contains('Mario')
      .get('select')
      .select('Duck Hunt')
      .get('.submit-character-button')
      .click()
      .get('.rant-card')
      .contains('Duck Hunt')
  })

  it('Should have a clickable save button', () => {
    cy.get('.save-rant-button')
      .should('exist')
      .should('be.visible')
      .click()
  })

  it('Should save rant cards', () => {
    cy.get('.rant-card')
      .get('.save-rant-button')
      .click()
      .get('.saved-rants-link')
      .click()
      .get('.saved-rants')
      .should('exist')
      .get('.rant-card')
      .get('.rant-text')
      .contains('Mario')
  })
})
