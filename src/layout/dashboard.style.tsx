import styled from "styled-components";
import { Footer, Header, Layout, Content, Sider, Menu } from "@/ui/imports/ui-import";

export const DashboardLayoutWrapper = styled(Layout)`
    overflow: hidden;
    height: 100vh;
    width: 100%;
`
export const DashboardHeader = styled(Header)`
    color: ${props => props.theme.color};
    background: ${props => props.theme.background};
`
export const DashboardFooter = styled(Footer)`
    text-align: center;
    padding: 10px;
    color: ${props => props.theme.color};
    background: ${props => props.theme.contentBackground};
`
export const DashboardContent = styled(Content)`
    padding: 30px;
    color: ${props => props.theme.color};
    background: ${props => props.theme.contentBackground};
`

export const DashboardSidebar = styled(Sider)`
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background} !important;
`

export const DashboardMenu = styled(Menu)`
    color: ${props => props.theme.color};
    background-color: transparent !important;
`