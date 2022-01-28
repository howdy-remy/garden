import styled from 'styled-components';

export const ContentContainer = styled.div`
  position: relative;
  z-index: 0;

  width: 100%;
  min-height: 100%;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(12, 60px);
`;

export const Cell = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  border-left: 1px dotted ${({ theme }) => theme.accent300};
  padding: 0 8px;
`;
