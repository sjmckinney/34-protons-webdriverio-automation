describe('My mocked response', () => {
    it('Mock should return canned todo items', async () => {
        const todoBackendAppUrl = 'https://todo-backend-express-knex.herokuapp.com/'
        const mock = await browser.mock(todoBackendAppUrl)
        const completedTodo = 'Injected completed Todo'
        const notCompletedTodo = 'Injected (non) completed Todo'

        await mock.respond([{
            title: notCompletedTodo,
            order: null,
            completed: false
        }, {
            title: completedTodo,
            order: null,
            completed: true
        }])
        
        await browser.url(`https://todobackend.com/client/index.html?${todoBackendAppUrl}`)
    
        await (await browser.$('#todo-list li')).waitForExist({ timeout: 20000, interval: 1000 })
        let listItems = (await Promise.all((await browser.$$('#todo-list li'))))

        await expect(listItems[0]).toHaveText(notCompletedTodo);
        await expect(listItems[1]).toHaveText(completedTodo);
    })
}); 
