import styled, { css } from 'styled-components';
import { ReactNode } from 'react';
import { grid } from './utils/constants';
import { PH } from '../../apiTypes/Plant';

export const Container = styled.div`
  ${grid}

  width: min-content;
  min-height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.primary100};
  font-size: 24px;
`;

export const Cell = styled.div<{ key: string; leftPos?: number; children: ReactNode }>`
  display: grid;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  height: calc(100% - 16px);
  padding: 8px 15px;

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

export const Image = styled.img`
  height: 40px;
  width: 40px;
`;

// PH --------------------------------------------------------------------------
export const SoilPhContainer = styled.div`
  display: grid;
  grid-column-gap: 4px;
  grid-template-columns: 12px 12px 12px;

  width: 44px;
  height: 12px;
`;

export const SoilPh = styled.div<{ ph: PH }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme, ph }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: 2551
    return theme[PH[ph]];
  }};
`;

// SEASONS ---------------------------------------------------------------------
export const SeasonContainer = styled.div`
  display: grid;
  grid-row-gap: 4px;
`;

export const Season = styled.div<{ season: string }>`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 70px;
  border-radius: 4px;
  background-color: ${({ theme, season }) => theme[`${season.toLowerCase()}Bg`]};
  & > p {
    color: ${({ theme, season }) => theme[`${season.toLowerCase()}Fg`]};
  }
`;

// HARVEST ---------------------------------------------------------------------
export const HarvestContainer = styled.div`
  display: grid;
`;
