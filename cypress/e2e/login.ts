import BasePage from "../page-object/basePage";

const basePage = new BasePage();

describe("Login test", () => {
  it("Login", () => {
    basePage.open()
    basePage.login('parabanksoft-789@yopmail.com', 'CyTest1234')
    // cy.viewport(1980, 1080);
    // cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    // cy.get("input[name='username']").type("parabanksoft-789@yopmail.com");
    // cy.get("input[name='password']").type("CyTest1234");
    // cy.get(':nth-child(5) > .button').click();
    // cy.url().should("include", "/overview");
  });
});