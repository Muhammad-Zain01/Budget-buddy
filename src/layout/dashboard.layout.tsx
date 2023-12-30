import React from 'react';

import { Layout } from '@/ui/imports/ui-import';
import { DashboardContent, DashboardFooter, DashboardHeader, DashboardLayoutWrapper, DashboardMenu, DashboardSidebar } from './dashboard.style';
import { ChildNodeType } from '@/common/types';
import { Account, Category, Transaction } from '@/components/icon/Icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UI_Title from '@/ui/components/ui-title';
import { useRouter } from 'next/router';
const DasboardLayout: React.FC<ChildNodeType> = ({ children }) => {
    const path = usePathname().split('/')[1];
   
    return (
        <DashboardLayoutWrapper>
            <DashboardSidebar collapsed={true}>
                <DashboardMenu
                    defaultSelectedKeys={[path]}
                    items={[
                        {
                            key: 'category',
                            icon: <Category size={18} />,
                            label: <Link href="/category">Categories</Link>,
                        },
                        {
                            key: 'account',
                            icon: <Account size={18} />,
                            label: <Link href="/account">Accounts</Link>,
                        },
                        {
                            key: 'transaction',
                            icon: <Transaction size={18} />,
                            label: <Link href="/transaction">Transactions</Link>,
                        },
                    ]}
                />
            </DashboardSidebar>
            <Layout>
                <DashboardHeader>
                    <UI_Title level={2} >Dashboard</UI_Title>
                </DashboardHeader>
                <DashboardContent>
                    {children}
                </DashboardContent>
                <DashboardFooter>
                    All Right Reservered By Muhammad Zain
                </DashboardFooter>
            </Layout>
        </DashboardLayoutWrapper>)
};

export default DasboardLayout;
