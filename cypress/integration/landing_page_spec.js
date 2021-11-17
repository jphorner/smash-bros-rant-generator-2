describe("Main page user flow", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
      .intercept({
        method: 'GET',
        url: 'https://smashbros-unofficial-api.vercel.app/api/v1/ultimate/characters',
        hostname: 'localhost'
      })
  })

  it('Should display a header', () => {
    cy.get('header')
      .contains('Smash Ultimate Rant Generator')
      .should('exist')
  });

  it('Should display a form', () => {
    cy.get('form')
      .should('exist')
  })

  it('Should prompt the user to select a character', () => {
    cy.get('.selection-text')
      .contains("Select a character")
  })

  it('Should contain a dropdown menu', () => {
    cy.get('select')
      .select('Mario')
      .should('have.value', 'Mario')
  })

  it('Should have a submit button', () => {
    cy.get('.submit-character-button')
      .click()
      .should('exist')
  })
});
