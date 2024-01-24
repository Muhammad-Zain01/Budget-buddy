import type { SelectProps } from "antd"
import { Select } from "../imports/ui-import"
import styled, { css } from "styled-components"

export const SelectBoxOptions = css`
    .ant-select-dropdown{
        background: ${props => props.theme.background} !important;
        color: ${props => props.theme.color} !important;
        .ant-select-item{
            background: ${props => props.theme.background} !important;
            color: ${props => props.theme.color} !important;
        }
        .ant-select-item-option-selected{
            /* background:white !important; */
            border: 1px solid white;
        }
    }
`

const SelectWrapper = styled(Select)`
    border-radius: 4px;
    height: 44px;
    .ant-select-selector, .ant-select-arrow{
        background: ${props => props.theme.background} !important;
        color: ${props => props.theme.color} !important;
    }
    .ant-select-open .ant-select-selector{
        background: ${props => props.theme.background} !important;
        color: ${props => props.theme.color} !important;
    }
`

const UI_Select: React.FC<SelectProps> = ({ ...props }) => {
    return (
        <SelectWrapper {...props} />
    )
}
export default UI_Select;