//@ts-check

import { test as base } from '@playwright/test';
import loggedInUserPageLocators from '../locators/loggedInUserPageLocators';
import { ArticleEditorPage } from '../pages/ArticleEditorPAge';
import { HomePage } from '../pages/HomePage';
import { LoggedInUserPage } from '../pages/LoggedInUserPage';
import { SignInPage } from '../pages/SignInPage';
import { SignUpPage } from '../pages/SignUpPage';
import { UserApi } from '../rest/UserApi';

type Fixtures = {
    homePage: HomePage,
    signInPage: SignInPage,
    signUpPage: SignUpPage,
    loggedInUserPage: LoggedInUserPage,
    articleEditorPage: ArticleEditorPage
}

const EMPTY_STORAGE_STATE_PATH = 'playwright/.auth/empty_state.json';

export const test = base.extend<Fixtures>({
    homePage: async ({ browser }, use) => {
        const context = await browser.newContext({storageState: EMPTY_STORAGE_STATE_PATH});
        const homePage = new HomePage(await context.newPage());
        await homePage.open();
        await use(homePage);
        await context.close();
    },
    signInPage: async ({ browser }, use) => {
        const context = await browser.newContext({ storageState: EMPTY_STORAGE_STATE_PATH});
        const userApi = new UserApi();
        const signInPage = new SignInPage(await context.newPage());
        
        await userApi.createUserIfNotExisting();
        await signInPage.open();
        await use(signInPage);
        await context.close();
    },
    signUpPage: async ({ page }, use) => {
        const signUpPage = new SignUpPage(page);
        signUpPage.open();
        await use(signUpPage);
    },
    loggedInUserPage: async({ page }, use) => {
        const loggedInUserPage = new LoggedInUserPage(page);
        await loggedInUserPage.open();
        await use(loggedInUserPage);
    },
    articleEditorPage: async({ loggedInUserPage, page }, use) => {
        await loggedInUserPage.clickByLocator(loggedInUserPageLocators.newArticleLink);
        const articleEditorPage = new ArticleEditorPage(page);
        await use(articleEditorPage);
    }
});
export { expect } from '@playwright/test';
