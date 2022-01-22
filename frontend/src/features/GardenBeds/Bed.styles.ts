import styled from 'styled-components';

export const BedContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.contrastTan};
  border-radius: 8px;
  margin-bottom: 30px;
`;

export const BedHeader = styled.header`
  background-color: ${({ theme }) => theme.contrastTan};
  display: grid;
  grid-template-columns: 1fr 24px;
  grid-column-gap: 15px;
  align-items: center;
  height: 50px;
  padding: 0 15px;
`;

export const BedContent = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 60px);
  grid-gap: 15px;
  padding: 15px;
`;

export const Plant = styled.div`
  height: 60px;
  width: 60px;
  background-color: ${({ theme }) => theme.contrastTan};
`;
