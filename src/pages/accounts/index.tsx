import AccountCard from "@/components/account-card";
import AddAccountModal from "@/components/add-account-modal";
import { Add } from "@/components/icon";
import { AccountWrapper } from "@/styles/account";
import { AddButton } from "@/styles/global";
import { useState } from "react";
export default function Accounts() {
    const [isOpen, setIsOpen] = useState(false);
    const data = [
        { icon: 'bank', title: "Bank", isChecked: true, amount: '200' },
        { icon: 'bank', title: "Bank", isChecked: true, amount: '500' },
    ]
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
                <AddButton type='primary' icon={<Add size={18} />} onClick={() => setIsOpen(true)}>Add Account</AddButton>
            </div>
            <AccountWrapper>
                {data.map((item, index) => <AccountCard key={index} data={item} />)}
            </AccountWrapper>
            <AddAccountModal open={isOpen} setOpen={setIsOpen} />
        </>
    )
}

