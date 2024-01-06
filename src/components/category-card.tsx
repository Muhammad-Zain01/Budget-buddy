import React from "react";
import { CategoryCard as Card, CategoryHeading } from "@/styles/category";
import { Icon } from "./icon";

import UI_Switch from "@/ui/components/ui-switch";

type ComponentProps = {
    category: {
        icon: string;
        title: string;
        isChecked: boolean;
    }
}
const CategoryCard: React.FC<ComponentProps> = ({ category }): JSX.Element => {
    const { icon, title, isChecked } = category
    return (
        <Card>
            <Icon icon={icon} size={50} />
            <CategoryHeading level={5} style={{ fontSize: 15, textAlign: 'center' }}>{title}</CategoryHeading>
            <UI_Switch size="small" defaultChecked={isChecked} />
        </Card>
    )

}

export default CategoryCard;