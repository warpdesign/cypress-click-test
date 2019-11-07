describe('click tests', () => {
    it('click on button should show message', () => {
        cy.visit('http://localhost:8081');

        cy.contains('Click me!')
        .click();

        cy.get('#log')
        .should('contain', 'clicked!');
    });

    it('click on left of button should show message', () => {
        cy.visit('http://localhost:8081');
        
        cy.contains('Click me!')
        .click('left');

        cy.get('#log')
        .should('contain', 'clicked!');
    });

    it('click at (10, 4) of button should show message', () => {
        cy.visit('http://localhost:8081');
        
        cy.contains('Click me!')
        .click(20, 1);

        cy.get('#log')
        .should('contain', 'clicked!');
    });    
});