const { pause, basePage } = require('../../app/ui');
const ui = require('../../app/ui');
const HomePage = require('../../app/objects/pages/homePage');

describe('HomePage tests', () => {


    it('should open the main page and verify the title', () => {
        ui.openUrl('');
        expect(HomePage.header.isDisplayed('logo')).toBeTrue();
        expect(ui.title).toBe(
            'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO'
        )
    }
    )
    it('check Get Started button', () => {
        expect(HomePage.getStartedBtn).toBeClickable();
        expect(HomePage.getStartedBtn.getText()).toBe('Get Started');
        expect(HomePage.getStartedBtn).toHaveHrefContaining('gettingstarted');

    });

    it('check Watch Talks button', () => {
        expect(HomePage.watchTalksBtn).toBeClickable();
        expect(HomePage.watchTalksBtn.getText()).toBe('Watch Talks');
        expect(HomePage.watchTalksBtn).toHaveHrefContaining('conferencemeetup-talks');

    });

    it('check Read the Book button', () => {
        expect(HomePage.readTheBookBtn).toBeClickable();
        expect(HomePage.readTheBookBtn.getText()).toBe('Read the Book');
        expect(HomePage.readTheBookBtn).toHaveHrefContaining('https://leanpub.com/webapp-testing-guidebook');

    });


    it('check Take The Course button', () => {
        expect(HomePage.takeTheCourseBtn).toBeClickable();
        expect(HomePage.takeTheCourseBtn.getText()).toBe('Take The Course');
        expect(HomePage.takeTheCourseBtn).toHaveHrefContaining('https://learn.webdriver.io');
    });

    it('check Support button', () => {
        expect(HomePage.supportBtn).toBeClickable();
        expect(HomePage.supportBtn.getText()).toBe('Support');
        expect(HomePage.supportBtn).toHaveHrefContaining('https://gitter.im/webdriverio/webdriverio');
    });

});

