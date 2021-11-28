const Page = require("./page");
const Header = require('../controls/header');

class HomePage extends Page {
    header = new Header();
    constructor() {
        super();
    }

    get getStartedBtn() {
        return $$('.buttons_1r9m>a')[0];
    }

    get watchTalksBtn() {
        return $$('.buttons_1r9m>a')[1];
    }

    get readTheBookBtn() {
        return $$('.buttons_1r9m>a')[2];
    }

    get takeTheCourseBtn() {
        return $$('.buttons_1r9m>a')[3];
    }

    get supportBtn() {
        return $$('.buttons_1r9m>a')[4];
    }

}
module.exports = new HomePage();