import { CategoryWrapper } from "@/styles/category";
import CategoryCard from "@/components/category-card/category-card";
export default function Category() {
    const categories = [
        { icon: 'user', title: "Personal", isChecked: true },
        { icon: 'food', title: "Foods & Drink", isChecked: true },
        { icon: 'transport', title: "Transport", isChecked: false },
    ]
    return (
        <>
            <CategoryWrapper>
                {categories.map((category, index) => <CategoryCard key={index} category={category} />)}
            </CategoryWrapper>
        </>
    )
}
