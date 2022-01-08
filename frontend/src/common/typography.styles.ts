import styled from 'styled-components';

const BaseParagraph = styled.p`
  margin: 0;
`;

export const RecoletaHeader = styled(BaseParagraph)`
  font-family: ${({ theme }) => theme.recoletaBold};
  font-size: ${({ theme }) => theme.extraLarge};
  line-height: 1;
  color: ${({ theme }) => theme.accentBlue};
`;

export const RecoletaLargeText = styled(BaseParagraph)`
  font-family: ${({ theme }) => theme.recoletaBold};
  font-size: ${({ theme }) => theme.large};
  line-height: 1.2;
  color: ${({ theme }) => theme.accentBlue};
`;

export const RecoletaText = styled(BaseParagraph)`
  font-family: ${({ theme }) => theme.recoletaBold};
  font-size: ${({ theme }) => theme.normal};
  line-height: 1.2;
  color: ${({ theme }) => theme.accentBlue};
`;

export const GilroyText = styled(BaseParagraph)`
  font-family: ${({ theme }) => theme.gilroyExtraBold};
  font-size: ${({ theme }) => theme.normal};
  line-height: 1.4;
  color: ${({ theme }) => theme.accentBlue};
`;

export const GilroySmallText = styled(BaseParagraph)`
  font-family: ${({ theme }) => theme.gilroyExtraBold};
  font-size: ${({ theme }) => theme.small};
  line-height: 1.4;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.accentBlue};
`;
