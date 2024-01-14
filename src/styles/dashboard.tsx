import styled from "styled-components";
import { Footer, Header, Layout, Content, Sider, Menu, Avatar, DatePicker, Card } from "@/ui/imports/ui-import";
import UI_Title from "@/ui/components/ui-title";
import { Wallet } from "@/components/icon";

export const DashboardLayoutWrapper = styled(Layout)`
    overflow: hidden;
    height: 100vh;
    width: 100%;
`
export const DashboardHeader = styled(Header)`
    color: ${props => props.theme.color};
    background: ${props => props.theme.contentBackground};
    padding: 10px 30px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.cardBorder};

    height: unset !important;
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
    overflow-y: scroll;
    scrollbar-width: auto;
    scrollbar-color: #dfe9eb;
    &::-webkit-scrollbar {
        width: 5px;
        height: 8px; 
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 100px;
        background-color: #a8a8a8;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #a3a3a3;
    }

    &::-webkit-scrollbar-thumb:active {
        background-color: #9e9e9e;
    }
`

export const DashboardSidebar = styled(Sider)`
    color: ${props => props.theme.color} !important;
    background-color: ${props => props.theme.background} !important;
    padding: 5px;
    border-right: 1px solid ${props => props.theme.cardBorder};
    ul{
        border: none !important;
    }
    a{
        font-size: 14px !important; 
    }
    li{
        height: 50px !important;
        margin-bottom: 15px !important;
        display: flex !important;
        align-items: center;
    }
    .ant-menu-item{
        transition: none !important;
    }
    
`
export const DashboardHeaderHeading = styled(UI_Title)`
    margin: 0px !important;
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

export const UserAvatar = styled(Avatar)`
    background-color: ${props => props.theme.theme === 'dark' ? '#f2f2f2' : '#172432d4'} !important;
    color:${props => props.theme.theme === 'dark' ? '#172432d4' : '#f2f2f2'} !important;
    border: 1px solid black;
    font-size: 15px !important;
    cursor: pointer;
`

export const TimelineField = styled(DatePicker)`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color} !important;
    border: 1px solid ${props => props.theme.cardBorder};
    padding: 10px 10px 10px 15px;
    width: 300px;
    & .ant-picker-focused{
        border: none !important;
        box-shadow: none !important;
    }
    &:hover{
        border-color: #949494;
    }
    & input, input::placeholder,.ant-picker-suffix { 
        color: ${props => props.theme.color} !important;
    }

`

export const DashboardCard = styled(Card)`
    width: calc(25% - 10px);
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.color};
    border: 1px solid ${props => props.theme.cardBorder};
    padding: 5px 0px;
`

export const DashboardCardWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
` 
export const DIconWraper = styled.div`
    margin-right: 15px;
`
export const IconDiv = styled.span`
    background: linear-gradient(120deg, #3563c5,#2250b2);
    border-radius: 200px;
    padding: 16px;
    display: inline-flex;
    justify-content: center;
`
export const DashboardCardlabel = styled(UI_Title)`
    font-size: 15px !important;
    color: #838383dd; 
    margin: 0px;
`
export const ThemeShiftSpan = styled.span`
    display: flex;
    margin: 0px 20px;
    align-items: center;
    padding: 10px;
    border-radius: 200px;
    &:hover{
        background-color: #89898945;
    }
`

export const HeaderItemsWraper = styled.div`
    display: flex;
    align-items: center;
`
export const DashboardCardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`