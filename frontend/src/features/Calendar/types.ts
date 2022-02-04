export type TData = {
  attributes: string;
  datatype: string;
  date: string;
  station: string;
  value: number;
};

export type TTemps = {
  [key: string]: any;
  EMXT: { average: number; data: number[] };
  TMAX: { average: number; data: number[] };
  TAVG: { average: number; data: number[] };
  TMIN: { average: number; data: number[] };
  EMNT: { average: number; data: number[] };
};

export type TChartPoint = {
  x: string;
  y: number;
};

export type TTempsByMonth = TTemps[];
