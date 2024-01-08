import React from "react";
import { AccountCard as Card, AccountHeading, AccountDetailDiv, FlexWrapper } from "@/styles/account";
import Amount from "./amount";
import { Icon } from "./icon";
import DropMenu from "./drop-menu";
import { MenuProps } from "antd";
type ComponentProps = {
    data: {
        icon: string;
        title: string;
        isChecked: boolean;
        amount: string;
    }
}
const AccountCard: React.FC<ComponentProps> = ({ data }): JSX.Element => {
    const { icon, title, isChecked, amount } = data

    const AmountMenu: MenuProps['items'] = [
        {
            key: '1',
            label: "Active",
        }
    ];

    return (
        <Card>
            <AccountDetailDiv>
                <FlexWrapper>
                    <Icon icon={icon} size={30} />
                    <AccountHeading level={1}>{title}</AccountHeading>
                </FlexWrapper>
                <FlexWrapper>
                    <Amount amount={amount} />
                    <DropMenu items={AmountMenu} />
                </FlexWrapper>
            </AccountDetailDiv>
        </Card>
    )

}

export default AccountCard;