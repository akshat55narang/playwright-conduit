import { Page } from "@playwright/test";
import routes from "../fixtures/routes";
import articleEditorPageLocators from "../locators/articleEditorPageLocators";
import articlePageLocators from "../locators/articlePageLocators";
import loggedInUserPageLocators from "../locators/loggedInUserPageLocators";
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

    async editArticleUsingBannerButton() {
        await this.clickByLocator(articlePageLocators.bannerEditArticleLink);
        await this.shouldBeVisible(articleEditorPageLocators.articleTitleInput);
    }

    async editArticleUsingMainViewButton() {
        await this.clickByLocator(articlePageLocators.bannerEditArticleLink);
        await this.shouldBeVisible(articleEditorPageLocators.articleTitleInput);
    }

    async deleteArticleUsingBannerDeleteButton() {
        await this.clickByLocator(articlePageLocators.bannerDeleteArticleButton);
        await this.shouldBeVisible(loggedInUserPageLocators.yourFeedLink);
    }

    async deleteArticleUsingMainViewDeleteButton() {
        await this.clickByLocator(articlePageLocators.bannerDeleteArticleButton);
        await this.shouldBeVisible(loggedInUserPageLocators.yourFeedLink);
    }

    async articleShouldHaveTitleAndBody(expectedTitle: string, expectedBody) {
        await this.shouldContainText(articlePageLocators.articleHeader, expectedTitle);
        await this.shouldContainText(articlePageLocators.articleBodyParagraph, expectedBody);
    }

    async addComment(comment: string) {
        await this.sendTextToField(articlePageLocators.commentTextArea, comment);
        await this.clickByLocator(articlePageLocators.postCommentButton);
        await this.shouldBeVisible(`${articlePageLocators.commentParagraph}[text()="${comment}"]`);
    }
}