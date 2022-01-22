import styled from 'styled-components';

export const SeedsContainer = styled.div`
  padding: 30px;
  background-color: ${({ theme }) => theme.accent800};
  border-radius: 8px;
  color: ${({ theme }) => theme.white};
  min-height: calc(100% - 60px);
`;

export const Packets = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  margin-top: 30px;
`;

export const SeedPacket = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;
  border-radius: 8px;
`;
