import React, { useState } from 'react';
import { RecoletaLargeText } from '../../common/typography.styles';
import { BedContainer, BedContent, BedHeader, Plant } from './Bed.styles';
import collapse from './collapse.png';
import expand from './expand.png';

function Bed() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <BedContainer>
      <BedHeader onClick={() => setIsExpanded((state) => !state)}>
        <RecoletaLargeText>Bed name</RecoletaLargeText>
        <img src={isExpanded ? collapse : expand} />
      </BedHeader>
      {isExpanded && (
        <BedContent>
          <Plant />
          <Plant />
          <Plant />
          <Plant />
          <Plant />
        </BedContent>
      )}
    </BedContainer>
  );
}

export default Bed;
