import { PortfolioPage } from './app.po';
import { Key, browser } from 'protractor';

describe('portfolio App', () => {
  let page: PortfolioPage;

  beforeEach(() => {
    page = new PortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Portfolio');
  });

  it('should have 3 links', () => {
    page.navigateTo();
    expect(page.getNavigationLinks().count()).toBe(3);
  });

  it('should navigate', () => {
    page.navigateTo();
    page.getNavigationLinks().get(1).click();
    expect(page.getSectionText()).toEqual('Built with');
  });
});
