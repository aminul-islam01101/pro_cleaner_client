/* eslint-disable jsx-a11y/anchor-is-valid */
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Button, Dropdown, Layout, Row, Space } from 'antd';
import { useRouter } from 'next/navigation';

import { authKey } from '@/constants/storageKey';
import { getUserInfo, removeUserInfo } from '@/services/auth.services';

const { Header: AntHeader } = Layout;

const Header = () => {
  const router = useRouter();
  const { role } = getUserInfo() as any;
  const logout = () => {
    removeUserInfo(authKey);
    router.push('/signin');
  };

  const items: MenuProps['items'] = [
    {
      key: '0',
      label: (
        <Button onClick={logout} type="text" danger>
          {' '}
          logout
        </Button>
      ),
    },
  ];
  return (
    <AntHeader
    style={{
      background: "#fff",
    }}
  >
    <Row
      justify="end"
      align="middle"
      style={{
        height: "100%",
      }}
    >
      <p
        style={{
          margin: "0px 15px",
        }}
      >
        {role}
      </p>
      <Dropdown menu={{ items }}>
        <a>
          <Space wrap size={16}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </a>
      </Dropdown>
    </Row>
  </AntHeader>
  );
};

export default Header;
