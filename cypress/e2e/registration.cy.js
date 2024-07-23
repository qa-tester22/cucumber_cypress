describe("Registration test", () => {
  it("Registration", () => {
    cy.viewport(1980, 1080);
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get("#loginPanel > :nth-child(3) > a").click();
    cy.get("input[id='customer.firstName']").type("Name");
    cy.get("input[id='customer.lastName']").type("LastName");
    cy.get("input[id='customer.address.street']").type("address");
    cy.get("input[id='customer.address.city']").type("city");
    cy.get("input[id='customer.address.state']").type("state");
    cy.get("input[id='customer.address.zipCode']").type("ZipCode");
    cy.get("input[id='customer.phoneNumber']").type("77777");
    cy.get("input[id='customer.ssn']").type("5555");
    cy.get("input[id='customer.username']").type("parabanksoft-789@yopmail.com");
    cy.get("input[id='customer.password']").type("CyTest1234");
    cy.get("input[id='repeatedPassword']").type("CyTest1234");
    cy.get("input[value='Register']").click();
  });
});