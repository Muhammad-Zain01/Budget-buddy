import UI_Button from "@/ui/components/ui-button";
import { UI_Text } from "@/ui/components/ui-text";
import UI_Title from "@/ui/components/ui-title";
import Image from "next/image";
import styled from "styled-components";

export const AuthWrapper = styled.div`
    display: flex; 
    justify-content: center;
    height: 98vh;
`
export const AuthContainer = styled.div`
    display: flex; 
    width: 90%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: 70px 0px;
    min-height: 700px;
    background: white;
    
    @media only screen and (max-width:490px) {
        font-size: 24px !important;
    }
`

export const AuthBox = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.type === 'illustration' ? "linear-gradient(120deg, #3563c5,#2250b2)" : "white"};
    @media only screen and (max-width:1165px) {
        width: ${props => props.type === 'illustration' ? 0 : 100}%;
        ${props => props.type === 'illustration' && 'display: none !important;'}
    }
`

export const AuthFormWrapper = styled.div`
    width: 80%;
    @media only screen and (max-width:370px) {
        width: 85%;
    }
`
export const FieldsWrapper = styled.div`
    margin-top: 15px;
`
export const AuthButton = styled(UI_Button)`
    width: 100%;
    height: 50px;
    margin-top: 30px;
    margin-bottom: 30px;
    color: white !important;
    background: linear-gradient(120deg, #3563c5,#2250b2) !important;
    border: none;
`
export const AuthHeadingWrapper = styled.div`
    padding: 15px 0px;
`
export const AuthTitle = styled(UI_Title)`
    margin: 0px !important;
    margin-bottom: 5px !important;

    @media only screen and (max-width:580px) {
        font-size: 27px !important;
    }
    /* @media only screen and (max-width:490px) {
        font-size: 24px !important;
    } */
    @media only screen and (max-width:450px) {
        text-align: center;
    }
`
export const AuthChanger = styled(UI_Text)`
    text-align: center !important;
    width: 100%;
    display: block;
`
export const AuthTagline = styled(UI_Text)`
    width: 100%;
    display: block !important;
    @media only screen and (max-width:450px) {
        text-align: center;
        font-size: 12px !important;
    }
`
export const AuthIllustrationImage = styled(Image)`
    width: 600px !important;
    height: 600px !important;
    position: unset !important;
    
    @media only screen and (max-width:1272px) {
        width: 500px !important;
        height: 500px !important;
    }
    @media only screen and (max-width:1165px) {
        width: 300px !important;
        height: 500px !important;
    }
`
export const AuthLabel = styled(UI_Text)`
    display: block;
    margin-bottom: 4px;
`