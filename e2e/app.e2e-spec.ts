import { IotPage } from './app.po';

describe('iot App', function() {
  let page: IotPage;

  beforeEach(() => {
    page = new IotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
