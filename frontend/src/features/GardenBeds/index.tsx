import React from 'react';

import { GilroyHeader } from '../../common/typography.styles';
import Bed from './Bed';
import { ContentContainer } from './index.styles';
import Seeds from './Seeds';

function GardenBeds() {
  return (
    <>
      <ContentContainer>
        <div>
          <GilroyHeader withSpaceAfter>Garden Beds</GilroyHeader>
          <Bed />
          <Bed />
          <Bed />
        </div>
        <Seeds />
      </ContentContainer>
    </>
  );
}

export default GardenBeds;
