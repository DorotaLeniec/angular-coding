import { AngularLivecodingPage } from './app.po';

describe('angular-livecoding App', function() {
  let page: AngularLivecodingPage;

  beforeEach(() => {
    page = new AngularLivecodingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
