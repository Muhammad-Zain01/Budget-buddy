import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
import { SelectBoxOptions } from "@/components/ui/ui-select";
import UI_Button from "@/components/ui/ui-button";
import { UI_Text } from "@/components/ui/ui-text";
import { DropdownCSS } from "@/components/ui/ui-dropdown";

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
    ${DropdownCSS}
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
export const IconGridWrapper = styled.div`
    display: flex;
    justify-content: center ;
    width: 100%;
    flex-wrap: wrap;
`
export const IconGrid = styled.div<isSelectedProp>`
    color: ${(props) => props.theme.color};
    border: 1px solid ${props => props.$isSelected ? "#949494" : props.theme.cardBorder};
    padding: 12px;
    width: 9%;
    min-width: 35px;
    margin:2px;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover{
        border: 1px solid #949494;
    }
`

export const IconDivWrapper = styled.div`
    display: flex;
`
export const IconDivControls = styled.div`
    display: flex;
    cursor: pointer;
    align-items:center 
`
