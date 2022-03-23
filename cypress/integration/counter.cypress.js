describe('the Counter', () => {
    it('can be incremented and decremented', () => {
        cy.visit('localhost:3000')
        cy.contains('Counter: 0')

        increment()
        cy.contains('Counter: 1')

        increment()
        cy.contains('Counter: 2')

        decrement()
        cy.contains('Counter: 1')

        decrement()
        cy.contains('Counter: 0')

        decrement()
        cy.contains('Counter: 0')
    });
})

const increment = () => cy.contains('increment').click()
const decrement = () => cy.contains('decrement').click()
