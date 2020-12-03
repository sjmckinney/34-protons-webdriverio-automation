import DemoPage from '../pageobjects/demo.page.js'

describe('Series of tests based on my website', () => {
    it('should be able to select option', () => {
        DemoPage.get();
        expect(true).toBeTruthy();
    })
})