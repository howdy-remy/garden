import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Page from '../../common/Page';
import { TableContainer } from './index.styles';
import Row from './Row';
import Header from './Header';
import { columns, TPlant } from './constants';

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
      }
    }
  `;

  const { data } = useQuery(PLANTS);

  return (
    <Page>
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
    </Page>
  );
}

export default Table;
