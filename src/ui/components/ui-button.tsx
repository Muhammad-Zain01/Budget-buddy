import { ChildNodeType } from "@/common/types";
import styled from "styled-components";
import { ButtonProps } from "antd";
import { Button } from "../imports/ui-import";

const MainButton = styled(Button)`
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.background};
`

const UI_Button: React.FC<ChildNodeType | ButtonProps> = ({ children, ...props }) => {
    return (
        <MainButton {...props}>
            {children}
        </MainButton>
    )
}
export default UI_Button;