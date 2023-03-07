describe('URL Shortener', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display the page title and existing shortened URLs', () => {
    cy.get('h1').should('contain', 'URL Shortener')
    cy.get('.url').should('have.length.greaterThan', 0)
  })

  it('should show the form with proper inputs', () => {
    cy.get('input[name="title"]').should('exist')
    cy.get('input[name="urlToShorten"]').should('exist')
    cy.get('button').should('contain', 'Shorten Please!')
  })

})