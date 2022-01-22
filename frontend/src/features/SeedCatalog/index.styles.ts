import styled from 'styled-components';

export const TableContainer = styled.div`
  position: relative;
  z-index: 0;

  min-width: max-content;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.contrastTan};
  border-radius: 8px;

  overflow: auto;
`;
