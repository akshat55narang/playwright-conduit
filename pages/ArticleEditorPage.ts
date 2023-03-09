import { Page } from "@playwright/test";
import articleEditorPageLocators from "../locators/articleEditorPageLocators";
import articlePageLocators from "../locators/articlePageLocators";
import { BasePage } from "./BasePage";

export class ArticleEditorPage extends BasePage {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    

    async createArticle() {
        await this.sendTextToField(articleEditorPageLocators.articleTitleInput, 'Creating new article');
        await this.sendTextToField(articleEditorPageLocators.articleDescriptionInput, 'Test Description');
        await this.sendTextToField(articleEditorPageLocators.articleBodyTextArea, 'Article Body');
        await this.clickByLocator(articleEditorPageLocators.publishArticleButton);
        await this.shouldBeVisible(articlePageLocators.articleHeader);
    }
}