import { CategoryFlexWrapper, CategoryWrapper } from "@/styles/category";
import CategoryCard from "@/components/category/category-card";
import { useState } from "react";
import AddCategoryModal from "@/components/category/add-category-modal";
import { Add } from "@/components/icon";
import { AddButton } from "@/styles/global";
import UI_Tabs from "@/components/ui/ui-tabs";
import { TabsProps } from "antd";
import { getAllUserCategories } from "@/db/category";
import { RedirectToLogin, getUserSession } from "@/lib/auth";

export type CategoryType = "expense" | "income"
export type Category = {
    icon: string;
    title: string;
    isChecked: boolean;
    type: CategoryType
}
export default function Category(props) {
    const [categories, setCategories] = useState(props?.categories);
    const [currentType, setCurrentType] = useState<CategoryType>('income');
    const [addCategoryModal, setAddCategoryModal] = useState<boolean>(false)

    return (
        <div >
            <UI_Tabs
                tabBarExtraContent={<AddButton type='primary' icon={<Add size={18} />} onClick={() => setAddCategoryModal(true)}>Add Category</AddButton>}
                onChange={(e) => { setCurrentType(e) }}
            />
            <CategoryFlexWrapper>
                <CategoryWrapper>
                    {
                        categories &&
                        categories.filter(category => category.categoryType.toLowerCase() === currentType)
                            .map((category) =>
                                <CategoryCard key={category?.id} category={category} />
                            )
                    }
                </CategoryWrapper>
            </CategoryFlexWrapper>
            <AddCategoryModal
                open={addCategoryModal}
                setOpen={setAddCategoryModal}
                defaultCategory={currentType}
                setCategories={setCategories}
            />
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getUserSession(context);
    if (!session) return RedirectToLogin;
    const userId = session?.user?.userId;
    try {
        const categories = await getAllUserCategories(userId)
        return {
            props: {
                categories
            }
        }
    } catch (error) {
        console.log(error);
    }
    return {
        props: {}
    }
}