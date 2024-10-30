import {domInteractionsUtils} from "../utils/domInteractionsUtils";

const searchInput = "#searchbox_homepage";
const searchButton = "#searchbox_homepage [type='submit']";

export const navigateToBaseUrl = function () {
  cy.visit('/') 
}

export const inputSearch = (value) => {
  navigateToBaseUrl();
  domInteractionsUtils.type(searchInput, value);
}

export const pressSearchButton = function () {
  domInteractionsUtils.click(searchButton);
}