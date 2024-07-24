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
it("Negative registration test", () => {
  cy.viewport(1980, 1080);
  cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  cy.get("#loginPanel > :nth-child(3) > a").click();
  cy.get("input[id='customer.firstName']").type(12312);
  cy.get("input[id='customer.lastName']").type("Lastname");
  cy.get("input[id='customer.address.street']").type("address");
  cy.get("input[id='customer.address.city']").type("city");
  cy.get("input[id='customer.address.state']").type("state");
  cy.get("input[id='customer.address.zipCode']").type("ZipCode");
  cy.get("input[id='customer.phoneNumber']").type("1111");
  cy.get("input[id='customer.ssn']").type("1111");
  cy.get("input[id='customer.username']").type("parabanksoft-1@yopmail.com");
  cy.get("input[id='customer.password']").type("Test1234");
  cy.get("input[id='repeatedPassword']").type("Test1234");
  cy.get("input[value='Register']").click();
});
```

**Commit and push changes**

**Create a Merge Request:**

- Go to GitHub repository
- Click 'Compare & pull request'
- Add title and description
- Click 'Create pull request'

### 
// https://crawling-mallow-f72.notion.site/Lesson-2-b668807cde3e446dacb434852a53f496

## // Part 2

From Initial Tests to CI/CD In Cypress

# Install prettier

$ npm install prettier
​
Create .prettierrc

```
{
	"semi": false,
	"useTabs": true,
	"tabWidth": 4,
	"singleQuote": true
}
```

​
# For code formatting use this command:

$ npx prettier . -write
​

# Install typescript

$ npm install typescript
​
Create tsconfig.json

```
{
	"compilerOptions": {
		"target": "es5",
		"lib": ["es5", "dom"],
		"types": ["cypress", "node"],
		"esModuleInterop": true // It is fixed error 'TypeError: (0 , cypress_esbuild_preprocessor_1.default) is not a function'
	},
	"include": ["**/*.ts", "cypress.config.js", "cypress/e2e/login.ts"]
}
```

​

# Rename cypress.config.js to cypress.config.ts

# Install cucumber dependency 
// **1**
$ npm install @badeball/cypress-cucumber-preprocessor
// **2**
$ npm install @bahmutov/cypress-esbuild-preprocessor

# change cypress.config.ts

```
import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

export default defineConfig({
	e2e: {
		specPattern: '**/*.ts',
		viewportWidth: 1920,
		viewportHeight: 1080,
		async setupNodeEvents(
			on: Cypress.PluginEvents,
			config: Cypress.PluginConfigOptions,
		): Promise<Cypress.PluginConfigOptions> {
			await addCucumberPreprocessorPlugin(on, config)
			on(
				'file:preprocessor',
				createBundler({
					plugins: [createEsbuildPlugin(config)],
				}),
			)
			return config
		},
	},
})
​```

# Rename login.cy.js to login.ts

````

import BasePage from '../page-object/basePage'

const basePage = new BasePage()

describe('Login tests', () => {
it('login', () => {
basePage.open()
basePage.login('parabanksoft-789@yopmail.com', 'CyTest1234')
})
})

```
​
# Rename registration.cy.js to registration.ts

```

import RegisterPage from '../page-object/registerPage'

const registerPage = new RegisterPage()

describe('Registrations tests', () => {
it.only('Registration', () => {
registerPage.open()
registerPage.register('parabanksoft-789@yopmail.com', 'CyTest1234')
})
})  
​```

# Create Folder cypress/page-object
# Create cypress/page-object/basePage.ts

```
export default class BasePage {
	// locators
	usernameInput() {
		return cy.get("input[name='username']")
	}

	passwordInput() {
		return cy.get("input[name='password']")
	}

	loginBtn() {
		return cy.get("input[value='Log In']")
	}

	//methods
	open() {
		cy.visit('https://parabank.parasoft.com/parabank/index.htm')
	}

	login(username, password) {
		this.usernameInput().type(username)
		this.passwordInput().type(password)
		this.loginBtn().click()
		cy.url().should('include', '/overview')
	}
}
```

​

# Create registerPage.ts

```
import BasePage from './basePage'

export default class RegisterPage extends BasePage {
	// locators
	registerBtn() {
		return cy.get('#loginPanel > :nth-child(3) > a')
	}

	firstNameInput() {
		return cy.get("input[id='customer.firstName']")
	}

	lastNameInput() {
		return cy.get("input[id='customer.lastName']")
	}

	streetInput() {
		return cy.get("input[id='customer.address.street']")
	}

	cityInput() {
		return cy.get("input[id='customer.address.city']")
	}

	stateInput() {
		return cy.get("input[id='customer.address.state']")
	}

	zipCodeInput() {
		return cy.get("input[id='customer.address.zipCode']")
	}

	phoneNunberInput() {
		return cy.get("input[id='customer.phoneNumber']")
	}

	ssnInput() {
		return cy.get("input[id='customer.ssn']")
	}

	usernameInput() {
		return cy.get("input[id='customer.username']")
	}

	passwordInput() {
		return cy.get("input[id='customer.password']")
	}

	repeatedPasswordInput() {
		return cy.get("input[id='repeatedPassword']")
	}

	registrationBtn() {
		return cy.get("input[value='Register']")
	}

	//methods
	register(email, password) {
		this.registerBtn().click()
		this.firstNameInput().type('Name')
		this.lastNameInput().type('Lastname')
		this.streetInput().type('address')
		this.cityInput().type('city')
		this.stateInput().type('state')
		this.zipCodeInput().type('ZipCode')
		this.phoneNunberInput().type('7777')
		this.ssnInput().type('5555')
		this.usernameInput().type(email)
		this.passwordInput().type(password)
		this.repeatedPasswordInput().type(password)
		this.registrationBtn().click()
	}
}
```
