const Header = require('../controls/header');

class Page  {
header = new Header();

openUrl(path) {
    browser.url(path);
}

}

module.exports = Page;