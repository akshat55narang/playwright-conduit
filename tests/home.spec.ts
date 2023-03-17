import { test } from '../fixtures/pageFixtures';
import routes from '../constants/routes';
import headerLocators from '../locators/headerLocators';
import storageStatePaths from '../constants/storageStatePaths';


test.use({ storageState: storageStatePaths.emptyStorageState});

test('Home page should be default active tab', async ({ homePage }) => {
    await homePage.verifyIfNavigationItemIsActive(headerLocators.unAuthorizedUserHomeLink);
});

test.fixme('Home page banner should contain app name and description', async({homePage}) => {

});

test.fixme('Home page should contain articles in Global Feed', async({homePage}) => {

});

test.fixme('Home page should contain Popular tags container', async({homePage}) => {

});

for (const route in routes) {
    test.fixme(`${route} Route should have title ${route} — Conduit`, async ({ homePage }) => {
        await homePage.goto(route);
        const title = route.replace('_', ' ').replace(route.charAt(0), route.charAt(0).toUpperCase());
        await homePage.shouldHaveTitle(`${title} — Conduit`);
    });
}




