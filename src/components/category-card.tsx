import React from "react";
import { CategoryCard as Card, CategoryHeading, CategoryMenu } from "@/styles/category";
import { Icon } from "./icon";
import UI_Switch from "@/ui/components/ui-switch";
import Amount from "./amount";
import DropMenu from "./drop-menu";
import { MenuProps } from "antd";

type ComponentProps = {
    category: {
        icon: string;
        title: string;
        isChecked: boolean;
    }
}
const CategoryCard: React.FC<ComponentProps> = ({ category }): JSX.Element => {
    const { icon, title, isChecked } = category

    const CategoryMenuItems: MenuProps['items'] = [{
        key: '1',
        label: "Active",
    }
    ];
    return (
        <Card>
            <CategoryMenu>
                <DropMenu items={CategoryMenuItems} />
            </CategoryMenu>
            <Icon icon={icon} size={50} />
            <CategoryHeading level={5} style={{}}>{title}</CategoryHeading>
            {/* <Amount amount={'123'} /> */}
            {/* <UI_Switch size="small" defaultChecked={isChecked} /> */}
        </Card>
    )
}

export default CategoryCard;