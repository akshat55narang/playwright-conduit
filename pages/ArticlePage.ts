import { expect, Page } from "@playwright/test";
import routes from "../fixtures/routes";
import articleEditorPageLocators from "../locators/articleEditorPageLocators";
import articlePageLocators from "../locators/articlePageLocators";
import { BasePage } from "./BasePage";

export class ArticlePage extends BasePage {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async open(articleSlug: string) {
        await this.goto(`${routes.article}/${articleSlug}`);
        await this.articleShouldBeOpen(articleSlug);
    }

    async articleShouldBeOpen(articleSlug: string) {
        await this.urlShouldContainText(articleSlug);
    }

    async clickBannerEditArticleButton() {
        await this.clickByLocator(articlePageLocators.bannerEditArticleLink);
        await this.shouldBeVisible(articleEditorPageLocators.articleTitleInput);
    }

    async articleShouldHaveTitlAndBody(expectedTitle: string, expectedBody) {
        await this.shouldContainText(articlePageLocators.articleHeader, expectedTitle);
        await this.shouldContainText(articlePageLocators.articleBodyParagraph, expectedBody);
    }
}