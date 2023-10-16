/* eslint-disable jsx-a11y/anchor-is-valid */
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Button, Dropdown, Layout, Row, Space } from 'antd';
import { useRouter } from 'next/navigation';

import { authKey } from '@/constants/storageKey';
import { removeUserInfo } from '@/services/auth.services';

const { Header: AntHeader } = Layout;

const Header = () => {
  const router = useRouter();
  const logout = () => {
    removeUserInfo(authKey);
    router.push('/login');
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
    <AntHeader style={{ backgroundColor: '#ddd' }}>
      <Row justify="end" align="middle" style={{ height: '100%' }}>
        <Dropdown menu={{ items }}>
          <a href="#">
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
