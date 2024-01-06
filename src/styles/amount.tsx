import styled from "styled-components";
import { Card } from "@/ui/imports/ui-import";
import UI_Title from "@/ui/components/ui-title";
export const AmmountWrapper = styled.div`
    display: flex;
`

export const AmmountCard = styled(Card)`
    width: calc(50% - 10px);
    margin: 5px 5px;
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.color};
    border: 1px solid ${props => props.theme.cardBorder};
    /* padding: 0px 0px; */
`

export const AmmountHeading = styled(UI_Title)`
    margin: 0px;
    margin-top: 10px;
`