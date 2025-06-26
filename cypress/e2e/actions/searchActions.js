import {domInteractionsUtils} from "../utils/domInteractionsUtils";

const searchInput = "#searchbox_homepage";
const searchButton = "#searchbox_homepage [type='submit']";

export const navigateToBaseUrl = function () {
  cy.visit('/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114 Safari/537.36'
      }
  })
}

export const inputSearch = (value) => {
  navigateToBaseUrl();
  domInteractionsUtils.type(searchInput, value);
}

export const pressSearchButton = function () {
  domInteractionsUtils.click(searchButton);
}