import styled, { css } from 'styled-components';

export const FilterContainer = styled.div`
  position: sticky;
  left: 0;

  display: grid;
  grid-template-columns: 300px repeat(4, 100px);
  grid-auto-columns: 200px;
  grid-column-gap: 16px;
  align-items: flex-end;

  width: max-content;
  max-width: calc(100% - 30px);

  padding: 15px;
  background-color: ${({ theme }) => theme.accent400};
  border-radius: 8px;
  margin-bottom: 30px;

  overflow: auto;

  & > div > label {
    margin-bottom: 4px;
    display: block;
  }
`;

const InputReset = css`
  appearance: none;
  border: none;

  height: 40px;
  padding: 0 8px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 4px;

  font-family: ${({ theme }) => theme.gilroyExtraBold};
  font-size: ${({ theme }) => theme.normal};
`;

export const TextInput = styled.input`
  ${InputReset}
  width: calc(300px - 16px);
`;

export const SelectInput = styled.select`
  ${InputReset}
  width: 100px;
`;

export const Button = styled.button`
  ${InputReset}
  background-color: ${({ theme }) => theme.accent800};
  color: ${({ theme }) => theme.white};
  width: 100px;
`;
