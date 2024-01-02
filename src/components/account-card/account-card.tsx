import React from "react";

import { Icons } from "../icon/Icon";
import { AmmountCard as Card, AmmountHeading } from "@/styles/amount";
import Amount from "../amount/amount";
import Image from "next/image";

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
                <div style={{ display: "flex", alignItems: "center", justifyContent: 'start' }}>
                    <span style={{ padding: "0px 10px" }}>
                        <Image src="/assets/icons/bank.png" alt="icon" width={40} height={40} />
                    </span>
                    <div>
                        <AmmountHeading level={5} style={{ fontSize: 16 }}>{title}</AmmountHeading>
                    </div>
                </div>
                <Amount />
            </div>
        </Card>
    )

}

export default AccountCard;