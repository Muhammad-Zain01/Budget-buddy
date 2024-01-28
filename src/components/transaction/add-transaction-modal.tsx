import UI_Modal from "@/components/ui/ui-modal";
import { useState } from "react";
import UI_Button from "@/components/ui/ui-button";
import { Icon } from "../icon";
import { AccountIconDiv } from "@/styles/account";
import { UI_Text } from "@/components/ui/ui-text";
import IncomeTransaction from "./income-transaction";
import ExpenseTransaction from "./expense-transaction";
import TransferTransaction from "./transfer-transaction";
import PeopleTransaction from "./people-transaction";


type ComponentProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
}
const AddTransactionModal: React.FC<ComponentProps> = ({ open, setOpen }) => {
    const [stage, setStage] = useState<number>(1)
    const [transactionType, setTransactionType] = useState<string>('');
    const TransactionType = [['profits', 'Income'], ['expenses', 'Expense'], ['loan', 'Transfer'], ['user', 'People']];
    const nextClick = (value: string[]) => {
        setTransactionType(value[1]);
        setStage(2)
    }
    const onSave = () => {
        // SAVE LOGIC SHOULD GO THERE
    }
    const onCancel = () => {
        if (stage > 1) {
            setStage(prev => prev - 1);
        } else {
            setStage(1);
            setTransactionType("");
            setOpen(false)
        }
    }
    return (
        <UI_Modal
            open={open}
            title={stage === 1 ? 'Select Transaction Type' : `Add ${transactionType} Transaction`}
            onCancel={onCancel}
            width={700}
            centered
            footer={stage === 1 ? false : <UI_Button type="primary" onClick={onSave}>Save</UI_Button>}
        >
            {
                stage === 1 ? (
                    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
                        {
                            TransactionType.map(item =>
                                <AccountIconDiv key={item[0]} $isSelected={transactionType == item[0] ? true : false} onClick={() => nextClick(item)}>
                                    <Icon icon={item[0]} size={50} />
                                    <UI_Text style={{ fontSize: 13, marginTop: 5 }}>{item[1]}</UI_Text>
                                </AccountIconDiv>
                            )
                        }
                    </div>
                ) : (
                    <>
                        {transactionType === "Income" && <IncomeTransaction />}
                        {transactionType === "Expense" && <ExpenseTransaction />}
                        {transactionType === "Transfer" && <TransferTransaction />}
                        {transactionType === "People" && <PeopleTransaction />}
                    </>
                )
            }
        </UI_Modal >
    )
}

export default AddTransactionModal;