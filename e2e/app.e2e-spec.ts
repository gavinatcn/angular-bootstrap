import { ReganfundWebsitePage } from './app.po';

describe('reganfund-website App', function() {
  let page: ReganfundWebsitePage;

  beforeEach(() => {
    page = new ReganfundWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
