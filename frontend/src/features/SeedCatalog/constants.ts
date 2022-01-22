import { css } from 'styled-components';

export enum PH {
  SLIGHTLY_ACIDIC = 'slightlyAcidic',
  NEUTRAL = 'neutral',
  SLIGHTLY_ALKALINE = 'slightlyAlkaline',
}

export type TPlant = {
  id: number;
  name: string;
  variety: string;
  scientificName: string;
  type: string[];
  lifecycle: string[];
  sunExposure: string[];
  soilPh: PH[];
  bloomSeason: string[];
  daysToMaturity: string;
  yield: string;
  sowMethod: string;
  plantingNotes: string;
  spacing: string;
  height: string;
  spread: string;
  fruitSize: string;
  hardinessZones: number[];
};

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
