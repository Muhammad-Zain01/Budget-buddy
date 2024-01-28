import { TabsProps } from "antd";
import { ChangeEvent } from "react";
import styled from "styled-components";
import { Tabs } from "../../common/ui-import";

const TabWrapper = styled(Tabs)`
    background-color: ${(props) => props.theme.contentBackground} !important;
    color: ${(props) => props.theme.color} !important;
    width: 98%;
    margin-bottom: 20px;
    .ant-tabs-tab{
        color: ${(props) => props.theme.color} !important;
    }
    .ant-tabs-tab-btn{
        padding: 0px 8px;
    }
    .ant-tabs-ink-bar{
        height: 3px !important;
        background: linear-gradient(120deg, #3563c5,#2250b2);
    }
    .ant-tabs-nav::before{
        border-bottom: 2px solid #b6b6b678 ;
    }
    .ant-tabs-tab-active .ant-tabs-tab-btn{
        font-weight: 600;
        color: ${(props) => props.theme.color} !important
    }
`
const TabContainer = styled.div`
    display: flex;
    justify-content: center;
`
type ComponnetProps = {
    onChange: (e: ChangeEvent) => void,
    items: TabsProps['items'],
}
const UI_Tabs: React.FC<ComponnetProps | TabsProps> = ({ onChange, items, ...props }): JSX.Element => {
    return (
        <TabContainer>
            <TabWrapper {...props} size="middle" defaultActiveKey="income" items={items} onChange={onChange} />
        </TabContainer>

    )
}

export default UI_Tabs