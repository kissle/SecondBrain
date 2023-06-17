describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=contentcomponent--primary'));
  it('should render the component', () => {
    cy.get('frontend-content').should('exist');
  });
});
