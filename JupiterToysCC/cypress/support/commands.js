// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("buyProduct", (product, quantity) => {
  for (let n = 0; n < quantity; n++) {
    cy.contains(product).parent().find("p").find("a").click();
  }
});
Cypress.Commands.add("getQuantity", (product, quantity) => {
  cy.contains(product)
    .siblings()
    .children("input")
    .should("have.value", quantity);
});

Cypress.Commands.add("validateErrors", () => {
  cy.get("#forename-err").should("have.text", "Forename is required");
  cy.get("#email-err").should("have.text", "Email is required");
  cy.get("#message-err").should("have.text", "Message is required");
  cy.contains("complete the form correctly").should(
    "contain.text",
    "We welcome your feedback - but we won't get it unless you complete the form correctly."
  );
});
