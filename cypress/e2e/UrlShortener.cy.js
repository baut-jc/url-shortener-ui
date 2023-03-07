describe('URL Shortener', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/api/v1/urls', {fixture: 'example.json'})
    cy.visit('http://localhost:3000')
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

  it('should reflect information in the input field', () => {
    cy.get('[placeholder="Title..."]').type('Title here')
    cy.get('[placeholder="URL to Shorten..."]').type('superloooooongURLandlotsofslash-and-dash.com')
  })

  it('should show the submitted inputs', () => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      id: 12,
      long_url:
        'superloooooongURLandlotsofslash-and-dash.com',
      short_url: 'http://localhost:3001/useshorturl/12',
      title: 'Title here',
    }).as('stub')
    cy.get('button').click()
    cy.wait('@stub')
    cy.get('h3').contains('Title here')
  })
})