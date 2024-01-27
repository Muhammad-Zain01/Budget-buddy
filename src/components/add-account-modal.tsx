import UI_Modal from "@/ui/components/ui-modal";
import { useState } from "react";
import UI_Button from "@/ui/components/ui-button";
import { Icon } from "./icon";
import { AccountBalanceType, AccountIconDiv } from "@/styles/account";
import { UI_Text } from "@/ui/components/ui-text";
import { FormItem } from "@/ui/imports/ui-import";
import UI_Input from "@/ui/components/ui-input";

type ComponentProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
}
const AddAccountModal: React.FC<ComponentProps> = ({ open, setOpen }) => {
    const [stage, setStage] = useState<number>(1)
    const [accountType, setAccountType] = useState<string>('');
    const [isPositive, setIsPostive] = useState<boolean>(true)
    const [accountName, setAccountName] = useState<string>('');
    const [accountBalance, setAccountBalance] = useState<number>(0);
    const AccountCategory = [['money', 'Cash'], ['bank', 'Bank'], ['user', 'Person']];
    const accountTitle = AccountCategory.find((item) => item[0] == accountType);
    const nextClick = (value: string[]) => {
        setAccountType(value[0]);
        setStage(2)
    }
    const onSave = () => {
        // SAVE LOGIC SHOULD GO THERE
    }
    return (
        <UI_Modal
            open={open}
            title={stage === 1 ? 'Select Account Type' : `Add ${accountTitle && accountTitle[1]} Account`}
            onCancel={() => { setStage(1); setAccountType("money"); setIsPostive(true); setOpen(false) }}
            centered
            footer={stage === 1 ? false : <UI_Button type="primary" onClick={onSave}>Save</UI_Button>}
        >
            {
                stage === 1 ? (
                    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
                        {
                            AccountCategory.map(item =>
                                <AccountIconDiv key={item[0]} isSelected={accountType == item[0] ? true : false} onClick={() => nextClick(item)}>
                                    <Icon icon={item[0]} size={40} />
                                    <UI_Text style={{ fontSize: 13, marginTop: 5 }}>{item[1]}</UI_Text>
                                </AccountIconDiv>
                            )
                        }
                    </div>
                ) : (
                    <div>
                        <div>
                            <UI_Text>{accountType === 'user' ? "Person Name" : 'Account Name'}</UI_Text>
                            <UI_Input style={{ marginTop: 5 }} placeholder={`Enter ${accountType === 'user' ? "Person Name" : 'Account Name'}...`} />
                        </div>
                        <div style={{ marginTop: 10 }}>
                            <UI_Text>Enter your opening balance</UI_Text>
                            <UI_Input type="number" style={{ marginTop: 5 }} placeholder={`Enter Balance...`} />
                        </div>
                        <div style={{ marginTop: 10, display: 'flex' }}>
                            <AccountBalanceType onClick={() => setIsPostive(true)} isSelected={isPositive}>
                                {accountType === "user" ? "Receivable" : "Postive"}
                            </AccountBalanceType>
                            <AccountBalanceType onClick={() => setIsPostive(false)} isSelected={!isPositive}>
                                {accountType === "user" ? "Payable" : "Negative"}
                            </AccountBalanceType>
                        </div>
                    </div>
                )
            }
        </UI_Modal >
    )
}

export default AddAccountModal;