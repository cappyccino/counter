describe('the Counter', () => {
    it('can be incremented', () => {
        cy.visit('localhost:3000')
        cy.contains('Counter: 0')

        increment()
        cy.contains('Counter: 1')

        increment()
        cy.contains('Counter: 2')
    });
});

const increment = () => cy.contains('increment').click()