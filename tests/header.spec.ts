import { expect, test } from '../fixtures/pageFixtures';
import routes from '../constants/routes';
import headerLocators from '../locators/headerLocators';
import { SignInPage } from '../pages/SignInPage';
import { SignUpPage } from '../pages/SignUpPage';


    test('Home page should be default active tab', async ({ homePage }) => {
        await homePage.verifyIfNavigationItemIsActive(headerLocators.unAuthorizedUserHomeLink);
    });

    test('App logo should redirect to home page', async ({ homePage})  => {
        await homePage.clickByLocator(headerLocators.appLogoLink);
        await homePage.verifyIfNavigationItemIsActive(headerLocators.unAuthorizedUserHomeLink);
    });

    test('Home button should redirect to Home page', async ({ homePage }) => {
        await homePage.openNavigationItem(headerLocators.unAuthorizedUserHomeLink);
    });

    test('Sign in button should redirect to login page', async ({ homePage, page }) => {
        const signInPage = new SignInPage(page);
        await homePage.openNavigationItem(headerLocators.unAuthorizedUserSignInLink);
        await signInPage.shouldBeOnSignInPage();
    });

    test('Sign up button should redirect to register page', async ({ homePage, page }) => {
        const signUpPage = new SignUpPage(page);
        await homePage.openNavigationItem(headerLocators.unAuthorizedUserSignUpLink);
        await signUpPage.shouldBeOnSignUpPage();
    });

    for (const route in routes) {
        test.fixme(`${route} Route should have title ${route} — Conduit`, async ({homePage}) => {
            await homePage.goto(route);
            const title = route.replace('_', ' ').replace(route.charAt(0), route.charAt(0).toUpperCase());
            await homePage.shouldHaveTitle(`${title} — Conduit`);
        });
    }


