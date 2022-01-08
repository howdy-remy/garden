import styled from 'styled-components';

export const TableContainer = styled.div`
  position: relative;
  z-index: 0;

  width: calc(100vw - 270px);
  height: calc(100vh - 40px);

  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
  box-shadow: 0px 0px 16px 0px hsla(192, 21%, 23%, 0.47);

  overflow: auto;
`;
