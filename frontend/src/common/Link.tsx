import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

import { ActiveLinkContainer, LinkContainer } from './Link.styles';
import { RecoletaLargeText } from './typography.styles';

function CustomLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const LinkElement = !!match ? ActiveLinkContainer : LinkContainer;

  return (
    <LinkElement isActive={!!match}>
      <Link to={to} {...props}>
        <RecoletaLargeText>{children}</RecoletaLargeText>
      </Link>
    </LinkElement>
  );
}

export default CustomLink;
