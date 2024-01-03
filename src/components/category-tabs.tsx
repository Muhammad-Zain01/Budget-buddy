import { CategoryType } from "@/pages/category";
import { Segmented, Tabs } from "@/ui/imports/ui-import";
import { Dispatch, SetStateAction } from "react";

type ComponnetProps = {
    changeType: Dispatch<SetStateAction<CategoryType | string>>
}
const CategoryTabs: React.FC<ComponnetProps> = ({ changeType }): JSX.Element => {
    return (
        <div style={{ padding: 20 }}>
            <Segmented
                options={[
                    { label: 'Income', value: 'income' },
                    { label: 'Expense', value: 'expense' }
                ]}
                defaultValue="expense"
                block
                onChange={(e: string) => { changeType(e) }}
            />
        </div>
    )
}

export default CategoryTabs