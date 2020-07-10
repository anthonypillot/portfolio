// https://docs.cypress.io/api/introduction/api.html

describe("Global tests on root page", () => {
  it("Visits and tests the app root url", () => {
    cy.visit("http://localhost:8080");
    cy.contains("Anthony PILLOT");
    cy.contains("Consultant Développeur Informatique");
    cy.get(".align-center > .v-image > .v-responsive__content");
    cy.contains("© " + new Date().getFullYear());
    cy.contains("All rights reserved.");
    cy.contains("Application version:");
  });
  it("Tests dark mode", () => {
    cy.visit("http://localhost:8080");
    cy.get(".v-app-bar__nav-icon").click();
    cy.get(".hidden-xs-only > .row > .v-btn").click();
    cy.get(".v-overlay__scrim").click();
    cy.visit("/");
  });
  it("Visits and tests navigation app", () => {
    cy.visit("http://localhost:8080");
    cy.get(".v-app-bar__nav-icon").click();
    cy.contains("MENU PRINCIPAL");
    cy.contains("Accueil").click();

    cy.visit("http://localhost:8080");
    cy.get(".v-app-bar__nav-icon").click();
    cy.contains("Expérience").click();
    cy.url().should("include", "/experience");

    cy.visit("http://localhost:8080");
    cy.get(".v-app-bar__nav-icon").click();
    cy.contains("Projets").click();
    cy.url().should("include", "/under-construction");

    cy.visit("http://localhost:8080");
    cy.get(".v-app-bar__nav-icon").click();
    cy.contains("Blog").click();
    cy.url().should("include", "/under-construction");

    cy.visit("http://localhost:8080");
    cy.get(".v-app-bar__nav-icon").click();
    cy.contains("Contact").click();
    cy.url().should("include", "/under-construction");

    cy.visit("http://localhost:8080");
    cy.get(".v-app-bar__nav-icon").click();
    cy.contains("À propos").click();
    cy.url().should("include", "/about");
  });
});
