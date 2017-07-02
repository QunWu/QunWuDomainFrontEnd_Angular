import { QunwudomainPage } from './app.po';

describe('qunwudomain App', () => {
  let page: QunwudomainPage;

  beforeEach(() => {
    page = new QunwudomainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
