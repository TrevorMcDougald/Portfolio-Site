// @ts-check
/// <reference types="cypress" />
describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit("/contact");
    cy.get("form");
  });
});
