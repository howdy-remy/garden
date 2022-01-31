import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { GilroyHeader } from '../../common/typography.styles';
import Bed from './Bed';
import { ContentContainer } from './index.styles';
import Seeds from './Seeds';

function GardenBeds() {
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
        <div>
          <GilroyHeader withSpaceAfter>Garden Beds</GilroyHeader>
          <Bed />
          <Bed />
          <Bed />
        </div>
        <Seeds plants={data?.PlantsForUser} />
      </ContentContainer>
    </>
  );
}

export default GardenBeds;
