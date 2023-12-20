const { test, expect } = require('@playwright/test');
import { Login } from '../pages/login';

test.describe('Login page', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('An existing user can login', async ({ page }) => {
    const login = new Login(page);

    await login.username.fill('Admin');
    await login.password.fill('admin123');
    await login.button.click();

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(login.title).toBeVisible();
  });

  test('An error is present if credentials aren\t t valid', async ({ page }) => {
    const login = new Login(page);

    await login.username.fill('test');
    await login.password.fill('test');
    await login.button.click();

    await expect(login.alertError).toBeVisible();
  });
});
