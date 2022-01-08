import React, { ReactNode } from 'react';
import { PageContainer, PageNav } from './Page.styles';
import Link from './Link';

function Page({ children }: { children: ReactNode }) {
  return (
    <PageContainer>
      <div>
        Garden
        <PageNav>
          <Link to="plant-list">plant list</Link>
          <Link to="timing">timing</Link>
          <Link to="companions">companions</Link>
          <Link to="all-plants">all plants</Link>
          <Link to="settings">settings</Link>
        </PageNav>
      </div>
      {children}
    </PageContainer>
  );
}

export default Page;
