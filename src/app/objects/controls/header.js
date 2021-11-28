const BaseObject = require("../baseObject");

class Header extends BaseObject {
    constructor() {
        super();
    }

    get logo() { return $('.navbar__logo') }
    get menuItems() { return $$('.navbar__items a')}
    get toggle(){return $('toggle_71bT toggle_3Zt9')}
    get searchBtn(){return $('.DocSearch')};
}

module.exports = Header;