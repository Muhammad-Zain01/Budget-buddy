import styled from "styled-components";
import { Input as Inp } from "../imports/ui-import";
import { InputProps } from "antd";

const Input = styled(Inp)`
    color: ${props => props.theme.color} !important;
    font-weight: 500 !important;
    padding: 10px 10px;
    background-color: #fcfcfc;
 
`

const UI_Input: React.FC<InputProps> = ({ ...props }) => {
    return (
        <Input {...props} />
    )
}
export default UI_Input;