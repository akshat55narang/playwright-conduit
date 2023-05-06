import storageStatePaths from '../constants/storageStatePaths';
import { test } from '../fixtures/pageFixtures';
import { UserClient } from '../rest/UserClient';
test.use({ storageState: storageStatePaths.emptyStorageState});

test('should be able to login via valid user', async ({ signInPage }) => {
    const userClient = new UserClient();
    await userClient.createUserIfNotExisting();
    await signInPage.loginWithValidUser();
});

test('should be able to login with invalid password', async ({ signInPage }) => {
    await signInPage.loginWithInValidUser('DX119311111111@testacc.com', Math.random().toString(30));
});

test('should be able to login with invalid email', async ({ signInPage }) => {
    await signInPage.loginWithInValidUser(`${Math.random().toString(30)}@test.com`, Math.random().toString(30));
});
