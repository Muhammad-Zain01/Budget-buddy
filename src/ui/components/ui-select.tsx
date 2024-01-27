import type { SelectProps } from "antd"
import { Select } from "../imports/ui-import"
import styled, { css } from "styled-components"

export const SelectBoxOptions = css`
    .ant-select-dropdown{
        background: ${props => props.theme.cardBackground} !important;
        color: ${props => props.theme.color} !important;
        
        .ant-select-item{
            background: ${props => props.theme.cardBackground} !important;
            color: ${props => props.theme.color} !important;
        }
        .ant-select-item-option-selected{
            background: ${props => props.theme.gradient} !important;
            color: white !important;
        }
       
         .ant-sselect-item-option-active:not(.ant-select-item-option-selected){
            background: #a1a1a170 !important;
         }
    }
`

const SelectWrapper = styled(Select)`
    border-radius: 4px;
    height: 44px;

    .ant-select-selection-item{
        color: ${props => props.theme.color} !important;
    }
    .ant-select-selector, .ant-select-arrow{
        background: ${props => props.theme.cardBackground} !important;
        color: ${props => props.theme.color} !important;
    }
    .ant-select-open .ant-select-selector{
        background: ${props => props.theme.cardBackground} !important;
        color: ${props => props.theme.color} !important;
    }
`

const UI_Select: React.FC<SelectProps> = ({ ...props }) => {
    return (
        <SelectWrapper {...props} />
    )
}
export default UI_Select;