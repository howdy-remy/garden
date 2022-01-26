import React from 'react';
import { GilroyHeader } from '../../common/typography.styles';
import { IPlant } from '../../apiTypes/Plant';
import { SeedsContainer, SeedPacket, Packets } from './Seeds.styles';

function Seeds({ plants }: { plants: IPlant[] }) {
  return (
    <SeedsContainer>
      <GilroyHeader>Seeds</GilroyHeader>
      <Packets>
        {plants?.map((plant) => (
          <SeedPacket key={`plant-${plant.id}`}>{plant.name}</SeedPacket>
        ))}
      </Packets>
    </SeedsContainer>
  );
}

export default Seeds;
