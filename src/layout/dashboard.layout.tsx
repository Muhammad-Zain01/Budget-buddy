import React from 'react';

import { Layout } from '@/ui/imports/ui-import';
import { DashboardContent, DashboardFooter, DashboardHeader, DashboardLayoutWrapper, DashboardMenu, DashboardSidebar } from './dashboard.style';
import { ChildNodeType } from '@/common/types';
import { Account, Category, Dashboard, Github, LinkedIn, Transaction } from '@/components/icon/Icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UI_Title from '@/ui/components/ui-title';

const HeaderItems = [
    {
        key: 'dashboard',
        title: "Dashboard",
        icon: <Dashboard size={18} />,
        label: <Link href="/dashboard">Dashboard</Link>,
    },
    {
        key: 'category',
        title: "Categories",
        icon: <Category size={18} />,
        label: <Link href="/category">Categories</Link>,
    },
    {
        key: 'account',
        title: "Accounts",
        icon: <Account size={18} />,
        label: <Link href="/account">Accounts</Link>,
    },
    {
        key: 'transaction',
        title: "Transactions",
        icon: <Transaction size={18} />,
        label: <Link href="/transaction">Transactions</Link>,
    },
]
const DasboardLayout: React.FC<ChildNodeType> = ({ children }) => {
    const path = usePathname().split('/')[1];
    const title = HeaderItems.find(item => item.key === path)?.title
    return (
        <DashboardLayoutWrapper>
            <DashboardSidebar collapsed={true}>
                <DashboardMenu
                    defaultSelectedKeys={[path]}
                    items={HeaderItems}
                />
            </DashboardSidebar>
            <Layout>
                <DashboardHeader>
                    <UI_Title level={2} >{title}</UI_Title>
                </DashboardHeader>
                <DashboardContent>
                    {children}
                </DashboardContent>
                <DashboardFooter>
                    All Right Reservered By Muhammad Zain  &nbsp;
                    <Link href="https://github.com/Muhammad-Zain01">
                        <Github size={17} />
                    </Link>&nbsp;&nbsp;
                    <Link href="https://www.linkedin.com/in/muhammad-zain01/">
                        <LinkedIn size={17} />
                    </Link>
                </DashboardFooter>
            </Layout>
        </DashboardLayoutWrapper>)
};

export default DasboardLayout;
