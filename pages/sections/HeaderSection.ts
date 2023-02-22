import { expect, Page } from "@playwright/test";
import headerLocators from "../../locators/headerLocators";
import { BasePage } from "../BasePage";

export class HeaderSection extends BasePage {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async verifyIfNavigationItemIsActive(navItemLocator: string) {
        const locator = this.page.locator(navItemLocator);
        await this.shouldHaveClass(locator, 'nav-link active');
    }

    async openNavigationItem(navItemLocator: string) {
        await this.clickByLocator(navItemLocator);
        await this.verifyIfNavigationItemIsActive(navItemLocator);
    }

    async verifyHomePage() {
        await expect(this.page.locator(headerLocators.unAuthorisedBannerParagrapgh))
        .toHaveText('A place to share your knowledge.');
    }


}