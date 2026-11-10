/// <reference types="Cypress" />

describe('Wikipediatesti', () => {
  it('clicking "type" shows the right headings', () => {
    cy.visit('https://wikipedia.org');

    // wait - odotetaan annetun millisekuntien ajan.
    cy.wait(5000);

    // containst - etsii DOM-elementin joka sisältää annetun arvon
    // click - klikataan DOM-elementtiä
    cy.contains('type').click();

    // url - haetaan tämänhetkinen URL
    // should - jokin tulisi olla jotain, määritellään argumenteillä
    // include - sisältää jonkin annetun arvon
    cy.url().should('include', '/commands/actions');

    // get - haetaan DOM-elementti
    // type - kirjoitetaan DOM-elementtiin
    // have.value - tarkistetaan, että valitussa elementissä on annettu arvo
    // piste-operaattorilla voidaan ketjuttaa komentoja
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
  });
});
