# playwright-conduit
Test automation of Demo [Real World](https://demo.realworld.io/#/) app using playwright in typescript.

### Tools Used
1. Programming Language - TypeScript
2. Automation tool - Playwright

### Information

- [constants](/constants/) Contains files with constants like API base paths and routes.
- [pageFixtures.ts](/fixtures/pageFixtures.ts) - Encapsulated setup and teardown using Playwright fixtures. 
- [locators](/locators/) - Contains locators / selectors. Can be imported into any file and reused.
- [pages](/pages/) - Contains all the page objects. [BasePage.ts](/pages/BasePage.ts) contains wrappers and helper 
   methods around Playwright's page fixtures. All these methods are used by all extending page objects.
- [rest](/rest/) - Contains methods to make API calls for setup and teardown in UI tests. 
  [BaseApi.ts](./rest/BaseApi.ts) - Provides base request which sets up request context like baseUrl, etc.
   which can be used by all extending classes to make API calls promoting re-usability.
- [tests](/tests/) - contains all the tests.

## How to Run:
-  Download this project on your local machine
> git clone https://github.com/akshat55narang/playwright-conduit.git
- cd to `playwright-conduit` folder
- Run `npm install` to install all dependencies
- Run `npx playwright install` - to install all the browsers.
- Run tests
  - `npm run test`
- View reports
  - `npm run show-reports`

### Test Artifact Location
- Report - [playwright-report](/playwright-report/)


