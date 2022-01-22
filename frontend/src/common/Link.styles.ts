import styled from 'styled-components';

export const LinkContainer = styled.div<{ isActive?: boolean }>`
  display: grid;
  align-items: center;

  width: 210px;
  height: 40px;
  padding: 0 15px;
  margin-bottom: 8px;

  border-radius: 8px;
  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.accent800};
  }

  &:hover {
    background-color: ${({ theme }) => theme.primary300};
  }
`;

export const ActiveLinkContainer = styled(LinkContainer)`
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.accent800};
  pointer-events: none;
  & > a > p {
    color: ${({ theme }) => theme.white};
  }
`;
