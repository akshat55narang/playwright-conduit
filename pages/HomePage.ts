import { expect, Page } from "@playwright/test";
import headerLocators from "../locators/headerLocators";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async open() {
        await this.goto();
        await this.shouldBeOnHomePage();
    }

    async verifyIfNavigationItemIsActive(navItemLocator: string) {
        const locator = this.page.locator(navItemLocator);
        await this.shouldHaveClass(locator, 'nav-link active');
    }

    async openNavigationItem(navItemLocator: string) {
        await this.clickByLocator(navItemLocator);
        await this.verifyIfNavigationItemIsActive(navItemLocator);
    }

    async shouldBeOnHomePage() {
        await expect(this.page.locator(headerLocators.unAuthorisedBannerParagrapgh))
        .toHaveText('A place to share your knowledge.');
    }

}