import React, { ReactNode } from 'react';
import { PageContainer, PageNav } from './Page.styles';

function Page({ children }: { children: ReactNode }) {
  return (
    <PageContainer>
      <div>
        Garden
        <PageNav>
          <a>Plant list</a>
        </PageNav>
      </div>
      {children}
    </PageContainer>
  );
}

export default Page;
