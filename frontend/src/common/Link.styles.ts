import styled from 'styled-components';

export const LinkContainer = styled.div<{ isActive?: boolean }>`
  display: grid;
  align-items: center;

  width: 100%;
  height: 40px;
  padding: 0 15px;
  margin-bottom: 8px;

  border-radius: 8px 0 0 8px;
  & > a {
    text-decoration: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.primary300};
  }
`;

export const ActiveLinkContainer = styled(LinkContainer)`
  background-color: ${({ theme }) => theme.accentBlue};
  pointer-events: none;
  & > a > p {
    color: ${({ theme }) => theme.white};
  }
`;
