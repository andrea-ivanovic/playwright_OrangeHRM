exports.Login = class Login {
  constructor(page) {
    this.page = page;

    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.button = page.getByRole('button', { name: 'Login' });
    this.title = page.getByRole('heading', { name: 'Dashboard' });
    this.alertError = page.getByText('Invalid credentials');
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.button.click();
  }
};
