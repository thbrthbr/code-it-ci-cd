// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io');
//   });
// });
describe('Homepage Tests', () => {
  beforeEach(() => {
    // 기본 경로로 이동
    cy.visit('http://localhost:3002/');
  });

  it('should display "Get started by" text on the homepage', () => {
    // "Get started by" 텍스트가 존재하는지 확인
    cy.contains('Get started by').should('exist');
  });

  it('should display "Docs" anchor with correct href', () => {
    cy.get('a', { timeout: 15000 }) // 15초 대기
      .contains(/Docs/i)
      .should(
        'have.attr',
        'href',
        'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
      );
  });
});
