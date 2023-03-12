import { test } from '../fixtures/pageFixtures';
import { ArticleApi } from '../rest/ArticleApi';

const articleApi = new ArticleApi();

test('should be able to create article', async({ articleEditorPage, loggedInUserPage }) => {
    const title = 'Create_Article_using_UI';
    await articleApi.deleteArticleByTitle(title);

    await loggedInUserPage.clickNewArticleButton();
    await articleEditorPage.enterArticleDetailsAndPublish(title);
});

test('should be able to edit an article', async({ articlePage, articleEditorPage }) => {
    const title = 'Edit_Article_using_UI';
    const updatedTitle = `Updated_${title}`;
    const updatedBody = 'Updated_body';
    await articleApi.deleteArticleByTitle(updatedTitle);
    const articleSlug = await articleApi.createArticleIfNotExisting(title);

    await articlePage.open(articleSlug);
    await articlePage.clickBannerEditArticleButton();
    await articleEditorPage.enterArticleDetailsAndPublish(updatedTitle, 'Updated_Description', updatedBody);
    await articlePage.articleShouldHaveTitlAndBody(updatedTitle, updatedBody);
});