//@ts-check

import { Page } from "@playwright/test";
import loggedInUserPageLocators from "../locators/loggedInUserPageLocators";
import { BasePage } from "./BasePage";

export class LoggedInUserPage extends BasePage {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async open() {
        await this.goto();
        await this.shouldBeVisible(loggedInUserPageLocators.yourFeedLink);
    }
}