import styled from "styled-components";
import { Card } from "@/ui/imports/ui-import";
import UI_Title from "@/ui/components/ui-title";
export const CategoryWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`

export const CategoryCard = styled(Card)`
    width: calc(20% - 10px);
    margin: 5px 5px;
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.color};
    border: 1px solid ${props => props.theme.cardBorder};
    padding: 10px 0px;

    &:hover{
        border: 1px solid #949494;
    }
    .ant-card-body{
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media only screen and (max-width: 1100px) {
        &{
            width: calc(25% - 10px);
        }
    }
    @media only screen and (max-width: 783px) {
        &{
            width: calc(33.33% - 10px);
        }
    }
    @media only screen and (max-width: 600px) {
        &{
            width: calc(50% - 10px);
        }
    }
    @media only screen and (max-width: 450px) {
        &{
            width: 100%;
        }
    }
`

export const CategoryHeading = styled(UI_Title)`
    margin: 0px;
    margin-top: 10px;
`