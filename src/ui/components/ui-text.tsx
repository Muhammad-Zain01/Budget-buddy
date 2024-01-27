import { ChildNodeType } from "@/common/types";
import { Text } from "../imports/ui-import"
import { TextProps } from "antd/es/typography/Text"
import styled from "styled-components";

const TextWrapper = styled(Text)`
    color: ${props => props.theme.color};
    background: ${props => props.theme.cardBackground};
`
export const UI_Text: React.FC<ChildNodeType | TextProps> = ({ children, ...otherProps }) => {
    return (
        <TextWrapper {...otherProps}>{children}</TextWrapper>
    )
}