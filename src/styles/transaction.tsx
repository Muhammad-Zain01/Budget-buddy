import styled from "styled-components";
import { Card } from "@/ui/imports/ui-import";
import UI_Title from "@/ui/components/ui-title";
export const TransactionWrapper = styled.div`
    display: flex;
`

export const TransactionCard = styled(Card)`
    width: calc(50% - 10px);
    margin: 5px 5px;
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.color};
    border: 1px solid ${props => props.theme.cardBorder};
    /* padding: 0px 0px; */
`

export const TransactionHeading = styled(UI_Title)`
    margin: 0px;
    margin-top: 10px;
    margin-left: 12px; 
    margin-bottom: 0px;
    font-size: 16px !important;
`
export const TransactionDetailWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const TransactionDetailsFlexWrapper = styled.div`
    display: flex;
    align-items: center;
`
export const TransactionDetail = styled.span`
    font-size: 12px !important;
    margin-top: 0px;
    margin-left: 12px;
    color: grey
`
export const TransactionAmountDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`

export const TransactionDate = styled.span`
    font-size: 12px;
    margin-top: 0px;
    margin-right: 12px;
    color: grey;
`
export const TransactionAdditionalDetailWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`
export const TransactionDescription = styled.p`
    font-size: 13px;
    margin-right: 20px;
    color: grey;
    margin-top: 2px;
    margin-bottom: 2px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`
export const TransactionTags = styled.div`
display: flex;
    justify-content: end;
`