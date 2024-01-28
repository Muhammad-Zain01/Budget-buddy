import React, { useState } from 'react';
import { Layout } from '@/common/ui-import';
import { DashboardContent, DashboardFooter, DashboardHeader, DashboardHeaderHeading, DashboardLayoutWrapper, DashboardMenu, DashboardSidebar, HeaderItemsWraper } from '../styles/dashboard';
import { ChildNodeType } from '@/common/types';
import { Account, Category, Dashboard, Github, Goals, Insights, LinkedIn, Settings, Transaction } from '@/components/icon';
import { GlobalStyle, DashboardLink as Link } from '@/styles/global';
import { usePathname } from 'next/navigation';
import UI_Button from '@/components/ui/ui-button';
import { useLayout } from '@/context/layout';
import Loader from '@/components/layout/loader';
import useLoadingState from '@/hooks/useLoadingState';
import UserDropDown from '@/components/layout/user-dropdown';
import Timeline from '@/components/layout/timeline';
import ThemeShifter from '@/components/layout/theme-shifter';
import { useTheme } from '@/context/theme';

const HeaderItems = [
    {
        key: 'dashboard',
        title: "Dashboard",
        icon: <Dashboard right={5} size={21} />,
        label: <Link href="/dashboard">Dashboard</Link>,
    },
    {
        key: 'categories',
        title: "Categories",
        icon: <Category right={5} size={21} />,
        label: <Link href="/categories">Categories</Link>,
    },
    {
        key: 'accounts',
        title: "Accounts",
        icon: <Account right={5} size={21} />,
        label: <Link href="/accounts">Accounts</Link>,
    },
    {
        key: 'transactions',
        title: "Transactions",
        icon: <Transaction right={5} size={21} />,
        label: <Link href="/transactions">Transactions</Link>,
    },
    {
        key: 'goals',
        title: "Goals",
        icon: <Goals right={5} size={21} />,
        label: <Link href="/goals">Goals</Link>,
    },
    {
        key: 'insights',
        title: "Insights",
        icon: <Insights right={5} size={21} />,
        label: <Link href="/insights">Insigths</Link>,
    },
    {
        key: 'settings',
        title: "Settings",
        icon: <Settings right={5} size={21} />,
        label: <Link href="/settings">Settings</Link>,
    },
]

const DasboardLayout: React.FC<ChildNodeType> = ({ children }) => {
    const path = usePathname().split('/')[1];
    const { sidebar, toggleSidebar } = useLayout()
    const { loading } = useLoadingState();
    const [pageKey, setKey] = useState(path)
    const { theme } = useTheme();
    const title = HeaderItems.find(item => pageKey === item.key)?.title

    return (
        <>
            <GlobalStyle />
            <DashboardLayoutWrapper>
                <DashboardSidebar width={240} collapsed={sidebar}>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                        <img src={`/assets/logos/${sidebar ? 'icon' : 'logo'}_${theme == 'dark' ? 'white' : 'colored'}.png`} width={sidebar ? "50px" : "150px"} />
                    </div>
                    <DashboardMenu
                        onClick={(e) => { setKey(e.key) }}
                        defaultSelectedKeys={[path]}
                        items={HeaderItems}
                    />
                    <UI_Button onClick={toggleSidebar}>Toggle Sidebar</UI_Button>
                </DashboardSidebar>
                <Layout>
                    <DashboardHeader>
                        <DashboardHeaderHeading level={3}>{title}</DashboardHeaderHeading>
                        <HeaderItemsWraper>
                            <Timeline />
                            <ThemeShifter />
                            <UserDropDown />
                        </HeaderItemsWraper>
                    </DashboardHeader>

                    <DashboardContent>
                        {loading ? <Loader /> : <>{children}</>}
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
            </DashboardLayoutWrapper>
        </>
    )
};

export default DasboardLayout;
