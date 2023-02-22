import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/sections/HomePage';
import { SignInPage } from '../pages/SignInPage';
import { SignUpPage } from '../pages/SignUpPage';

type Fixtures = {
    homePage: HomePage,
    signInPage: SignInPage,
    signUpPage: SignUpPage
}
export const test = base.extend<Fixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.open();
        await use(homePage);
    },
    signInPage: async ({ page }, use) => {
        const signInPage = new SignInPage(page);
        signInPage.open();
        await use(signInPage);
    },
    signUpPage: async ({ page }, use) => {
        const signUpPage = new SignUpPage(page);
        signUpPage.open();
        await use(signUpPage);
    }
});
export { expect } from '@playwright/test';
