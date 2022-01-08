import styled from 'styled-components';

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
  min-width: 100vw;
  min-height: 100vh;
  padding-top: 40px;
  background: ${({ theme }) => theme.background};
`;

export const PageNav = styled.nav`
  width: 100%;
  padding-left: 30px;
`;
