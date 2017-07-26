import { browser, by, element } from 'protractor';

export class PortfolioPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root .mdl-layout-title')).getText();
  }

  getSectionText() {
    return element(by.css('app-root h4')).getText();
  }

  getNavigationLinks() {
    return element.all(by.css('app-root .mdl-navigation a'));
  }

  getStockInput() {
    return element.all(by.css('app-root #addStock'));
  }

  getStockList() {
    return browser.wait(() => element.all(by.css('app-root .stocks li')));
  }
}
