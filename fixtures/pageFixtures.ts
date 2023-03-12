//@ts-check

import { test as base } from '@playwright/test';
import { ArticleEditorPage } from '../pages/ArticleEditorPAge';
import { ArticlePage } from '../pages/ArticlePage';
import { HomePage } from '../pages/HomePage';
import { LoggedInUserPage } from '../pages/LoggedInUserPage';
import { SignInPage } from '../pages/SignInPage';
import { SignUpPage } from '../pages/SignUpPage';

type Fixtures = {
    homePage: HomePage,
    signInPage: SignInPage,
    signUpPage: SignUpPage,
    loggedInUserPage: LoggedInUserPage,
    articleEditorPage: ArticleEditorPage,
    articlePage: ArticlePage
}

export const test = base.extend<Fixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.open();
        await use(homePage);
    },
    signInPage: async ({ page }, use) => {
        const signInPage = new SignInPage(page);
        await signInPage.open();
        await use(signInPage);
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
    articleEditorPage: async({ page }, use) => {
        const articleEditorPage = new ArticleEditorPage(page);
        await use(articleEditorPage);
    },
    articlePage: async({ page }, use) => {
        const articlePage = new ArticlePage(page);
        await use(articlePage);
    }
});
export { expect } from '@playwright/test';
