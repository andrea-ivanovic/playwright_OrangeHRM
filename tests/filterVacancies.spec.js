const { test, expect } = require('@playwright/test');
import { Login } from '../pages/login';
import { Filters } from '../pages/filterVacancies';

test.describe('Recruitment page', async () => {
  test('An a new user can be created', async ({ page }) => {
    await page.goto('/');
    const login = new Login(page);
    login.login('Admin', 'admin123');
    const filters = new Filters(page);

    await filters.tabRecruitment.click();
    await filters.jobTitle.click();
    await filters.cto.click();
    await filters.searchButton.click();
    await expect(filters.noRecord).toBeVisible();

    await filters.tabVacancies.click();
    await filters.jobTitle.click();
    await filters.qaLead.click();
    await filters.searchButton.click();

    await expect(filters.results).toContainText('QA Lead');
  });
});
