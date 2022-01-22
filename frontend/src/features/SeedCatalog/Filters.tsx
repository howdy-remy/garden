import React from 'react';
import { GilroySmallText } from '../../common/typography.styles';
import { FilterContainer, SelectInput, TextInput, Button } from './Filters.styles';

function Filters() {
  return (
    <FilterContainer>
      <div>
        <GilroySmallText as="label" htmlFor="name">
          Name
        </GilroySmallText>

        <TextInput type="text" id="name" />
      </div>
      <div>
        <GilroySmallText as="label" htmlFor="type">
          Type
        </GilroySmallText>
        <SelectInput id="type">
          <option>option 1</option>
          <option>option 2</option>
          <option>option 3</option>
        </SelectInput>
      </div>
      <div>
        <GilroySmallText as="label" htmlFor="sun">
          Sun Exposure
        </GilroySmallText>
        <SelectInput id="sun">
          <option>option 1</option>
          <option>option 2</option>
          <option>option 3</option>
        </SelectInput>
      </div>
      <div>
        <GilroySmallText as="label" htmlFor="season">
          Season
        </GilroySmallText>
        <SelectInput id="season">
          <option>option 1</option>
          <option>option 2</option>
          <option>option 3</option>
        </SelectInput>
      </div>
      <Button>filter</Button>
    </FilterContainer>
  );
}

export default Filters;
