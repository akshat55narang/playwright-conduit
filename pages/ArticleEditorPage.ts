import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { HeaderSection } from "./sections/HeaderSection";

export class ArticleEditorPage extends BasePage {
    readonly page: Page;
    readonly headerSection: HeaderSection;

    readonly articleTitleInput: Locator;
    readonly articleDescriptionInput: Locator;
    readonly articleBodyTextArea: Locator;
    readonly publishArticleButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.headerSection = new HeaderSection(page);

        this.articleTitleInput = page.getByPlaceholder('Article Title');
        this.articleDescriptionInput = page.getByPlaceholder("What's this article about?");
        this.articleBodyTextArea = page.getByPlaceholder('Write your article (in markdown)');
        this.publishArticleButton = page.getByRole('button',{name: 'Publish Article'});

    }

    async enterArticleDetailsAndPublish(title, description = 'Test Description', body = 'Article Body') {
        await this.articleTitleInput.fill(title);
        await this.articleDescriptionInput.fill(description);
        await this.articleBodyTextArea.fill(body);
        await this.publishArticleButton.click();
    }

}
