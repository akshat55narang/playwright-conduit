import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class HeaderSection extends BasePage {
    readonly page: Page;

    readonly articleHeader: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;

        this.articleHeader = page.getByRole('heading', { level: 1});
    }
}
