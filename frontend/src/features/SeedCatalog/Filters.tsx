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
        <GilroySmallText as="label" htmlFor="ease">
          Ease
        </GilroySmallText>
        <SelectInput id="ease" onChange={(e) => handleOnSelectChange(e, 'ease')}>
          <option value={''}> </option>
          <option>EASY</option>
          <option>MODERATE</option>
          <option>DIFFICULT</option>
        </SelectInput>
      </div>
      <div>
        <GilroySmallText as="label" htmlFor="sunlight">
          Sun Exposure
        </GilroySmallText>
        <SelectInput id="sunlight" onChange={(e) => handleOnSelectChange(e, 'sunlight')}>
          <option value={''}> </option>

          <option>FULL</option>
          <option>PARTIAL</option>
          <option>SHADE</option>
        </SelectInput>
      </div>
      <div>
        <GilroySmallText as="label" htmlFor="season">
          Season
        </GilroySmallText>
        <SelectInput id="season" onChange={(e) => handleOnSelectChange(e, 'season')}>
          <option value={''}> </option>
          <option>COOL</option>
          <option>WARM</option>
        </SelectInput>
      </div>
      <Button onClick={filterAction}>filter</Button>
    </FilterContainer>
  );
}

export default Filters;
