import '@testing-library/jest-dom';

// describe('Page', () => {
//   test('renders an element with "Get started by" text', () => {
//     render(<Page />);
//     const element = screen.getByText(/get started by/i); // 대소문자 무시, 텍스트 포함
//     expect(element).toBeInTheDocument();
//   });

//   test('renders "Docs" anchor with correct href attribute', () => {
//     render(<Page />);
//     const docsLink = screen.getByRole('link', { name: /docs/i }); // "Docs"라는 텍스트를 가진 앵커 요소를 찾음
//     expect(docsLink).toBeInTheDocument(); // 앵커 요소가 DOM에 존재하는지 확인
//     expect(docsLink).toHaveAttribute(
//       'href',
//       'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
//     ); // 올바른 href 속성을 가지고 있는지 검증
//   });
// });

describe('Homepage Tests', () => {
  beforeEach(() => {
    // 기본 경로로 이동
    cy.visit('/');
  });

  it('should display "Get started by" text on the homepage', () => {
    // "Get started by" 텍스트가 존재하는지 확인
    cy.contains('Get started by').should('exist');
  });

  it('should display "Docs" anchor with correct href', () => {
    // "Docs"라는 텍스트를 가진 앵커 태그를 찾고 href 속성을 검증
    cy.get('a')
      .contains('Docs')
      .should(
        'have.attr',
        'href',
        'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
      );
  });
});
