import styled from 'styled-components';

const containerPadding = 40;
const headerHeight = 75;
const filterHeight = 120;
export const TableContainer = styled.div`
  position: relative;
  z-index: 0;

  //min-width: max-content;
  max-width: 100%;
  max-height: calc(100vh - ${containerPadding * 2 + headerHeight + filterHeight}px);
  border: 1px solid ${({ theme }) => theme.contrastTan};
  border-radius: 8px;

  overflow: auto;
`;
