import {domInteractionsUtils} from "../utils/domInteractionsUtils";

const searchInput = "#search_form_input_homepage";
const searchButton = "#search_button_homepage";

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