import { ChildNodeType } from "@/common/types";
import { Text } from "@/common/ui-import";
import { TextProps } from "antd/es/typography/Text"
import styled from "styled-components";

const TextWrapper = styled(Text)`
    color: ${props => props.theme.color};
`
export const UI_Text: React.FC<ChildNodeType | TextProps> = ({ children, ...otherProps }) => {
    return (
        <TextWrapper {...otherProps}>{children}</TextWrapper>
    )
}