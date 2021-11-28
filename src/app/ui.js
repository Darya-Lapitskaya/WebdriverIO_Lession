const Header = require("./objects/controls/header");
const SearchModal = require("./objects/controls/searchModal");
const Page = require("./objects/pages/page");
const HomePage = require("./objects/pages/homePage");
const header = require("./objects/controls/header");
//const SearchPage = require("./objects/pages/searchPage");

class Ui {
    page = new Page();

    openUrl(url) {
        browser.url(url);
    }

    getUrl() {
        return browser.getUrl();
    }
    get title() {
        return browser.getTitle();
    }

    pause(ms) {
        browser.pause(ms);
    }

}

module.exports = new Ui();