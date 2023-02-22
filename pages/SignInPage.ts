import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import signInPageLocators from '../locators/signInPageLocators';

export class SignInPage extends BasePage {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async shouldBeOnSignInPage() {
        await expect(this.page.locator(signInPageLocators.emailInput)).toBeVisible();
    }
}