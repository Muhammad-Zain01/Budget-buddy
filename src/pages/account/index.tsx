import AccountCard from "@/components/account-card/account-card";
import { CategoryWrapper } from "@/styles/category";

export default function Accounts() {
    const data = [
        { icon: 'bank', title: "Bank", isChecked: true },
        { icon: 'cash', title: "Cash", isChecked: true },
    ]
    return (
        <>
            <CategoryWrapper>
                {data.map((item, index) => <AccountCard key={index} data={item} />)}
            </CategoryWrapper>
        </>
    )
}

