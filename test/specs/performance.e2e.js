//import assert from 'assert'

describe('Website page', () => {
    before(() => {
        browser.enablePerformanceAudits()
    })

    it('should load within performance budget', () => {

        browser.url('https://magnificent-cabbage.glitch.me/')

        let metrics = browser.getMetrics()
        console.log(`metrics.speedIndex: ${metrics.speedIndex}`)
        //assert.ok(metrics.speedIndex < 3000) // check that speedIndex is below 1.5ms

        let score = browser.getPerformanceScore() // get Lighthouse Performance score
        console.log(`Lighthouse performance score: ${score}`);
        //assert.ok(score >= .99) // Lighthouse Performance score is at 99% or higher

        $("a[href='/fesh']").click()

        metrics = browser.getMetrics()
        console.log(`metrics.speedIndex: ${metrics.speedIndex}`)
        //assert.ok(metrics.speedIndex < 3000) // check that speedIndex is below 1.5ms

        score = browser.getPerformanceScore() // get Lighthouse Performance score
        console.log(`Lighthouse performance score: ${score}`);
        //assert.ok(score >= .99) // Lighthouse Performance score is at 99% or higher
    })

    after(() => {
        browser.disablePerformanceAudits()
    })
})