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
    

    async enterArticleDetailsAndPublish(title, description = 'Test Description', body = 'Article Body') {
        await this.sendTextToField(articleEditorPageLocators.articleTitleInput, title);
        await this.sendTextToField(articleEditorPageLocators.articleDescriptionInput, description);
        await this.sendTextToField(articleEditorPageLocators.articleBodyTextArea, body);
        await this.clickByLocator(articleEditorPageLocators.publishArticleButton);
        await this.shouldBeVisible(articlePageLocators.articleHeader);
    }

}