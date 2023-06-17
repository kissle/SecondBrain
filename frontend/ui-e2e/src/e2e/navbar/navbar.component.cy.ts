describe('ui', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=navbarcomponent--primary&args=brand_name:Brand+Name;'
    )
  );
  it('should render the component', () => {
    cy.get('frontend-navbar').should('exist');
  });
});
