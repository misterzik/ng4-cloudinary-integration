import { CloudinaryPage } from './app.po';

describe('cloudinary App', () => {
  let page: CloudinaryPage;

  beforeEach(() => {
    page = new CloudinaryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
