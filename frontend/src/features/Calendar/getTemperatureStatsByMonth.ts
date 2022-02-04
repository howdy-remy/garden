import { TData, TTemps, TTempsByMonth } from './types';
const average = (arr: number[]) => arr.reduce((p, c) => p + c, 0) / arr.length;

export default (data: TData[]) => {
  const temperatureStatsByMonth: TTempsByMonth = Array.from(Array(12)).map(() => ({
    TMIN: { average: 0, data: [] },
    TMAX: { average: 0, data: [] },
    TAVG: { average: 0, data: [] },
    EMNT: { average: 0, data: [] },
    EMXT: { average: 0, data: [] },
  }));

  data.forEach((current: TData) => {
    const d = new Date(current.date); //converts the string into date object
    const m = +d.getMonth();
    temperatureStatsByMonth[m][current.datatype].data.push(current.value);
  });

  temperatureStatsByMonth.map((month) => {
    month.TAVG.average = average(month.TAVG.data);
    month.TMAX.average = Math.max(...month.TMAX.data);
    month.TMIN.average = Math.min(...month.TMIN.data);
    month.EMNT.average = Math.min(...month.EMNT.data);
    month.EMXT.average = Math.max(...month.EMXT.data);
  });

  debugger;
  return temperatureStatsByMonth;
};
