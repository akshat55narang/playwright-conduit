import { test } from '../fixtures/pageFixtures';

test('should be able to login via valid user', async ({ signInPage }) => {
    await signInPage.loginUser();
});