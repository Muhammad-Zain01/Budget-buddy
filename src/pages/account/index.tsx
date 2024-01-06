import AccountCard from "@/components/account-card";
import { CategoryWrapper } from "@/styles/category";

export default function Accounts() {
    const data = [
        { icon: 'bank', title: "Bank", isChecked: true },
        { icon: 'money', title: "Money", isChecked: true },
        { icon: 'gift', title: "Cash", isChecked: true },
        { icon: 'profits', title: "Profit", isChecked: true },
        { icon: 'profits', title: "Profit", isChecked: true },
    ]
    return (
        <>
            <CategoryWrapper>
                {data.map((item, index) => <AccountCard key={index} data={item} />)}
            </CategoryWrapper>
        </>
    )
}

