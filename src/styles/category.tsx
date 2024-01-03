import styled from "styled-components";
import { Card } from "@/ui/imports/ui-import";
import UI_Title from "@/ui/components/ui-title";
export const CategoryWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const CategoryCard = styled(Card)`
    width: 18%;
    min-width:140px;
    margin: 5px 5px;
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.color};
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
    border: 1px solid ${props => props.theme.cardBorder};
    padding: 10px 0px;
    .ant-card-body{
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const CategoryHeading = styled(UI_Title)`
    margin: 0px;
    margin-top: 10px;
`