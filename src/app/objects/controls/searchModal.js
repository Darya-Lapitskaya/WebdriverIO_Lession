const BaseObject = require("../baseObject");

class SearchModal extends BaseObject {
    constructor() {
        super();
    }

    get box() { return $('.DocSearch-Modal'); }
    get searchField() { return $('#docsearch-input'); }
    // get modalContainer(){return $('.DocSearch-Dropdown-Container');}
    get sections() { return $('.DocSearch-Dropdown-Container').$$('#docsearch-list'); }
    get seeAllLinkHref() { return $('.DocSearch-Dropdown-Container').$('.DocSearch-HitsFooter').$('a').getAttribute('href'); }
    get seeAllLink() { return $('.DocSearch-Dropdown-Container').$('.DocSearch-HitsFooter').$('a'); }
    get noResultsPlaceholder() { return $('.DocSearch-Title'); }

    get sectionsNumber() {return this.sections.lenght()};

    get firstSearchResult(){return this.sections[0].$$('li')[0]};


    numberOfResultsPerSection(section){
        return section.$$('li').length;
    }
    
}


module.exports = new SearchModal();
// module.exports = SearchModal;