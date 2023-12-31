import styled from "styled-components";
import { Footer, Header, Layout, Content, Sider, Menu } from "@/ui/imports/ui-import";
import UI_Title from "@/ui/components/ui-title";

export const DashboardLayoutWrapper = styled(Layout)`
    overflow: hidden;
    height: 100vh;
    width: 100%;
`
export const DashboardHeader = styled(Header)`
    color: ${props => props.theme.color};
    background: ${props => props.theme.contentBackground};
    padding: 25px 30px;
`
export const DashboardFooter = styled(Footer)`
    text-align: center;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.contentBackground};
    color: ${props => props.theme.color};
    
    a{
        color: ${props => props.theme.color};
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const DashboardContent = styled(Content)`
    padding: 30px;
    color: ${props => props.theme.color};
    background: ${props => props.theme.contentBackground};
`

export const DashboardSidebar = styled(Sider)`
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background} !important;
    padding: 5px;
    ul{
        border: none !important;
    }
    a{
        font-size: 16px !important; 
    }
    li{
        height: 50px !important;
        margin-bottom: 25px !important;
        display: flex !important;
        align-items: center;
    }
    
`
export const DashboardHeaderHeading = styled(UI_Title)`
    margin: 0px;
`
export const DashboardMenu = styled(Menu)`
    color: ${props => props.theme.color} !important;
    background-color: transparent !important;

    .ant-menu-item-active{
        background-color: ${props => props.theme.hoverShade} !important;
        color: ${props => props.theme.color} !important;
    }
    .ant-menu-item-selected{
        background: linear-gradient(120deg, #3563c5,#2250b2);
        color: white !important;
    }
`