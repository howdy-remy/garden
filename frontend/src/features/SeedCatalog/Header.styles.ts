import styled, { css } from 'styled-components';
import { ReactNode } from 'react';
import { grid } from './constants';

export const Container = styled.div`
  ${grid}
  position: sticky;
  top: 0;
  z-index: 10;

  min-width: max-content;
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.contrastTan};
`;

export const Cell = styled.div<{ key: string; leftPos?: number; children: ReactNode }>`
  display: grid;
  align-items: center;
  background-color: ${({ theme }) => theme.contrastTan};
  color: ${({ theme }) => theme.accent700};
  height: 30px;
  padding: 0 16px;

  ${({ leftPos }) => {
    return (
      (leftPos || leftPos === 0) &&
      css`
        position: sticky;
        left: ${leftPos}px;
      `
    );
  }}
`;
