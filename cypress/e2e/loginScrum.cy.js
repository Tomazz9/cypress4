/// <reference types='Cypress' />

import { loginScrum } from "../page objects/loginScrum";

describe("loginScrum", () => {
  let email = "milant@gmail.com";
  let password = "Milanmilan1";
  before("visit login page", () => {
    cy.visit("/", "/login");
  });

  it("valid scrum login", () => {
    loginScrum.login(email, password);
  });
});
