import React from "react";
import { CategoryCard as Card, CategoryHeading } from "@/styles/category";
import { Icon } from "./icon";
import CategoryControlMenu from "./category-control-menu";

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
            <CategoryControlMenu />
            <Icon icon={icon} size={50} style={{marginTop: 10}} />
            <CategoryHeading level={5} style={{}}>{title}</CategoryHeading>
        </Card>
    )
}

export default CategoryCard;