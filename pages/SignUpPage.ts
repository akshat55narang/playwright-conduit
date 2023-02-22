import { expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import signUpPageLocators from '../locators/signUpPageLocators';
import headerRoutes from "../constants/routes";

export class SignUpPage extends BasePage{
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async open() {
        await this.goto(headerRoutes.signUp);
        await this.shouldBeOnSignUpPage();
    }
    
    async shouldBeOnSignUpPage() {
        await expect(this.page.locator(signUpPageLocators.emailInput)).toBeVisible();
    }
}