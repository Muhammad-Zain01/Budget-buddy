import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
import { SelectBoxOptions } from "@/ui/components/ui-select";
import UI_Button from "@/ui/components/ui-button";
import { UI_Text } from "@/ui/components/ui-text";

export type isSelectedProp = {
    $isSelected?: boolean;
}
type RowProp = {
    $row?: boolean;
}

export const DashboardLink = styled(Link)`
    transition: none !important;
    &::before{
        transition: none !important;
    }
`
export const GlobalStyle = createGlobalStyle`
    ${SelectBoxOptions}
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button {
        display: none;
    }
`;


export const AddButton = styled(UI_Button)`
    display: flex;
    align-items: center;
    padding: 20px;
    font-weight: 500;
    margin-bottom: 8px;
`
export const AddButtonWraper = styled.div`
    display: flex;
    justify-content: end;
`
export const FormItemContainer = styled.div<RowProp>`
    display: flex;
    flex-direction: ${props => props.$row ? 'row' : 'column'};
    margin-top:18px;
`
export const FormItemLabel = styled(UI_Text)`
    margin-bottom: 8px; 
`