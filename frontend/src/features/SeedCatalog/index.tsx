import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import { GilroyHeader } from '../../common/typography.styles';

import { columns } from './utils/constants';
import { IPlant } from '../../apiTypes/Plant';
import { TableContainer } from './index.styles';
import Row from './Row';
import Header from './Header';
import Filters, { TFilters } from './Filters';

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
        ease
        sunlight
        ph_low
        ph_high
        season
        shape
        height
        spread
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
