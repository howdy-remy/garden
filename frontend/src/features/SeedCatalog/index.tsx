import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';

import { GilroyHeader } from '../../common/typography.styles';

import { columns, TPlant } from './constants';
import { TableContainer } from './index.styles';
import Row from './Row';
import Header from './Header';
import Filters from './Filters';
import magic from '../../common/magic';

function Table() {
  const PLANTS = gql`
    query {
      AllPlants {
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

  const { data } = useQuery(PLANTS);

  return (
    <>
      <GilroyHeader withSpaceAfter>Seed Catalog</GilroyHeader>
      <Filters />
      <TableContainer>
        {!!data && (
          <>
            <Header columns={columns} />
            {data.AllPlants.map((plant: TPlant) => (
              <Row plant={plant} columns={columns} key={plant.id} />
            ))}
          </>
        )}
      </TableContainer>
    </>
  );
}

export default Table;