import React, { ReactNode } from 'react';
import { ContentContainer, PageContainer, PageNav } from './Page.styles';
import Link from './Link';

function Page({ children }: { children: ReactNode }) {
  return (
    <PageContainer>
      <div>
        Garden
        <PageNav>
          <Link to="pantry">pantry</Link>
          <Link to="garden-beds">garden beds</Link>
          <Link to="calendar">calendar</Link>
          <Link to="seed-catalog">seed catalog</Link>
          <Link to="account">account</Link>
        </PageNav>
      </div>
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  );
}

export default Page;
