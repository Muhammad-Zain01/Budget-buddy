import React from 'react';
import dynamic from 'next/dynamic';
import { Layout } from '@/ui/imports/ui-import';
import { DashboardContent, DashboardFooter, DashboardHeader, DashboardLayoutWrapper, DashboardMenu, DashboardSidebar } from './dashboard.style';
import { ChildNodeType } from '@/common/types';
import { useTheme } from '@/context/theme';

const UploadOutlined = dynamic(() => import("@ant-design/icons").then(mod => mod.UploadOutlined), { ssr: false })

const DasboardLayout: React.FC<ChildNodeType> = ({ children }) => {
    const { theme } = useTheme()
    return (
        <DashboardLayoutWrapper>
            <DashboardSidebar collapsed={true}>
                <DashboardMenu
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UploadOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <UploadOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </DashboardSidebar>
            <Layout>
                <DashboardHeader>
                    Dashboard
                </DashboardHeader>
                <DashboardContent>
                    {children}sdf
                </DashboardContent>
                <DashboardFooter>
                    All Right Reservered By Muhammad Zain
                </DashboardFooter>
            </Layout>
        </DashboardLayoutWrapper>)
};

export default DasboardLayout;
