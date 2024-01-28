import { ChangeEvent, useState } from "react";
import CalcModal from "../../features/Calculator/calculator-modal";
import TransactionAmount from "./transaction-amount";
import TransactionGrid from "./transaction-item-grid";

const IncomeTransaction = () => {
    const [isCalcOpen, setCalcOpen] = useState(false);
    const [transactionAmount, setTransactionAmount] = useState<number>(0);
    const items = [['transport', "Income"], ['food', "Expenses"],]
    const getResult = (value: number) => {
        setTransactionAmount(value)
        setCalcOpen(false);
    };
    const onAmountChange = (e: ChangeEvent<HTMLInputElement>) => setTransactionAmount(Number(e.currentTarget.value))
    return (
        <div>
            <TransactionAmount value={transactionAmount} onChange={onAmountChange} isCalcOpen={isCalcOpen} setCalcOpen={setCalcOpen} />
            <TransactionGrid label="Select Category" items={items} onClick={(value) => { console.log(value); }} selectedItem='income' />
            <TransactionGrid label="Select Account" items={items} onClick={(value) => { console.log(value); }} selectedItem='income' />
            <CalcModal open={isCalcOpen} setOpen={setCalcOpen} getResult={getResult} />
        </div>
    )
}

export default IncomeTransaction;