import styled from "styled-components"
import { Modal } from "../imports/ui-import"
import { ModalProps } from "antd"
import { ChildNodeType } from "@/common/types"

const ModalWrapper = styled(Modal)`
    .ant-modal-content, .ant-modal-title, .ant-modal-close-icon{
        background: ${props => props.theme.cardBackground};
        color: ${props => props.theme.color};
    }
`

const UI_Modal: React.FC<ChildNodeType | ModalProps> = ({ children, ...props }): JSX.Element => {
    return (
        <ModalWrapper maskClosable={false} {...props}>
            {children}
        </ModalWrapper>
    )
}

export default UI_Modal;