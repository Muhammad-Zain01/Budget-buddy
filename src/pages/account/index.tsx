import AccountCard from "@/components/account-card";
import { AccountWrapper } from "@/styles/account";
export default function Accounts() {
    const data = [
        { icon: 'bank', title: "Bank", isChecked: true, amount: '200' },
        { icon: 'bank', title: "Bank", isChecked: true, amount: '500' },
    ]
    return (
        <>
            <AccountWrapper>
                {data.map((item, index) => <AccountCard key={index} data={item} />)}
            </AccountWrapper>
        </>
    )
}

