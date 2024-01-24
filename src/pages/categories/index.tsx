import { CategoryFlexWrapper, CategoryWrapper } from "@/styles/category";
import CategoryCard from "@/components/category-card";
import CategoryTabs from "@/components/category-tabs";
import { useState } from "react";
import { FormItem, Modal } from "@/ui/imports/ui-import";
import { Select } from "@/ui/imports/ui-import";
import { UI_Text } from "@/ui/components/ui-text";
import AddCategoryModal from "@/components/add-category-modal";
export type CategoryType = "expense" | "income"
export type Category = {
    icon: string;
    title: string;
    isChecked: boolean;
    type: CategoryType
}
export default function Category() {
    const [currentType, setCurrentType] = useState<CategoryType>('income')
    const [addCategoryModal, setAddCategoryModal] = useState<boolean>(false)
    const categories: Category[] = [
        { icon: 'user', title: "Personal", isChecked: true, type: "expense" },
        { icon: 'food', title: "Foods & Drink", isChecked: true, type: "expense" },
        { icon: 'transport', title: "Transport", isChecked: true, type: "expense" },
        { icon: 'grocery', title: "Grocery", isChecked: true, type: "expense" },
        { icon: 'travel', title: "Travel", isChecked: true, type: "expense" },
        { icon: 'entertainment', title: "Entertainment", isChecked: true, type: "expense" },
        { icon: 'fuel', title: "Fuel & Maintenance", isChecked: true, type: "expense" },
        { icon: 'bill', title: "Bills & Utilities", isChecked: true, type: "expense" },
        { icon: 'medical', title: "Medical", isChecked: true, type: "expense" },
        { icon: 'shopping', title: "Shopping", isChecked: true, type: "expense" },
        { icon: 'education', title: "Education", isChecked: true, type: "expense" },
        { icon: 'office', title: "Office", isChecked: true, type: "expense" },
        { icon: 'home', title: "Home", isChecked: true, type: "expense" },
        { icon: 'rent', title: "Rent Paid", isChecked: true, type: "expense" },
        { icon: 'loan', title: "Loan Paid", isChecked: true, type: "expense" },
        { icon: 'donation', title: "Donations / Charity", isChecked: true, type: "expense" },
        { icon: 'gift', title: "Gifts", isChecked: true, type: "expense" },
        { icon: 'family', title: "Family", isChecked: true, type: "expense" },
        { icon: 'fitness', title: "Health & Fitness", isChecked: true, type: "expense" },
        { icon: 'wedding', title: "Wedding", isChecked: true, type: "expense" },
        { icon: 'mobile', title: "Mobile", isChecked: true, type: "expense" },
        { icon: 'electronics', title: "Electronics", isChecked: true, type: "expense" },
        { icon: 'insurance', title: "Insurance", isChecked: true, type: "expense" },
        { icon: 'money', title: "Installment", isChecked: true, type: "expense" },
        { icon: 'expenses', title: "Other Expenses", isChecked: true, type: "expense" },

        { icon: 'salary', title: "Salary", isChecked: true, type: "income" },
        { icon: 'profits', title: "Business Income/Profit", isChecked: true, type: "income" },
        { icon: 'investment', title: "Investment", isChecked: true, type: "income" },
        { icon: 'commission', title: "Commission", isChecked: true, type: "income" },
        { icon: 'retirement', title: "Pension", isChecked: true, type: "income" },
        { icon: 'fund', title: "Allowance", isChecked: true, type: "income" },
        { icon: 'bonus', title: "Bonus", isChecked: true, type: "income" },
        { icon: 'wallet', title: "Pocket Money", isChecked: true, type: "income" },
        { icon: 'freelancer', title: "Freelance", isChecked: true, type: "income" },
        { icon: 'gift', title: "Gifts Received", isChecked: true, type: "income" },
        { icon: 'rent', title: "Rent Received", isChecked: true, type: "income" },
        { icon: 'loan', title: "Loan Received", isChecked: true, type: "income" },
        { icon: 'money', title: "Other Income", isChecked: true, type: "income" },
        { icon: 'savings', title: "Savings", isChecked: true, type: "income" },
    ]
    return (
        <div onClick={() => setAddCategoryModal(true)}>
            <CategoryTabs changeType={setCurrentType} />
            <CategoryFlexWrapper>
                <CategoryWrapper>
                    {categories && categories.filter(item => item.type === currentType).map((category, index) => <CategoryCard key={index} category={category} />)}
                </CategoryWrapper>
            </CategoryFlexWrapper>

            <AddCategoryModal open={addCategoryModal} setOpen={setAddCategoryModal} />
        </div>
    )
}
