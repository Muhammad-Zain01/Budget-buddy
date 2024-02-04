import React from "react";
import { CategoryCard as Card, CategoryHeading } from "@/styles/category";
import { Icon } from "../icon";
import CategoryControlMenu from "./category-control-menu";

type ComponentProps = {
    category: {
        id: number;
        icon: string;
        categoryName: string;
        isPrimary: boolean;
    }
}
const CategoryCard: React.FC<ComponentProps> = ({ category }): JSX.Element => {
    const { id, icon, categoryName, isPrimary } = category

    return (
        <Card>
            <CategoryControlMenu isPrimary={isPrimary} id={id} />
            <Icon icon={icon} size={50} style={{ marginTop: 10 }} />
            <CategoryHeading level={5} style={{}}>{categoryName}</CategoryHeading>
        </Card>
    )
}

export default CategoryCard;