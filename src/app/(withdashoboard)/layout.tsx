import { Layout } from 'antd';
import { ReactNode } from 'react';

import Contents from '@/components/ui/Content';
import SideBar from '@/components/ui/Sidbar';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
