import { expect, Locator, Page } from "@playwright/test";

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(url: string = '') {
        await this.page.goto(url);
    }

    async clickLocatorWithText(text: string) {
        await this.page.getByText(text).click();
    }

    async clickByLocator(locator: string) {
        await this.page.locator(locator).click();
    }

    async shouldHaveTitle(title: string) {
        await expect(this.page).toHaveTitle(title);
    }

    async urlShouldContain(text: string) {
        await expect(this.page).toHaveURL(text);
    }

    async shouldHaveClass(locator: Locator, className: string) {
        await expect(locator).toHaveClass(className);
    }

    async verify() {

    }
}