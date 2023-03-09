import { test } from '../fixtures/pageFixtures';
import { ArticleApi } from '../rest/ArticleApi';

test('should be able to create article', async({ articleEditorPage }) => {
    const articleApi = new ArticleApi();
    await articleApi.deleteArticleByTitle('Creating new article');
    await articleEditorPage.createArticle();
});