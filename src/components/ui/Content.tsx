'use client';

import { Layout } from 'antd';
import { ReactNode } from 'react';

import BreadCrumbs from './BreadCrumbs';

const { Content } = Layout;

const Contents = ({ children }: { children: ReactNode }) => {
  const base = 'admin';
  return (
    <Content
      style={{
        minHeight: '100vh',
        color: 'black',
      }}
    >
      <BreadCrumbs
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: 'student',
            link: `/${base}/student`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;
