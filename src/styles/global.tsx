import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";
import { SelectBoxOptions } from "@/ui/components/ui-select";

export const DashboardLink = styled(Link)`
    transition: none !important;
    &::before{
        transition: none !important;
    }
`
export const GlobalStyle = createGlobalStyle`
    ${SelectBoxOptions}
`;

