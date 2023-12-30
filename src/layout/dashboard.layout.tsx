import React from 'react';
import dynamic from 'next/dynamic';
import { Layout, Menu, Sider, Footer, Header, Content } from '@/ui/imports/ui-import';
import { DashboardLayoutWrapper } from './dashboard.style';

const UploadOutlined = dynamic(() => import("@ant-design/icons").then(mod => mod.UploadOutlined), { ssr: false })

const DasboardLayout: React.FC = () => {
    return (
        <DashboardLayoutWrapper>
            <Sider collapsed={true}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
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
            </Sider>
            <Layout>
                <Header>
                    Dashboard
                </Header>
                <Content>
                    Content
                </Content>
                <Footer>
                    Footer
                </Footer>
            </Layout>
        </DashboardLayoutWrapper>)
};

export default DasboardLayout;
