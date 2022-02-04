export type TData = {
  attributes: string;
  datatype: string;
  date: string;
  station: string;
  value: number;
};

export type TTemps = {
  [key: string]: any;
  TMIN: { average: number; data: number[] };
  TMAX: { average: number; data: number[] };
  TAVG: { average: number; data: number[] };
};

export type TTempsByMonth = TTemps[];
