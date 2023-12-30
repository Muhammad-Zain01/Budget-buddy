import React from 'react';
import dynamic from 'next/dynamic';
import { Layout } from '@/ui/imports/ui-import';
import { DashboardContent, DashboardFooter, DashboardHeader, DashboardLayoutWrapper, DashboardMenu, DashboardSidebar } from './dashboard.style';
import { ChildNodeType } from '@/common/types';
import { Account, Category, Transaction } from '@/components/icon/Icon';
import Link from 'next/link';
const UploadOutlined = dynamic(() => import("@ant-design/icons").then(mod => mod.UploadOutlined), { ssr: false })

const DasboardLayout: React.FC<ChildNodeType> = ({ children }) => {
    return (
        <DashboardLayoutWrapper>
            <DashboardSidebar collapsed={false}>
                <DashboardMenu
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <Category size={18} />,
                            label: <Link href="/category">Categories</Link>,
                        },
                        {
                            key: '2',
                            icon: <Account size={18} />,
                            label: <Link href="/account">Accounts</Link>,
                        },
                        {
                            key: '3',
                            icon: <Transaction size={18} />,
                            label: <Link href="/transaction">Transactions</Link>,
                        },
                    ]}
                />
            </DashboardSidebar>
            <Layout>
                <DashboardHeader>
                    Dashboard
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
