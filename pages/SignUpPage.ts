import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import signUpPageLocators from '../locators/signUpPageLocators';

export class SignUpPage extends BasePage{
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async shouldBeOnSignUpPage() {
        await expect(this.page.locator(signUpPageLocators.emailInput)).toBeVisible();
    }
}