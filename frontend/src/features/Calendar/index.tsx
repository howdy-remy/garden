import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import { GilroyHeader, GilroySmallText } from '../../common/typography.styles';
import { Cell, ContentContainer, Row } from './index.styles';
import { IPlant } from '../../apiTypes/Plant';
import { useEffect } from 'react';
import useWeather from './useWeather';

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
  const user = localStorage.getItem('user') || '';
  const userEmail = JSON.parse(user).email;

  const { loadingUser, fetchWeather } = useWeather();

  useEffect(() => {
    if (weather?.length || loadingUser) return;
    const getWeatherData = async () => {
      const weather = await fetchWeather();
      debugger;
      setWeather(weather.results);
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
        {weather && (
          <>
            {weather.map(({ value, date, station }: IWeather) => (
              <p key={`${date}-${station}`}>{value}</p>
            ))}
          </>
        )}
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
