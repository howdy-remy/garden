import React from 'react';

import { IPlant } from '../../../apiTypes/Plant';
import { TColumn } from './constants';

import { GilroyText, GilroySmallText, RecoletaLargeText } from '../../../common/typography.styles';
import { Image } from '../Row.styles';
import exposureToIcon from './SunExposureIcon';

import cancel from '../assets/cancel.png';
import add from '../assets/add.png';

const getCell: (col: TColumn, plant: IPlant, isSelected: boolean) => React.ReactNode = (col, plant, isSelected) => {
  switch (col.key) {
    case 'src':
      return <Image src={isSelected ? cancel : add} />;
    case 'name':
      return <RecoletaLargeText>{plant.name}</RecoletaLargeText>;
    case 'sunlight':
      return <img src={exposureToIcon(plant.sunlight?.join('_'))} />;
    case 'shape':
      return <GilroySmallText>{plant.shape.join(', ')}</GilroySmallText>;
    case 'ph':
      return (
        <GilroyText>
          {Number.parseFloat(plant.ph_low).toFixed(1)}&ndash;{Number.parseFloat(plant.ph_high).toFixed(1)}
        </GilroyText>
      );
    default:
      return <GilroySmallText>{plant[col.key] || '—'}</GilroySmallText>;
  }
};

export default getCell;
