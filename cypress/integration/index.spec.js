/// <reference types="cypress" />

context("Homepage", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8000");
        cy.injectAxe();
        cy.wait(500);
    });

    it("has no a11y violations on load", () => {
        cy.checkA11y();
    });
});
