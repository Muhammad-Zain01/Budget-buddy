import { ChildNodeType } from "@/common/types";
import styled from "styled-components";
import { DropdownProps } from "antd";
import { Dropdown as DD } from "../imports/ui-import";

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