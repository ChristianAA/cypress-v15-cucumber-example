export const visibilityUtils = {

  assertElementIsVisible: (element) => {
    cy.get(element).should("be.visible");
  }
}