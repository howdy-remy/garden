import React from 'react';
import { GilroyHeader } from '../../common/typography.styles';
import { SeedsContainer, SeedPacket, Packets } from './Seeds.styles';

function Seeds() {
  return (
    <SeedsContainer>
      <GilroyHeader>Seeds</GilroyHeader>
      <Packets>
        <SeedPacket></SeedPacket>
        <SeedPacket></SeedPacket>
      </Packets>
    </SeedsContainer>
  );
}

export default Seeds;
