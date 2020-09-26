/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  });


  it('body should contain .mat-typography class', () => {
    cy.get('body').should('have.class', 'mat-typography');
  });
});
