import React, { ChangeEvent } from 'react';
import { GilroySmallText } from '../../common/typography.styles';
import { FilterContainer, SelectInput, TextInput, Button } from './Filters.styles';

export type TFilters = {
  name?: string | undefined;
};

function Filters({
  filters,
  setFilters,
  filterAction,
}: {
  filters: TFilters;
  setFilters: (filters: TFilters) => void;
  filterAction: () => void;
}) {
  const handleOnNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters, name: e.target.value };
    setFilters(newFilters);
  };
  const handleOnSelectChange = (e: ChangeEvent<HTMLSelectElement>, select: string) => {
    const val = e.target.value || null;
    const newFilters = { ...filters, [select]: val };
    setFilters(newFilters);
  };
  return (
    <FilterContainer>
      <div>
        <GilroySmallText as="label" htmlFor="name">
          Name
        </GilroySmallText>

        <TextInput type="text" id="name" onChange={handleOnNameChange} />
      </div>
      <div>
        <GilroySmallText as="label" htmlFor="type">
          Type
        </GilroySmallText>
        <SelectInput id="type" onChange={(e) => handleOnSelectChange(e, 'type')}>
          <option value={''}> </option>
          <option>VEGETABLE</option>
          <option>FRUIT</option>
          <option>HERBS</option>
          <option>ANNUAL</option>
          <option>PERENNIAL</option>
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
      <Button onClick={filterAction}>filter</Button>
    </FilterContainer>
  );
}

export default Filters;
