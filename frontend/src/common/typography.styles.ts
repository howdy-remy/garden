import styled, { css } from 'styled-components';

const BaseParagraph = styled.p`
  margin: 0;
`;

export const RecoletaHeader = styled(BaseParagraph)`
  font-family: ${({ theme }) => theme.recoletaBold};
  font-size: ${({ theme }) => theme.extraLarge};
  line-height: 1;
`;

export const RecoletaLargeText = styled(BaseParagraph)`
  font-family: ${({ theme }) => theme.recoletaBold};
  font-size: ${({ theme }) => theme.large};
  line-height: 1.2;
`;

export const RecoletaText = styled(BaseParagraph)`
  font-family: ${({ theme }) => theme.recoletaBold};
  font-size: ${({ theme }) => theme.normal};
  line-height: 1.2;
`;

export const GilroyHeader = styled(BaseParagraph)<{ withSpaceAfter?: boolean; withStickyLeft?: boolean }>`
  font-family: ${({ theme }) => theme.gilroyExtraBold};
  font-size: ${({ theme }) => theme.extraLarge};
  line-height: 1.4;
  ${({ withSpaceAfter }) => withSpaceAfter && 'margin-bottom: 30px;'};
  ${({ withStickyLeft }) =>
    withStickyLeft &&
    css`
      position: sticky;
      left: 0;
    `};
`;

export const GilroyLargeText = styled(BaseParagraph)`
  font-family: ${({ theme }) => theme.gilroyExtraBold};
  font-size: ${({ theme }) => theme.large};
  line-height: 1.4;
`;

export const GilroyText = styled(BaseParagraph)`
  font-family: ${({ theme }) => theme.gilroyExtraBold};
  font-size: ${({ theme }) => theme.normal};
  line-height: 1.4;
`;

export const GilroySmallText = styled(BaseParagraph)`
  font-family: ${({ theme }) => theme.gilroyExtraBold};
  font-size: ${({ theme }) => theme.small};
  line-height: 1.4;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;
