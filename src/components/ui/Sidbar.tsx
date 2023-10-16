'use client';

import { Layout, Menu } from 'antd';
import { useState } from 'react';

import { getUserInfo } from '../../services/auth.services';

import { sidebarItems } from '@/constants/SidebarItems';
import { ROLE } from '@/constants/role';

const { Sider } = Layout;
type TRole = {
  role: 'admin' | 'super_admin' | 'user';
};

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { role } = getUserInfo() as any;
  // const role = ROLE.USER;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: 'white',
          fontSize: '2rem',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}
      >
        Pro-cleaner
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems(role)} />
    </Sider>
  );
};

export default SideBar;
