import React from 'react';
import { TTempsByMonth } from './types';
import { Axis, Grid, LineSeries, XYChart, Tooltip } from '@visx/xychart';

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

  return (
    <XYChart height={300} xScale={{ type: 'band' }} yScale={{ type: 'linear' }}>
      <Axis orientation="bottom" />
      <Axis orientation="left" />
      <Grid columns={false} numTicks={4} />
      <LineSeries dataKey="EMXT" data={chartDataEMXT} {...accessors} />
      <LineSeries dataKey="TMAX" data={chartDataTMAX} {...accessors} />
      <LineSeries dataKey="TAVG" data={chartDataTAVG} {...accessors} />
      <LineSeries dataKey="TMIN" data={chartDataTMIN} {...accessors} />
      <LineSeries dataKey="EMNT" data={chartDataEMNT} {...accessors} />

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
