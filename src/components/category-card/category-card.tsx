import React from "react";
import { CategoryCard as Card, CategoryHeading } from "@/styles/category";
import { Icons } from "../icon/Icon";

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
            <Icons icon={icon} />
            <CategoryHeading level={5} style={{ fontSize: 15 }}>{title}</CategoryHeading>
            <UI_Switch size="small" defaultChecked={isChecked} />
        </Card>
    )

}

export default CategoryCard;