export const cypressUtils = {

  capturePageScreenshot: () => {
    cy.screenshot(String(Date.now()));
  }
}