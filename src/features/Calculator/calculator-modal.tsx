import UI_Modal from "@/components/ui/ui-modal";
import CalculatorApp from "./Calculator";
import styled from "styled-components";


const CalculatorModal = styled(UI_Modal)`
    .ant-modal-content{
        padding-bottom: 2px !important;
        padding-right: 2px !important;
        padding-left: 2px !important;
        padding-top: 12px !important;
        /* padding: 0px !important; */
    }
`
type ComponentProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
    getResult: (value: number) => void
}
const CalcModal: React.FC<ComponentProps> = ({ open, setOpen, getResult }) => {
    const onCancel = () => {
        setOpen(false);
    }
    return (
        <CalculatorModal
            open={open}
            title={false}
            onCancel={onCancel}
            width={350}
            centered
            footer={false}
        >
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 25 }}>
                <CalculatorApp getResult={getResult} />
            </div>
        </CalculatorModal >
    )
}

export default CalcModal;