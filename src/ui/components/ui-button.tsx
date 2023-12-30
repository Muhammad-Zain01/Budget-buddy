import dynamic from "next/dynamic";
import { ChildNodeType } from "@/common/types";
import styled from "styled-components";
import { ButtonProps } from "antd";
const Button = dynamic(() => import("antd").then(mod => mod.Button), { ssr: false })

const MainButton = styled(Button)`
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.background};
`

const UI_Button: React.FC<ChildNodeType | ButtonProps> = ({ children, ...props }) => {
    return (
        <MainButton {...props}>
            {children}
        </MainButton>
    )
}
export default UI_Button;