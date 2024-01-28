import styled from "styled-components";
import { SwitchProps } from "antd";
import { Switch } from "../../common/ui-import";

const SwitchButton = styled(Switch)`
    /* color: ${(props) => props.theme.color}; */
    /* background-color: ${(props) => props.theme.background}; */
`

const UI_Switch: React.FC<SwitchProps> = ({ ...props }) => (<SwitchButton {...props} />)
export default UI_Switch;