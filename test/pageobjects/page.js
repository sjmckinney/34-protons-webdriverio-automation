/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        //baseUrl is specified in the wdio config
        //file :https://the-internet.herokuapp.com
        return browser.url(`/${path}`)  
    }
    /**
    * Opens the absoulute url of a pageassuming
    * starts with known protocol i.e. https
    * @param url url of the page
    */
    get(url) {
        return browser.url(url)
    }
}
