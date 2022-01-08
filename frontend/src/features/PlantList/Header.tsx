import React from 'react';
import { GilroySmallText } from '../../common/typography.styles';
import { Container, Cell } from './Header.styles';

function Header({ columns }: { columns: { key: string; display: string; leftPos?: number }[] }) {
  return (
    <Container>
      {columns.map((column) => (
        <Cell leftPos={column.leftPos} key={column.key}>
          <GilroySmallText>{column.display}</GilroySmallText>
        </Cell>
      ))}
    </Container>
  );
}

export default Header;
