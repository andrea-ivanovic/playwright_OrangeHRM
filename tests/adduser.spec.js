const { test, expect } = require('@playwright/test');
import { Login } from '../pages/login';
import { AddUser } from '../pages/addUser';

test.describe('PIM page', async () => {
  test('An a new user can be created', async ({ page }) => {
    await page.goto('/');
    const login = new Login(page);
    login.login('Admin', 'admin123');

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
    const addUser = new AddUser(page);

    await addUser.buttonAdd.click();
    await addUser.firstName.fill('John');
    await addUser.lastName.fill('The Tester');
    await addUser.detailsToggle.click();

    await addUser.username.fill('john_tester' + Math.random());
    await addUser.password.fill('123456a');
    await addUser.confirmPassword.fill('123456a');
    await addUser.saveButton.click();

    await expect(addUser.successMessage).toBeVisible();
  });
});
