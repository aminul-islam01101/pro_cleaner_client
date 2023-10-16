'use client';

import { Layout } from 'antd';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

import Contents from '@/components/ui/Content';
import SideBar from '@/components/ui/Sidbar';
import { isLoggedIn } from '@/services/auth.services';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    // Use an asynchronous function to check user login status
    const checkUserLoginStatus = () => {
      const userLoggedIn = isLoggedIn();

      if (!userLoggedIn) {
        router.push('/login');
      }

      setIsLoading(false);
    };

    checkUserLoginStatus();
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
