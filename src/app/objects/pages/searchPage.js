const Page = require("./page");
const Header = require('../controls/header');

class SearchPage extends Page {
    header = new Header();
    openUrl() {
        super.openUrl('https://webdriver.io/search/');
    }

}


module.exports = new SearchPage();