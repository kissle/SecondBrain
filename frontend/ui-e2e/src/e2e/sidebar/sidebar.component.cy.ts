describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sidebarcomponent--primary'));
  it('should render the component', () => {
    cy.get('frontend-sidebar').should('exist');
  });
});
