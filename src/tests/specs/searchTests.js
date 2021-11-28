const { pause, page } = require('../../app/ui');
const ui = require('../../app/ui');
const SearchModal = require('../../app/objects/controls/searchModal');
const SearchPage = require('../../app/objects/pages/searchPage');
const HomePage = require('../../app/objects/pages/homePage');

describe('Search tests', () => {

    it('should check search is clickable and modal is opened by clicking search field', () => {
        ui.openUrl('');
        expect(page.header.searchBtn).toBeClickable();
        page.header.searchBtn.click();
        expect(SearchModal.box).toBeDisplayed();
    });

    it('should check entering and keeping search criteria', () => {
        SearchModal.searchField.addValue('Item');
        expect(SearchModal.searchField).toHaveValue('Item');
    });


    it('should check modal if search has search results', () => {
        expect(SearchModal.sections.length > 0).toBeTruthy();
        SearchModal.sections.forEach(section => {
            expect(SearchModal.numberOfResultsPerSection(section) > 0).toBeTruthy();
        });
    })

    it('should navigate to new page by Search All link in the footer', () => {
        expect(SearchModal.seeAllLink).toBeClickable();
        expect(SearchModal.seeAllLinkHref).toContain('/search?q=');
        SearchModal.seeAllLink.click();
        expect(ui.getUrl()).toContain('https://webdriver.io/search?q=');
        expect(ui.title).toContain('Search results for');
    });

    it('should check placeholder if no results found', () => {
        page.header.searchBtn.click();
        expect(SearchModal.box).toBeDisplayed();
        SearchModal.searchField.addValue('Item123245678765432123456765432');
        expect(SearchModal.noResultsPlaceholder.getText()).toContain('No results for');
    });

    it('should open search page via Url', () => {

        SearchPage.openUrl();
        expect(ui.getUrl()).toContain('https://webdriver.io/search');
    })

    it('should click search result item', () => {
        ui.openUrl('');
        let initialUrl = ui.getUrl();
        page.header.searchBtn.click();
        SearchModal.searchField.addValue('Item');
        expect(SearchModal.firstSearchResult).toBeClickable();
        SearchModal.firstSearchResult.click();
        let finalUrl = ui.getUrl();
        expect(initialUrl === finalUrl).toBeFalse();

    })



});
