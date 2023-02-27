//@ts-check

import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SignInPage } from '../pages/SignInPage';
import { SignUpPage } from '../pages/SignUpPage';
import { UserApi } from '../rest/UserApi';

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
        const userApi = new UserApi();
        await userApi.createUserIfNotExisting();
        const signInPage = new SignInPage(page);
        await signInPage.open();
        await use(signInPage);
    },
    signUpPage: async ({ page }, use) => {
        const signUpPage = new SignUpPage(page);
        signUpPage.open();
        await use(signUpPage);
    }
});
export { expect } from '@playwright/test';
