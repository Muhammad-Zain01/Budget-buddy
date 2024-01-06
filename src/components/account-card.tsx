import React from "react";
import { AmmountCard as Card, AmmountHeading } from "@/styles/amount";
import Amount from "./amount";
import { Dots } from "./icon";
import { Icon } from "./icon";

type ComponentProps = {
    data: {
        icon: string;
        title: string;
        isChecked: boolean;
    }
}
const AccountCard: React.FC<ComponentProps> = ({ data }): JSX.Element => {
    const { icon, title, isChecked } = data
    return (
        <Card>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Icon icon={icon} size={30} />
                    <AmmountHeading level={1} style={{ marginLeft: 12, fontSize: 16 }}>{title}</AmmountHeading>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Amount />
                    <Dots size={16} />
                </div>
            </div>
        </Card>
    )

}

export default AccountCard;