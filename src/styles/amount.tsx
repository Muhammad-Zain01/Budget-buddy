import styled from "styled-components";
import { Card } from "@/ui/imports/ui-import";
import UI_Title from "@/ui/components/ui-title";
export const AmmountWrapper = styled.div`
    display: flex;
`

export const AmmountCard = styled(Card)`
    width: 25%;
    /* min-width:140px; */
    margin: 0px 10px;
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.color};
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
    border: 1px solid ${props => props.theme.cardBorder};
    padding: 10px 0px;
`

export const AmmountHeading = styled(UI_Title)`
    margin: 0px;
    margin-top: 10px;
`