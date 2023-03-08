import { test as setup } from '@playwright/test';
import { SignInPage } from '../pages/SignInPage';

const authFile = 'playwright/.auth/user.json';


setup('authenticate', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.open();
  await signInPage.loginWithValidUser();
  
  await page.context().storageState({ path: authFile });

  await page.close();
});
