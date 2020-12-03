import Page from './page.js'
const _34ProtonsUrl = 'https://www.34protons.co.uk/demo_2_0/';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DemoPage extends Page {

    /**
     * overwrite specifc options to adapt it to page object
     */
    get () {
        return super.get(_34ProtonsUrl)
    }
}

export default new DemoPage();
