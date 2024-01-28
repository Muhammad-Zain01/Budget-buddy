import DashboardCard from "@/components/dashboard/dashboard-card";
import { Expense, Income, Savings, Wallet } from "@/components/icon";
import { DashboardCardsWrapper } from "@/styles/dashboard";
import { NextPage } from "next";

const Dashboard: NextPage = (): JSX.Element => {
    return (
        <>
            <DashboardCardsWrapper>
                <DashboardCard label="Balance" amount="2190.90" icon={<Wallet color='white' size={25} />} />
                <DashboardCard label="Income" amount="21.30" icon={<Income color='white' size={25} />} />
                <DashboardCard label="Savings" amount="1875.20" icon={<Savings color='white' size={25} />} />
                <DashboardCard label="Expenses" amount="19.112" icon={<Expense color='white' size={25} />} />
            </DashboardCardsWrapper>
        </>
    )
}
export default Dashboard