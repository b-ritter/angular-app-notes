import { AngularAppNotesPage } from './app.po';

describe('angular-app-notes App', () => {
  let page: AngularAppNotesPage;

  beforeEach(() => {
    page = new AngularAppNotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
