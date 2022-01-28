import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { GilroyHeader, GilroySmallText } from '../../common/typography.styles';
import { Cell, ContentContainer, Row } from './index.styles';
import { IPlant } from '../../apiTypes/Plant';

function Calendar() {
  const PLANTS_FOR_USER = gql`
    query PlantsForUser($email: String!) {
      PlantsForUser(email: $email) {
        id
        name
        variety
        type
        sowMethod
        spacing
        height
        spread
        sunExposure
        soilPh
        bloomSeason
        daysToMaturity
        users {
          email
          id
        }
      }
    }
  `;

  const user = localStorage.getItem('user') || '';
  const userEmail = JSON.parse(user).email;

  const { data, refetch } = useQuery(PLANTS_FOR_USER, {
    variables: {
      email: userEmail,
    },
  });
  return (
    <>
      <ContentContainer>
        <GilroyHeader withSpaceAfter>Calendar</GilroyHeader>
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
