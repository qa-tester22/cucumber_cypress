# cucumber_cypress
BDD Cucumber Gherkin Cypress JavaScript Autotests

https://crawling-mallow-f72.notion.site/Lesson-1-10f4810fdbdb4b1f9baf4873969e149c

website for testing is
https://parabank.parasoft.com/parabank/index.htm

# // Part 1

From Initial Tests to CI/CD In Cypress

---

**Check node version**

```jsx
node - v;
```

**Install npm (node package manager)**

- create package.json

```jsx
npm init --yes

npm i
```

npm i gives error - could not use

**Install cypress**

```jsx
npm install cypress
```

**Open cypress**

```jsx
npx cypress open
```

**Create a New Test File:**

- Navigate to `cypress/e2e`
- Create `registration.spec.js`
- Create `registration.cy.js`

**Registration test**

```jsx
describe("Registrations tests", () => {
  it("Registration", () => {
    cy.viewport(1980, 1080);
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get("#loginPanel > :nth-child(3) > a").click();
    cy.get("input[id='customer.firstName']").type("Name");
    cy.get("input[id='customer.lastName']").type("Lastname");
    cy.get("input[id='customer.address.street']").type("address");
    cy.get("input[id='customer.address.city']").type("city");
    cy.get("input[id='customer.address.state']").type("state");
    cy.get("input[id='customer.address.zipCode']").type("ZipCode");
    cy.get("input[id='customer.phoneNumber']").type("1111");
    cy.get("input[id='customer.ssn']").type("1111");
    cy.get("input[id='customer.username']").type("parabank-1@yopmail.com");
    cy.get("input[id='customer.password']").type("Test1234");
    cy.get("input[id='repeatedPassword']").type("Test1234");
    cy.get("input[value='Register']").click();
  });
});
```

- Create `login.spec.js`
- Create `login.cy.js`

**Login test**

```jsx
describe("Registrations tests", () => {
  it("Registration", () => {
    cy.viewport(1980, 1080);
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get("input[name='username']").type("parabank-1@yopmail.com");
    cy.get("input[name='password']").type("Test1234");
    cy.get("input[value='Log In']").click();
    cy.url().should("include", "/overview");
  });
});
```

- Create `.gitignore`

**.gitignore**

```jsx
cypress/results/*
cypress/reports/*
cypress/screenshots/*
cypress/videos/*
*node_modules/*
```

Find in browser gitignor generator to create .gitignor file
https://www.toptal.com/developers/gitignore

Install **Git Graph** extension in Visual studio code

Click on **Initialize repository** button

**Create commits:**

- Go to Visual Studio code
- Click '+’ for stage changes
- Write a commit message (for example: _add registration test_)

**Create the branch:**

- **Navigate to Your Repository:**
  - Go to [GitHub](https://github.com/) and log in to your account.
  - Navigate to the repository where you want to create a new branch.
- **Open the Branch Selector:**
  - On the main repository page, click on the branch selector dropdown. This is usually labeled with the current branch name (e.g., `main` or `master`).
- **Create a New Branch:**
  - In the branch selector dropdown, type the name of the new branch you want to create.
  - A message will appear saying "Create branch: `your-branch-name` from `current-branch-name`".
  - Click the option to create the new branch.
- **Switch to the New Branch:**
  - After creating the new branch, GitHub will automatically switch to it.
  - You can verify that you are on the new branch by checking the branch name shown in the branch selector.

**Change branch in Visual studio code**

**Prepare negative registration test**

```jsx
  it('Negative registration test', () => {
    cy.viewport(1980, 1080)
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > :nth-child(3) > a').click()
    cy.get("input[id='customer.firstName']").type(12312)
    cy.get("input[id='customer.lastName']").type('Lastname')
    cy.get("input[id='customer.address.street']").type('address')
    cy.get("input[id='customer.address.city']").type('city')
    cy.get("input[id='customer.address.state']").type('state')
    cy.get("input[id='customer.address.zipCode']").type('ZipCode')
    cy.get("input[id='customer.phoneNumber']").type('1111')
    cy.get("input[id='customer.ssn']").type('1111')
    cy.get("input[id='customer.username']").type('parabanksoft-1@yopmail.com')
    cy.get("input[id='customer.password']").type('Test1234')
    cy.get("input[id='repeatedPassword']").type('Test1234')
    cy.get("input[value='Register']").click()
  })
```

**Commit and push changes**

**Create a Merge Request:**

- Go to GitHub repository
- Click 'Compare & pull request'
- Add title and description
- Click 'Create pull request'
