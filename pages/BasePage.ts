import { expect, Page } from "@playwright/test";

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(url = '') {
        await this.page.goto(url);
    }

    async reload() {
        await this.page.reload();
    }

    async urlShouldContainText(text: string) {
        await expect(this.page.url()).toContain(text);
    }

    async shouldHaveTitle(title: string) {
        await expect(this.page).toHaveTitle(title);
    }
    
    async shouldBeVisible(locator: string) {
        await expect(this.page.locator(locator)).toBeVisible();
    }

    async shouldHaveClass(locator: string, className: string) {
        await expect(this.page.locator(locator)).toHaveClass(className);
    }

    async shouldContainText(locator: string, text: string) {
        await expect(this.page.locator(locator)).toContainText(text);
    }

    async clickLocatorWithText(text: string) {
        await this.page.getByText(text).click();
    }

    async clickByLocator(locator: string) {
        await this.page.locator(locator).click();
    }

    async sendTextToField(locator: string, text: string) {
        await this.page.locator(locator).fill(text);
    }
}