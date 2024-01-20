import { ChildNodeType } from "@/common/types"
import { Text } from "../imports/ui-import"

export const UI_Text: React.FC<ChildNodeType> = ({ children }) => {
    return (
        <Text>{children}</Text>
    )
}