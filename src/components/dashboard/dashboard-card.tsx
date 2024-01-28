import { DashboardCard as Card, DIconWraper, DashboardCardWrapper, DashboardCardlabel, IconDiv, WalletIcon } from "@/styles/dashboard";
import Amount from "../common/amount";
import UI_Title from "@/components/ui/ui-title";
import React from "react";

type ComponentProps = {
    label: string;
    amount: string;
    icon: React.ReactNode;
}
const DashboardCard: React.FC<ComponentProps> = ({ label, amount, icon }): JSX.Element => {
    return (
        <Card>
            <DashboardCardWrapper>
                <DIconWraper>
                    <IconDiv>
                        {icon}
                    </IconDiv>
                </DIconWraper>
                <div>
                    <Amount amount={amount} weight={600} size={23} />
                    <DashboardCardlabel>{label}</DashboardCardlabel>
                </div>
            </DashboardCardWrapper>
        </Card>
    )
}

export default DashboardCard;