const { expect } = require('@playwright/test');
exports.AddUser = class AddUser {
  constructor(page) {
    this.page = page;

    this.buttonAdd = page.getByRole('button', { name: ' Add' });
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.detailsToggle = page.locator('form span');
    this.username = page.locator(
      'div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input'
    );
    this.password = page.locator('input[type="password"]').first();
    this.confirmPassword = page.locator('input[type="password"]').last();
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.successMessage = page.getByText('SuccessSuccessfully Saved');
  }
};

//.getByRole('textbox').nth(3)
