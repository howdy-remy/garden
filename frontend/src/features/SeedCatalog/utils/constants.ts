import { css } from 'styled-components';

export type TColumn = { key: string; display: string; leftPos?: number };
export const columns = [
  { key: 'src', display: 'Name', leftPos: 0 },
  { key: 'name', display: '', leftPos: 70 },
  { key: 'variety', display: 'Variety', leftPos: 370 },
  { key: 'ease', display: 'Difficulty' },
  { key: 'sunlight', display: 'Sun' },
  { key: 'ph', display: 'PH' },
  { key: 'season', display: 'Season' },
  { key: 'shape', display: 'Shape' },
  { key: 'height', display: 'Height' },
  { key: 'spread', display: 'Spread' },
];

export const grid = css`
  display: grid;
  grid-template-columns: 70px minmax(300px, 1fr) repeat(8, 100px);
  align-items: center;
`;
