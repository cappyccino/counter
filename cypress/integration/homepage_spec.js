describe('the Counter', () => {
    it('can be incremented', () => {
        cy.visit('localhost:3000')
        cy.contains('Counter: 0')
    });
});