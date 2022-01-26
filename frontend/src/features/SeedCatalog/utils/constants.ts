import { css } from 'styled-components';

export type TColumn = { key: string; display: string; leftPos?: number };
export const columns = [
  { key: 'src', display: 'Name', leftPos: 0 },
  { key: 'name', display: '', leftPos: 70 },
  { key: 'variety', display: 'Variety', leftPos: 300 },
  { key: 'type', display: 'Type' },
  { key: 'sunExposure', display: 'Sun' },
  { key: 'soilPh', display: 'Soil' },
  { key: 'bloomSeason', display: 'Seasons' },
  { key: 'daysToMaturity', display: 'Harvest in' },
  { key: 'sowMethod', display: 'Sow Method' },
  { key: 'spacing', display: 'Spacing' },
  { key: 'height', display: 'Height' },
  { key: 'spread', display: 'Spread' },
];

export const grid = css`
  display: grid;
  grid-template-columns: 70px 230px minmax(230px, 1fr) repeat(5, 110px) 130px 130px 75px 75px;
  align-items: center;
`;
