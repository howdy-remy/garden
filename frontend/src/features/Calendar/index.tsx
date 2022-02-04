import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import { GilroyHeader, GilroySmallText } from '../../common/typography.styles';
import { Cell, ContentContainer, Row } from './index.styles';
import { IPlant } from '../../apiTypes/Plant';
import useFetchWeather from './useFetchWeather';
import getTemperatureStatsByMonth from './getTemperatureStatsByMonth';
import { TTempsByMonth } from './types';
import Chart from './Chart';

interface IWeather {
  attributes: string;
  datatype: string;
  date: string;
  station: string;
  value: number;
}

function Calendar() {
  // eslint-disable-next-line
  // @ts-ignore
  const [weather, setWeather] = useState<IWeather[]>([]);
  const [temperatureStatsByMonth, setTemperatureStatsByMonth] = useState<TTempsByMonth>([]);
  const user = localStorage.getItem('user') || '';
  const userEmail = JSON.parse(user).email;

  const { loadingUser, fetchWeather } = useFetchWeather();

  useEffect(() => {
    if (loadingUser) return;
    const getWeatherData = async () => {
      const response = await fetch(`https://www.ncdc.noaa.gov/cdo-web/api/v2/datatypes?datasetid=GSOM&limit=100`, {
        headers: new Headers({
          Token: 'kLWqzArygBVySsSGaRtxJFQOEsPNMMQm',
        }),
      });
      debugger;
      const weather = await fetchWeather();
      setWeather(weather.results);
      setTemperatureStatsByMonth(getTemperatureStatsByMonth(weather.results));
    };
    getWeatherData();
  }, [loadingUser]);

  const PLANTS_FOR_USER = gql`
    query PlantsForUser($email: String!) {
      PlantsForUser(email: $email) {
        id
        name
        variety
        height
        spread
        users {
          email
          id
        }
      }
    }
  `;

  const { data, refetch } = useQuery(PLANTS_FOR_USER, {
    variables: {
      email: userEmail,
    },
  });
  return (
    <>
      <ContentContainer>
        <GilroyHeader withSpaceAfter>Calendar</GilroyHeader>

        <Chart temperatureStatsByMonth={temperatureStatsByMonth} />

        <Row>
          <Cell>
            <GilroySmallText>Plants</GilroySmallText>
          </Cell>
          <Cell>
            <GilroySmallText>Jan</GilroySmallText>
          </Cell>
          <Cell>
            <GilroySmallText>Feb</GilroySmallText>
          </Cell>
          <Cell>
            <GilroySmallText>Mar</GilroySmallText>
          </Cell>
          <Cell>
            <GilroySmallText>Apr</GilroySmallText>
          </Cell>
          <Cell>
            <GilroySmallText>May</GilroySmallText>
          </Cell>
          <Cell>
            <GilroySmallText>Jun</GilroySmallText>
          </Cell>
          <Cell>
            <GilroySmallText>Jul</GilroySmallText>
          </Cell>
          <Cell>
            <GilroySmallText>Aug</GilroySmallText>
          </Cell>
          <Cell>
            <GilroySmallText>Sep</GilroySmallText>
          </Cell>
          <Cell>
            <GilroySmallText>Oct</GilroySmallText>
          </Cell>
          <Cell>
            <GilroySmallText>Nov</GilroySmallText>
          </Cell>
          <Cell>
            <GilroySmallText>Dec</GilroySmallText>
          </Cell>
        </Row>
        {data && data.PlantsForUser.map((plant: IPlant) => <Row key={plant.id}>{plant.name}</Row>)}
      </ContentContainer>
    </>
  );
}

export default Calendar;
