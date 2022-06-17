/// <reference types='Cypress' />

import { loginScrum } from "../page objects/loginScrum";
import { createOrganisation } from "../page objects/createOrganisation";

describe("loginScrum", () => {
  let email = "milant@gmail.com";
  let password = "Milanmilan1";
  let name = "moja organizacija";
  before("visit login page", () => {
    cy.visit("/", "/login");
    loginScrum.login(email, password);
    loginScrum.logInBtn.click();
  });

  it("valid create organization", () => {
    createOrganisation.create(name);
  });
});
