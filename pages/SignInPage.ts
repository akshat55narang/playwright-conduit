//@ts-check

import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import signInPageLocators from '../locators/signInPageLocators';
import routes from "../constants/routes";
import userOverviewPageLocators from "../locators/loggedInUserPageLocators";

export class SignInPage extends BasePage {
    readonly page: Page;
    readonly emailInput = signInPageLocators.emailInput;


    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async open() {
        await this.goto(routes.signIn);
        await this.shouldBeOnSignInPage();
    }

    async shouldBeOnSignInPage() {
        await this.shouldBeVisible(this.emailInput);
    }

    async login(email,password ) {
        await this.sendTextToField(this.emailInput, email);
        await this.sendTextToField(signInPageLocators.passwordInput, password);
        await this.clickByLocator(signInPageLocators.signInButton);
    }

    async loginWithValidUser(email = 'DX1193111111@testacc.com', password= 'testen#1') {
        await this.login(email, password);
        await this.shouldBeVisible(userOverviewPageLocators.yourFeedLink);
    }

    async loginWithInValidUser(email, password) {
        await this.login(email, password);
        await this.shouldBeVisible(signInPageLocators.signInErrorMessageList);
    }
}