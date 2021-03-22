// Example taken from Sync mode vs async
// https://webdriver.io/docs/sync-vs-async.html

// 3rd-party library example
// https://www.npmjs.com/package/got#gotgeturl-options

//const { get } = require('got')

//Work around for ES6 module import where
//3rd party packages don't support it
import pkg from 'got';
const { get } = pkg;

describe('suite sync', () => {
    it('test sync',
    // make sure to remove `async` keyword otherwise function treated as async
    // and you have to await every browser call.
    // The same is applicable to hooks in `wdio.conf.js` as well.
    () => {
        browser.pause(500)

        // wrap 3rd-party library calls with `browser.call`
        const response = browser.call(() => get('https://cat-fact.herokuapp.com/facts/'))

        $('body').getSize() // You can chain functions in sync mode
    })

    it('using async function in sync mode',
    // If you have `@wdio/sync` installed and configured, it is still possible to use async functions.
    // However, in such case you have to await every browser/element call like in async mode, and this can
    // be confusing when other tests are sync, so we discourage mixing modes, but it is possible to do so.
    // The best practice in sync mode is to wrap anything async with `browser.call`.
    async () => {
        await browser.pause(500)

        const response = await get('https://cat-fact.herokuapp.com/facts/')

        const el = await $('body')

        console.log(`Element not awaited: ${el.getSize()}`)
        let size = await el.getSize()
        console.log(`Element awaited: ${JSON.stringify(size, null, 2)}`)
    })
})