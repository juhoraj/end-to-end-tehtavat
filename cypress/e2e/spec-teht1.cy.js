/// <reference types="Cypress" />

describe('Wikipedia Jamk -testi', () => {
  it('hakee Jamkin, rullaa kampuksiin, odottaa ja vaihtaa kieleksi englannin', () => {
    cy.visit('https://fi.wikipedia.org');

    cy.get('input[name="search"]')
      .first()
      .should('be.visible')
      .type('Jamk{enter}');

    cy.url().should('include', 'Jyv%C3%A4skyl%C3%A4n_ammattikorkeakoulu');

    cy.contains('h2, h3', 'Kampukset').scrollIntoView().should('be.visible');

    cy.wait(5000);

    cy.get('a[hreflang="en"]').first().click();

    cy.origin('https://en.wikipedia.org', () => {
      cy.url().should('include', '/wiki/JAMK_University_of_Applied_Sciences');
    });
  });
});
