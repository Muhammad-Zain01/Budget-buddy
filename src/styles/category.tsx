import styled from "styled-components";
import { Card } from "@/common/ui-import";
import UI_Title from "@/components/ui/ui-title";
import UI_Button from "@/components/ui/ui-button";
import { isSelectedProp } from "./global";
export const CategoryWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: start;
`

export const CategoryCard = styled(Card)`
    width: calc(20% - 10px);
    margin: 5px 5px;
    background-color: ${(props) => props.theme.cardBackground};
    color: ${(props) => props.theme.color};
    border: 1px solid ${props => props.theme.cardBorder};
    padding: 15px 0px;
    position: relative;

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
    margin: 0px !important;
    margin-top: 10px;
    font-size: 15px !important;
    text-align: center;
`

export const CategoryFlexWrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const ContegoryMenuIconWrapper = styled.div`
    position: absolute;
    top: 10px;
    display: flex;
    align-items: center;
    right: 15px;
    
`
export const ContegoryMenuIconSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    border-radius: 100%;
    &:hover{
        background-color: #dadada51;
    }
    
`

