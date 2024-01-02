import React from 'react';

import { Layout } from '@/ui/imports/ui-import';
import { DashboardContent, DashboardFooter, DashboardHeader, DashboardHeaderHeading, DashboardLayoutWrapper, DashboardMenu, DashboardSidebar } from './dashboard.style';
import { ChildNodeType } from '@/common/types';
import { Account, Category, Dashboard, Github, LinkedIn, Transaction } from '@/components/icon/Icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UI_Button from '@/ui/components/ui-button';
import { useTheme } from '@/context/theme';

const HeaderItems = [
    {
        key: 'dashboard',
        title: "Dashboard",
        icon: <Dashboard right={5} size={21} />,
        label: <Link href="/dashboard">Dashboard</Link>,
    },
    {
        key: 'category',
        title: "Categories",
        icon: <Category right={5} size={21} />,
        label: <Link href="/category">Categories</Link>,
    },
    {
        key: 'account',
        title: "Accounts",
        icon: <Account right={5} size={21} />,
        label: <Link href="/account">Accounts</Link>,
    },
    {
        key: 'transaction',
        title: "Transactions",
        icon: <Transaction right={5} size={21} />,
        label: <Link href="/transaction">Transactions</Link>,
    },
]

const DasboardLayout: React.FC<ChildNodeType> = ({ children }) => {
    const path = usePathname().split('/')[1];
    const {toggleTheme} = useTheme()
    const title = HeaderItems.find(item => item.key === path)?.title
    return (
        <DashboardLayoutWrapper>
            <DashboardSidebar width={240} collapsed={false}>
                <DashboardMenu
                    defaultSelectedKeys={[path]}
                    items={HeaderItems}
                />
                <UI_Button onClick={toggleTheme}>Toggle Theme</UI_Button>
            </DashboardSidebar>
            <Layout>
                <DashboardHeader>
                    <DashboardHeaderHeading level={3}>{title}</DashboardHeaderHeading>
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
