import { ChildNodeType } from "@/common/types";
import styled, { css } from "styled-components";
import { DropdownProps } from "antd";
import { Dropdown as DD } from "../../common/ui-import";


export const DropdownCSS = css`
    .ant-dropdown-menu{
        background-color: ${props => props.theme.cardBackground} !important;
        padding: 0px;
    }
    .ant-dropdown-menu-item{
        padding: 0px !important;
    }
    .ant-dropdown-menu-item:hover{
        background-color: unset !important;
    }
    `
const DropDownMenu = styled(DD)`
`

const UI_Dropdown: React.FC<ChildNodeType | DropdownProps> = ({ children, ...props }) => {
    return (
        <DropDownMenu {...props}>
            {children}
        </DropDownMenu>
    )
}
export default UI_Dropdown;