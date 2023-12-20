exports.Filters = class Filters {
  constructor(page) {
    this.page = page;

    this.tabRecruitment = page.getByRole('link', { name: 'Recruitment' });
    this.jobTitle = page.locator('.oxd-select-text').first();
    this.cto = page.getByRole('option', { name: 'Chief Technical Officer' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.noRecord = page.getByText('InfoNo Records Found×');
    this.tabVacancies = page.locator('li').filter({ hasText: 'Vacancies' });
    this.qaLead = page.getByRole('option', { name: 'QA Lead' });
    this.results = page.locator('.orangehrm-container');
  }
};
