export const domInteractionsUtils = {

  click: (element) => {
    cy.get(element).click();
  },

  type: (element, value) => {
    cy.get(element).type(value);
  }
}