import { expect, test } from '../fixtures/pageFixtures';
import { LoggedInUserPage } from '../pages/LoggedInUserPage';
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
    const updatedTitle = `${title}_updated`;
    await articleApi.deleteArticleByTitle(updatedTitle);

    const articleSlug = await articleApi.createArticleIfNotExisting(title);
    const updatedBody = 'Updated_body';
    await articlePage.open(articleSlug);
    await articlePage.clickBannerEditArticleButton();
    await articleEditorPage.enterArticleDetailsAndPublish(updatedTitle, 'Updated_Description', updatedBody);
    await articlePage.articleShouldHaveTitleAndBody(updatedTitle, updatedBody);
});

test('should be able to delete an article', async({ articlePage, loggedInUserPage }) => {
    const title = 'Delete_Article_using_UI';
    const articleSlug = await articleApi.createArticleIfNotExisting(title);

    await articlePage.open(articleSlug);
    await articlePage.deleteArticleUsingBannerDeleteButton();
    await expect(await articleApi.getArticleByTitle(title)).toBeUndefined();
});