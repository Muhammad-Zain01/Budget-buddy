import UI_Modal from "@/ui/components/ui-modal";
import { ChangeEvent, useState } from "react";
import UI_Button from "@/ui/components/ui-button";
import { AccountBalanceType, AccountGridWrapper } from "@/styles/account";
import UI_Input from "@/ui/components/ui-input";
import AccountGrid from "./account-grid";
import { FormItemContainer, FormItemLabel } from "@/styles/global";
import { AccountGridItems } from "@/common/common";
import useGridSelection from "@/hooks/useGridSelection";
import useFormState from "@/hooks/useFormState";

type ComponentProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
}
type FormState = {
    isPositive: boolean;
    accountName: string;
    accountBalance: number;
}
const AddAccountModal: React.FC<ComponentProps> = ({ open, setOpen }) => {
    const [stage, setStage] = useState<number>(1)
    const { label, type, setType } = useGridSelection(AccountGridItems)
    const formState: FormState = { isPositive: false, accountName: "", accountBalance: 0 }
    const { form, reset, setValue } = useFormState<FormState>(formState)
    const { isPositive, accountName, accountBalance } = form;

    const NextStage = (value: string[]) => {
        setType(value[0]);
        setStage(2)
    }
    const onSave = () => {
        // SAVE LOGIC SHOULD GO THERE
    }
    const onCancel = () => {
        if (stage > 1) {
            reset();
            setStage(prev => prev - 1);
        } else {
            setStage(1);
            setType("");
            setOpen(false)
        }
    }
    return (
        <UI_Modal
            open={open}
            title={stage === 1 ? 'Select Account Type' : `Add ${label && label[1]} Account`}
            onCancel={onCancel}
            centered
            footer={stage === 1 ? false : <UI_Button type="primary" onClick={onSave}>Save</UI_Button>}
        >
            {
                stage === 1 ? (
                    <AccountGridWrapper>
                        {
                            AccountGridItems.map((item, idx) =>
                                <AccountGrid
                                    key={idx}
                                    item={item}
                                    selected={type}
                                    onClick={NextStage}
                                />
                            )
                        }
                    </AccountGridWrapper>
                ) : (
                    <div>
                        <FormItemContainer>
                            <FormItemLabel>{type === 'user' ? "Person Name" : 'Account Name'}</FormItemLabel>
                            <UI_Input
                                value={accountName}
                                style={{ marginTop: 5 }}
                                placeholder={`Enter ${type === 'user' ? "Person Name" : 'Account Name'}...`}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue<string>("accountName", e.currentTarget.value)}
                            />
                        </FormItemContainer>
                        <FormItemContainer>
                            <FormItemLabel>Enter your opening balance</FormItemLabel>
                            <UI_Input
                                type="number"
                                value={accountBalance}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setValue<number>('accountBalance', Number(e.currentTarget.value))}
                                style={{ marginTop: 5 }}
                                placeholder={`Enter Balance...`}
                            />
                        </FormItemContainer>
                        <FormItemContainer $row={true}>
                            <AccountBalanceType onClick={() => setValue<boolean>("isPositive", true)} $isSelected={isPositive}>
                                {type === "user" ? "Receivable" : "Postive"}
                            </AccountBalanceType>
                            <AccountBalanceType onClick={() => setValue<boolean>("isPositive", false)} $isSelected={!isPositive}>
                                {type === "user" ? "Payable" : "Negative"}
                            </AccountBalanceType>
                        </FormItemContainer>
                    </div>
                )
            }
        </UI_Modal >
    )
}

export default AddAccountModal;