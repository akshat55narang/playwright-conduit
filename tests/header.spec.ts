import { expect, test } from '@playwright/test';
import { HeaderSection } from '../pages/sections/HeaderSection';
import headerRoutes from '../routes/header-routes'; 
import headerLocators from '../locators/headerLocators';
import { SignInPage } from '../pages/SignInPage';
import { SignUpPage } from '../pages/SignUpPage';

test.describe('', () => {
    let headerSection: HeaderSection;
    let signInPage: SignInPage;
    let signUpPage: SignUpPage;

    test.beforeEach(async ({ page }) => {
        headerSection = new HeaderSection(page);
        signInPage = new SignInPage(page);
        signUpPage = new SignUpPage(page);
        await headerSection.goto();
    });

    test('Home page should be default active tab', async ({ page }) => {
        await headerSection.verifyIfNavigationItemIsActive(headerLocators.unAuthorizedUserHomeLink);
    });

    test('App logo should redirect to home page', async ({ page})  => {
        await headerSection.clickByLocator(headerLocators.appLogoLink);
        await headerSection.verifyIfNavigationItemIsActive(headerLocators.unAuthorizedUserHomeLink);
    });

    test('Home button should redirect to Home page', async ({ page }) => {
        await headerSection.openNavigationItem(headerLocators.unAuthorizedUserHomeLink);
    });

    test('Sign in button should redirect to login page', async ({ page }) => {
        await headerSection.openNavigationItem(headerLocators.unAuthorizedUserSignInLink);
        await signInPage.shouldBeOnSignInPage();
    });

    test('Sign up button should redirect to register page', async ({ page }) => {
        await headerSection.openNavigationItem(headerLocators.unAuthorizedUserSignUpLink);
        await signUpPage.shouldBeOnSignUpPage();
    });


});

