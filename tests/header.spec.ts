import { test } from '../fixtures/pageFixtures';
import storageStatePaths from "../constants/storageStatePaths";
import headerLocators from "../locators/headerLocators";


test.use({ storageState: storageStatePaths.emptyStorageState});

test.describe('Logged out user header tests ', () => {

    test('App logo should redirect to home page', async ({ homePage }) => {
        await homePage.clickByLocator(headerLocators.appLogoLink);
        await homePage.verifyIfNavigationItemIsActive(headerLocators.unAuthorizedUserHomeLink);
    });
    
    test('Home button should redirect to Home page', async ({ homePage }) => {
        await homePage.openNavigationItem(headerLocators.unAuthorizedUserHomeLink);
    });
    
    test('Sign in button should redirect to login page', async ({ homePage, signInPage }) => {
        await homePage.openNavigationItem(headerLocators.unAuthorizedUserSignInLink);
        await signInPage.shouldBeOnSignInPage();
    });
    
    test('Sign up button should redirect to register page', async ({ homePage, signUpPage }) => {
        await homePage.openNavigationItem(headerLocators.unAuthorizedUserSignUpLink);
        await signUpPage.shouldBeOnSignUpPage();
    });
});

test.describe.fixme('Logged In user header tests', () => {

    test('App logo should redirect to home page', async ({ homePage }) => {
        await homePage.clickByLocator(headerLocators.appLogoLink);
        await homePage.verifyIfNavigationItemIsActive(headerLocators.unAuthorizedUserHomeLink);
    });
    
    test('Home button should redirect to Home page', async ({ homePage }) => {
        await homePage.openNavigationItem(headerLocators.unAuthorizedUserHomeLink);
    });
    
    test('Sign in button should redirect to login page', async ({ homePage, signInPage }) => {
        await homePage.openNavigationItem(headerLocators.unAuthorizedUserSignInLink);
        await signInPage.shouldBeOnSignInPage();
    });
    
    test('Sign up button should redirect to register page', async ({ homePage, signUpPage }) => {
        await homePage.openNavigationItem(headerLocators.unAuthorizedUserSignUpLink);
        await signUpPage.shouldBeOnSignUpPage();
    });
});