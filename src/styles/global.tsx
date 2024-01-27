import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
import { SelectBoxOptions } from "@/ui/components/ui-select";
import UI_Button from "@/ui/components/ui-button";

export const DashboardLink = styled(Link)`
    transition: none !important;
    &::before{
        transition: none !important;
    }
`
export const GlobalStyle = createGlobalStyle`
    ${SelectBoxOptions}
`;


export const AddButton = styled(UI_Button)`
    display: flex;
    align-items: center;
    padding: 20px;
    font-weight: 500;
    margin-bottom: 8px;
`