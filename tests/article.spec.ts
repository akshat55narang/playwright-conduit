import { expect, test } from '../fixtures/pageFixtures';
import { ArticleApi } from '../rest/ArticleApi';

const articleApi = new ArticleApi();

test('should be able to create article', async ({ articleEditorPage, loggedInUserPage }) => {
    const title = 'Create_Article_using_UI';
    await articleApi.deleteArticleByTitle(title);

    await loggedInUserPage.clickNewArticleButton();
    await articleEditorPage.enterArticleDetailsAndPublish(title);
});

test('should be able to edit an article usin Edit button in banner', async ({ articlePage, articleEditorPage }) => {
    const title = 'Edit_Article_UI_Banner';
    const updatedTitle = `${title}_updated`;
    await articleApi.deleteArticleByTitle(updatedTitle);

    const articleSlug = await articleApi.createArticleIfNotExisting(title);
    const updatedBody = 'Updated_body';

    await articlePage.open(articleSlug);
    await articlePage.editArticleUsingBannerButton();
    await articleEditorPage.enterArticleDetailsAndPublish(updatedTitle, 'Updated_Description', updatedBody);
    await articlePage.articleShouldHaveTitleAndBody(updatedTitle, updatedBody);
});

test('should be able to edit an article usin Edit button in main view', async ({ articlePage, articleEditorPage }) => {
    const title = 'Edit_Article_UI_Main_View';
    const updatedTitle = `${title}_updated`;
    await articleApi.deleteArticleByTitle(updatedTitle);

    const articleSlug = await articleApi.createArticleIfNotExisting(title);
    const updatedBody = 'Updated_body';

    await articlePage.open(articleSlug);
    await articlePage.editArticleUsingMainViewButton();
    await articleEditorPage.enterArticleDetailsAndPublish(updatedTitle, 'Updated_Description', updatedBody);
    await articlePage.articleShouldHaveTitleAndBody(updatedTitle, updatedBody);
});

test('should be able to delete an article using Delete button in banner', async ({ articlePage }) => {
    const title = 'Delete_Article_UI_Banner';
    const articleSlug = await articleApi.createArticleIfNotExisting(title);

    await articlePage.open(articleSlug);
    await articlePage.deleteArticleUsingBannerDeleteButton();
    await expect(await articleApi.getArticleByTitle(title)).toBeUndefined();
});

test('should be able to delete an article using Delete button in main view', async ({ articlePage }) => {
    const title = 'Delete_Article_UI_Main_View';
    const articleSlug = await articleApi.createArticleIfNotExisting(title);

    await articlePage.open(articleSlug);
    await articlePage.deleteArticleUsingMainViewDeleteButton();
    await expect(await articleApi.getArticleByTitle(title)).toBeUndefined();
});

test('should be able to add comment to an article', async ({ articlePage }) => {
    const title = 'Add_Comment_to_Article_UI';
    await articleApi.deleteArticleByTitle('Add_Comment_to_Article_UI');

    const articleSlug = await articleApi.createArticleIfNotExisting(title);

    await articlePage.open(articleSlug);
    await articlePage.addComment('Kboing!!');
});

test.afterAll(async () => {
    await articleApi.deleteArticlesByTitle([
        'Create_Article_using_UI',
        'Edit_Article_UI_Banner_updated',
        'Edit_Article_UI_Main_View_updated',
        'Delete_Article_UI_Banner',
        'Delete_Article_UI_Main_View',
        'Add_Comment_to_Article_UI'
    ]);
    console.log('Cleaned up test data for article.spec.ts !!');
});