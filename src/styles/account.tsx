import styled from "styled-components";
import { Card } from "@/ui/imports/ui-import";
import UI_Title from "@/ui/components/ui-title";
export const AccountWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`

export const AccountCard = styled(Card)`
    width: calc(50% - 10px);
    margin: 5px 5px;
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.color};
    border: 1px solid ${props => props.theme.cardBorder};
    /* padding: 0px 0px; */
    &:hover{
        border: 1px solid #949494;
    }
`

export const AccountHeading = styled(UI_Title)`
    margin: 0px;
    margin-top: 10px;
    margin-left: 12px;
    font-size: 16px !important;
`

export const AccountDetailDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
`
export const AccountIconDiv = styled.div`
    padding: 20px;
    padding-top: 33px !important;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items:center;
    margin: 0px 2px;
    padding: 30px 20px;
    justify-content: center;
    border: 1px solid  ${props => props.isSelected ? props.theme.borderColor : "#9e9e9e9a"};
    border-radius: 5px;

    &:hover{
        border: 1px solid ${props => props.theme.borderColor};
    }
`
export const AccountBalanceType = styled.div`
    width: 50%;
    border: 1px solid ${props => props.isSelected ? props.theme.borderColor : "#9e9e9e9a"} !important; 
    padding: 20px;
    border-radius: 4px;
    margin: 0px 2px;
    &:hover{
        border: 1px solid ${props => props.theme.borderColor};
    }
`