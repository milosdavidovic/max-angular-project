import { MaxAngularProjectPage } from './app.po';

describe('max-angular-project App', () => {
  let page: MaxAngularProjectPage;

  beforeEach(() => {
    page = new MaxAngularProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
