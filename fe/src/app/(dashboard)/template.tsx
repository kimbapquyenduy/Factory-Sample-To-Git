'use client';

import { ApolloWrapper } from '@/presentation/templates';
import UserLayout from '@/presentation/templates/user-layout';

const DashboardTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloWrapper>
      <UserLayout>
        <div>{children}</div>
      </UserLayout>
    </ApolloWrapper>
  );
};

export default DashboardTemplate;
