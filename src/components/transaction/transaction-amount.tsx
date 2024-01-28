import UI_Input from "@/components/ui/ui-input"
import { Icon } from "../icon";
import { UI_Text } from "@/components/ui/ui-text";
import { ChangeEventHandler } from "react";

type ComponentProps = {
    isCalcOpen: boolean;
    setCalcOpen: (value: boolean) => void;
    value: number;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
const TransactionAmount: React.FC<ComponentProps> = ({ isCalcOpen, setCalcOpen, value, onChange }) => {
    const CalculatorOpen = () => {
        setCalcOpen(true);
    }
    return (
        <>
            <div style={{ display: 'flex' }}>
                <UI_Input prefix={"$"} value={value} type='number' onChange={onChange} placeholder="Enter Transaction Amount" suffix={<Icon onClick={CalculatorOpen} icon="calculator" size={35} />} />
            </div>
        </>
    )
}

export default TransactionAmount;