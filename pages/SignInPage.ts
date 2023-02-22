import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import signInPageLocators from '../locators/signInPageLocators';
import headerRoutes from "../routes/header-routes";

export class SignInPage extends BasePage {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async open() {
        await this.goto(headerRoutes.signIn);
        await this.shouldBeOnSignInPage();
    }

    async shouldBeOnSignInPage() {
        await expect(this.page.locator(signInPageLocators.emailInput)).toBeVisible();
    }
}