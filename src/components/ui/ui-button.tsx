import { ChildNodeType } from "@/common/types";
import styled from "styled-components";
import { ButtonProps } from "antd";
import { Button } from "../../common/ui-import";

const MainButton = styled(Button)`
    color: ${(props) => props.type != 'primary' && props.theme.color};
    border-radius: 4px;
    background-color: ${(props) => props.type != 'primary' && props.theme.cardBackground};
`

const UI_Button: React.FC<ChildNodeType | ButtonProps> = ({ children, ...props }) => {
    return (
        <MainButton {...props}>
            {children}
        </MainButton>
    )
}
export default UI_Button;