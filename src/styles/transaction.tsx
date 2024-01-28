import styled from "styled-components";
import { Card } from "@/common/ui-import";
import UI_Title from "@/components/ui/ui-title";
import { isSelectedProp } from "./global";
export const TransactionWrapper = styled.div`
    display: flex;
`

export const TransactionCard = styled(Card)`
    width: calc(50% - 10px);
    margin: 5px 5px;
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.color};
    border: 1px solid ${props => props.theme.cardBorder};
    &:hover{
        border: 1px solid #949494;
    }
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
    color: grey;
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
export const TranactionItemsGridDiv = styled.div<isSelectedProp>`
    width: 11%;
    display: flex;
    flex-direction: column;
    align-items:center;
    margin: 2px;
    padding: 15px 25px;
    justify-content: center;
    border: 1px solid  ${props => props.$isSelected ? props.theme.borderColor : "#9e9e9e9a"};
    border-radius: 5px;
    flex-grow: 1;

    &:hover{
        border: 1px solid ${props => props.theme.borderColor};
    }
    
`