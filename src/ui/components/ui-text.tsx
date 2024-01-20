import { ChildNodeType } from "@/common/types";
import { Text } from "../imports/ui-import"
import { TextProps } from "antd/es/typography/Text"

export const UI_Text: React.FC<ChildNodeType | TextProps> = ({ children, ...otherProps }) => {
    return (
        <Text {...otherProps}>{children}</Text>
    )
}