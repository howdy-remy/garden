import React from 'react';
import { TTempsByMonth } from './types';
import { Axis, Grid, AreaSeries, AreaStack, XYChart, Tooltip, buildChartTheme } from '@visx/xychart';
import theme from '../../common/theme';

const Chart = ({ temperatureStatsByMonth }: { temperatureStatsByMonth: TTempsByMonth }) => {
  const accessors = {
    xAccessor: (d: any) => d.x,
    yAccessor: (d: any) => d.y,
  };
  const monthShort = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const convertToChartData = (dataKey: string) =>
    temperatureStatsByMonth.map((data, m) => ({
      x: monthShort[m],
      y: data[dataKey].average.toFixed(0),
    }));

  const chartDataEMXT = convertToChartData('EMXT');
  const chartDataTMAX = convertToChartData('TMAX');
  const chartDataTAVG = convertToChartData('TAVG');
  const chartDataTMIN = convertToChartData('TMIN');
  const chartDataEMNT = convertToChartData('EMNT');

  const chartTheme = buildChartTheme({
    backgroundColor: theme.primary100,
    colors: [theme.accent400, theme.accent700, theme.accent800, theme.primary100],
    gridColor: theme.primary300,
    gridColorDark: theme.primary300,
    tickLength: 10,
  });

  return (
    <XYChart height={200} xScale={{ type: 'band' }} yScale={{ type: 'linear' }} theme={chartTheme}>
      <Axis orientation="bottom" label="months" />
      <Axis orientation="left" label="Temperature (Fº)" />
      <Grid columns={false} numTicks={5} />

      <AreaSeries dataKey="EMXT" data={chartDataEMXT} {...accessors} opacity={0.4} />
      <AreaSeries dataKey="TMAX" data={chartDataTMAX} {...accessors} opacity={0.4} />
      <AreaSeries dataKey="TMIN" data={chartDataTMIN} {...accessors} opacity={0.4} />
      <AreaSeries dataKey="EMNT" data={chartDataEMNT} {...accessors} />

      <Tooltip
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair
        showSeriesGlyphs
        renderTooltip={({ tooltipData, colorScale }) =>
          colorScale &&
          tooltipData?.nearestDatum && (
            <div>
              <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>{tooltipData.nearestDatum.key}</div>
              {accessors.xAccessor(tooltipData.nearestDatum.datum)}
              {', '}
              {accessors.yAccessor(tooltipData.nearestDatum.datum)}
            </div>
          )
        }
      />
    </XYChart>
  );
};

export default Chart;
