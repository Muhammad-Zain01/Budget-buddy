import React from "react";
import { TransactionCard as Card, TransactionAdditionalDetailWrapper, TransactionAmountDiv, TransactionDate, TransactionDescription, TransactionDetail, TransactionDetailWrapper, TransactionDetailsFlexWrapper, TransactionHeading, TransactionTags } from "@/styles/transaction";
import Amount from "./amount";
import { Icon } from "./icon";
import DropMenu from "./drop-menu";
import { MenuProps } from "antd";
import { Tag } from "@/ui/imports/ui-import";
type ComponentProps = {
    data: {
        icon: string;
        title: string;
        detail: string;
        amount: string;
        date: string;
        description?: string;
        tags?: string[];
    }
}
const TransactionCard: React.FC<ComponentProps> = ({ data }): JSX.Element => {
    const { icon, title, detail, amount, date, description, tags } = data

    const TransactionMenu: MenuProps['items'] = [
        {
            key: '1',
            label: "Active",
        }
    ];
    return (
        <Card>
            <TransactionDetailWrapper>
                <TransactionDetailsFlexWrapper>
                    <Icon icon={icon} size={30} />
                    <div>
                        <TransactionHeading level={1}>{title}</TransactionHeading>
                        <TransactionDetail>{detail}</TransactionDetail>
                    </div>
                </TransactionDetailsFlexWrapper>

                <TransactionDetailsFlexWrapper>
                    <TransactionAmountDiv>
                        <Amount amount={amount} />
                        <TransactionDate>{date}</TransactionDate>
                    </TransactionAmountDiv>
                    <DropMenu items={TransactionMenu} />
                </TransactionDetailsFlexWrapper>
            </TransactionDetailWrapper>
            <TransactionAdditionalDetailWrapper>
                <TransactionDescription>
                    {description}
                </TransactionDescription>
                {
                    tags && (
                        <TransactionTags>
                            {
                                tags.map(item => <Tag color="blue">{item}</Tag>)
                            }
                        </TransactionTags>
                    )
                }
            </TransactionAdditionalDetailWrapper>
        </Card>
    )

}

export default TransactionCard;