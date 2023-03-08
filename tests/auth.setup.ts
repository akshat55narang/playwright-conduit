import { test as setup } from '@playwright/test';
import { SignInPage } from '../pages/SignInPage';
import storageStates from '../constants/storageStatePaths'


setup('authenticate', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.open();
  await signInPage.loginWithValidUser();
  
  await page.context().storageState({ path: storageStates.signedInState });
});
