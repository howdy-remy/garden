import styled from 'styled-components';

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  min-width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.accent100};
  color: ${({ theme }) => theme.primary900};
`;

export const PageNav = styled.nav`
  width: 100%;
  padding-left: 16px;
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 0;

  width: calc(100% - 80px);
  height: calc(100vh - 80px);
  padding: 40px;

  background-color: ${({ theme }) => theme.white};
  border-radius: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  overflow: auto;
`;
