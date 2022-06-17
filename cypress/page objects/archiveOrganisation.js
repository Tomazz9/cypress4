class ArchiveOrganisation {
  get configBtn() {
    return cy.get(".vs-c-site-logo").eq(8);
  }

  get archiveBtn() {
    return cy.get(
      'button[class="vs-c-btn vs-c-btn--success vs-c-btn--spaced"]'
    );
  }

  get boardsModal1() {
    return cy.get(".vs-c-modal");
  }
  get yesBtn() {
    return this.boardsModal1.find("button").eq(2);
  }

  archive() {
    this.configBtn.click();
    this.archiveBtn.click();
    this.yesBtn.click();
  }
}

export const archiveOrganisation = new ArchiveOrganisation();
