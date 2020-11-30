import Page from '../pageobjects/page.js';
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
const HomePage = new Page();

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
    it('should get get text from element specified by tag', () => {
        HomePage.open('');
        let h2 = $('h2');
        expect(h2).toHaveTextContaining(
            'Examples'
        );
        console.log(`Text in h2 tags is ${h2.getText()}`);
    });

    it('should get get text from element specified by id', () => {
        HomePage.open('');
        let pageFooter = $('#page-footer');
        expect(pageFooter).toHaveTextContaining(
            'Elemental Selenium'
        );
        console.log(`Text in the element with id 'page-footer' is ${pageFooter.getText()}`);
    });

    it('should get get text from element specified by class', () => {
        HomePage.open('');
        let heading = $('.heading');
        expect(heading).toHaveTextContaining(
            'Welcome to the-internet'
        );
        console.log(`Text in the element with class 'header' is ${heading.getText()}`);
    });
});


