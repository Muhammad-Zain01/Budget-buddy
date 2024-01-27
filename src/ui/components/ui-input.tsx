import styled from "styled-components";
import { Input as Inp } from "../imports/ui-import";
import { InputProps } from "antd";

const Input = styled(Inp)`
    color: ${props => props.theme.color} !important;
    padding: 10px 10px;
    background-color: ${props => props.theme.cardBackground};
    &::placeholder{
        color: #b8b8b8ad
    }
`

const UI_Input: React.FC<InputProps> = ({ ...props }) => {
    return (
        <Input {...props} />
    )
}
export default UI_Input;