//@ts-check

import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class UserOverviewPage extends BasePage {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async open() {
        this.goto();
    }
}