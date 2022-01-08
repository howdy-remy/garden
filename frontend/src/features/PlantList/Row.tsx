import React from 'react';
import { GilroySmallText, RecoletaLargeText } from '../../common/typography.styles';
import {
  Container,
  Image,
  Cell,
  SoilPh,
  SoilPhContainer,
  Season,
  SeasonContainer,
  HarvestContainer,
} from './Row.styles';
import exposureToIcon from './SunExposureIcon';
import { TPlant } from './constants';

function Row({ plant, columns }: { plant: TPlant; columns: { key: string; display: string; leftPos?: number } }) {
  const { name, id } = plant;
  const makeReactKey = (col: string, key?: string) => `${name}_${id}_${col}_${key}`;
  const exposure = plant.sunExposure?.join('_');

  const sunExposure = <img src={exposureToIcon(exposure)} />;

  const soilPh = (
    <SoilPhContainer>
      {plant.soilPh.map((ph) => (
        <SoilPh ph={ph} key={`soilPh_${ph}`} />
      ))}
    </SoilPhContainer>
  );

  const bloomSeason = (
    <SeasonContainer key={makeReactKey('bloomSeason', 'parent')}>
      {plant.bloomSeason.map((season) => (
        <Season season={season} key={`bloomSeason_${season}`}>
          <GilroySmallText>{season}</GilroySmallText>
        </Season>
      ))}
    </SeasonContainer>
  );

  const getCell = (col) => {
    switch (col.key) {
      case 'src':
        return <Image />;
      case 'name':
        return <RecoletaLargeText>{plant.name}</RecoletaLargeText>;
      case 'sunExposure':
        return sunExposure;
      case 'soilPh':
        return soilPh;
      case 'bloomSeason':
        return bloomSeason;
      case 'daysToMaturity':
        return (
          <HarvestContainer>
            {plant.daysToMaturity}
            <GilroySmallText>days</GilroySmallText>
          </HarvestContainer>
        );
      default:
        return <GilroySmallText>{plant[col.key]}</GilroySmallText>;
    }
  };

  return (
    <Container>
      {columns.map((column) => (
        <Cell leftPos={column.leftPos} key={makeReactKey(column.key, plant[column.key])}>
          {getCell(column)}
        </Cell>
      ))}
    </Container>
  );
}

export default Row;
