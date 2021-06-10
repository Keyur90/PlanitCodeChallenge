describe("TestCases 1 & 2 for Contact page", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.contains("Contact").click();
    cy.contains("Submit").click();
  });

  it("Validate errors on contact page", () => {
    cy.validateErrors();
    cy.get("#forename").type("Keyur Shah");
    cy.get("#forename-err").should("not.exist", "Forename is required");
    cy.get("#email").type("keyurshah883@gmail.com");
    cy.get("#email-err").should("not.exist", "Email is required");
    cy.get("#message").type("This is just the testing message");
    cy.get("#message-err").should("not.exist", "Message is required");
    cy.contains("complete the form correctly").should(
      "not.exist",
      "We welcome your feedback - but we won't get it unless you complete the form correctly."
    );
  });

  it("Validate successful submission message", () => {
    cy.get("#forename").type("Keyur Shah");
    cy.get("#email").type("keyurshah883@gmail.com");
    cy.get("#message").type("This is just the testing message");
    cy.contains("Submit").click();
    cy.contains("we appreciate your feedback.").should("be.visible");
  });
});
