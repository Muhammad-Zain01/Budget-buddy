import styled from "styled-components";
import { FormItem as FormItemLabel, Input as Inp } from "../../common/ui-import";
import { InputProps } from "antd";

const Input = styled(Inp)`
    color: ${props => props.theme.color} !important;
    padding: 10px 10px;
    background-color: ${props => props.theme.cardBackground};
    
    input{
        color: ${props => props.theme.color};
        background-color: ${props => props.theme.cardBackground};
    }
    &::placeholder{
        color: #b8b8b8ad
    }
`
const FormItem = styled(FormItemLabel)`
    margin-bottom: 0px !important;
    .ant-form-item-explain-error{
        margin-top: 4px  !important;
        font-size: 14px !important;
    }
`
type ComponentProps = {
    help?: string;
    validateStatus?: 'error' | 'success' | 'warning' | 'validating';
}

const UI_Input: React.FC<ComponentProps | InputProps> = ({ help, validateStatus, ...props }) => {
    return (
        <FormItem className="testtest" hasFeedback help={help} validateStatus={validateStatus}>
            <Input {...props} />
        </FormItem>
    )
}
export default UI_Input;