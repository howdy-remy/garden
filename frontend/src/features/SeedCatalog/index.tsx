import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { GilroyHeader } from '../../common/typography.styles';

import { columns, IPlant } from './constants';
import { TableContainer } from './index.styles';
import Row from './Row';
import Header from './Header';
import Filters, { TFilters } from './Filters';
import magic from '../../common/magic';
import { useState } from 'react';

function Table() {
  const [filters, setFilters] = useState<TFilters>({
    name: undefined,
  });

  const PLANTS = gql`
    query AllPlants($filterInput: PlantInputFilter) {
      AllPlants(input: $filterInput) {
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

  const { data, refetch } = useQuery(PLANTS);

  const filterPlants = () => refetch({ filterInput: { ...filters } });
  return (
    <>
      <GilroyHeader withSpaceAfter withStickyLeft>
        Seed Catalog
      </GilroyHeader>
      <Filters filters={filters} setFilters={setFilters} filterAction={filterPlants} />
      <TableContainer>
        {!!data && (
          <>
            <Header columns={columns} />
            {data.AllPlants.map((plant: IPlant) => (
              <Row plant={plant} columns={columns} key={plant.id} />
            ))}
          </>
        )}
      </TableContainer>
    </>
  );
}

export default Table;
