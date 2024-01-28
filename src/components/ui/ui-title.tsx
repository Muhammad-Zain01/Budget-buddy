import { ChildNodeType } from "@/common/types";
import styled from "styled-components";
import { Title } from "../../common/ui-import";
import { TitleProps } from "antd/es/typography/Title";

const TitleWrapper = styled(Title)`
    color: ${props => props.theme.color} !important;
    font-weight: 500 !important;
`

const UI_Title: React.FC<ChildNodeType | TitleProps> = ({ children, ...props }) => {
    return (
        <TitleWrapper {...props}>
            {children}
        </TitleWrapper>
    )
}
export default UI_Title;