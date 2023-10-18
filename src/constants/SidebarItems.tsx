import {
  AppstoreOutlined,
  ProfileOutlined,
  TableOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Link from 'next/link';

import { ROLE } from './role';

export const sidebarItems = (role: ROLE, adminPermissions:string[] ) => {





  const defaultSidebarItems: MenuProps['items'] = [
    {
      label: 'Profile',
      key: 'profile',
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}`}>Account Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];



  const commonAdminSidebarItems: MenuProps['items'] = [
    {
      label: <Link href={`/${role}/manage-content`}>Manage Content</Link>,
      icon: <TableOutlined />,
      key: `/${role}/content_manager`,
    },
    {
      label: <Link href={`/${role}/manage-service`}>Manage Service</Link>,
      icon: <TableOutlined />,
      key: `/${role}/service_manager`,
    },
    {
      label: <Link href={`/${role}/manage-booking`}>Manage Booking</Link>,
      icon: <TableOutlined />,
      key: `/${role}/booking_manager`,
    },
    {
      label: <Link href={`/${role}/manage-user`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `/${role}/user_manager`,
    },
  ];
  const adminPermissionMap: { [key: string]: { label: string; icon: React.ReactNode } } = {
    content_manager: {
      label: 'Manage Content',
      icon: <TableOutlined />,
    },
    service_manager: {
      label: 'Manage Service',
      icon: <TableOutlined />,
    },
    booking_manager: {
      label: 'Manage Booking',
      icon: <TableOutlined />,
    },
    user_manager: {
      label: 'Manage User',
      icon: <TableOutlined />,
    },
  }
  const adminSidebarItems: MenuProps['items'] = [...defaultSidebarItems];

  const superAdminSidebarItems: MenuProps['items'] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/admin`,
    },

    {
      label: 'Manage permission',
      key: 'manage-permission',
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/permission`}>View permissions</Link>,
          key: `/${role}/permission`,
        },
      ],
    },
  
  ];

  const userSidebarItem: MenuProps['items'] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/orders`}>Orders history</Link>,
      icon: <TableOutlined />,
      key: `/${role}/orders`,
    },
    
  ];

  if (role === ROLE.SUPER_ADMIN) {
    return superAdminSidebarItems;
  }
  
  if (role === ROLE.ADMIN && adminPermissions.includes('all')) {

 return [...defaultSidebarItems,...commonAdminSidebarItems]
    
  }

  if (role === ROLE.ADMIN && adminPermissions.length > 0) {
    adminPermissions.forEach((permission) => {
      const permissionInfo = adminPermissionMap[permission];
      if (permissionInfo) {
        adminSidebarItems.push({
          label: <Link href={`/${role}/${permissionInfo.label}`}>{permissionInfo.label}</Link>,
          icon: permissionInfo.icon,
          key: `/${role}/${permission}`,
        });
      }
    });
  }

  if (role === ROLE.USER) {
    return userSidebarItem;
  }

  return defaultSidebarItems;
};
