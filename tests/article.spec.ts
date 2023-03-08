import { test, expect } from '../fixtures/pageFixtures';

test('should be able to create article', async({ articleEditorPage }) => {
    await articleEditorPage.createArticle();
});