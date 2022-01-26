export enum PH {
  SLIGHTLY_ACIDIC = 'slightlyAcidic',
  NEUTRAL = 'neutral',
  SLIGHTLY_ALKALINE = 'slightlyAlkaline',
}

export interface IPlant {
  [key: string]: any;
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
  users: { id: number; email: string }[];
}
