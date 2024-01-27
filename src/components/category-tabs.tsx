import { CategoryType } from "@/pages/category";
import UI_Tabs from "@/ui/components/ui-tabs";
import { TabsProps } from "antd";
import { Dispatch, SetStateAction } from "react";

type ComponnetProps = {
    changeType: Dispatch<SetStateAction<CategoryType>>,
    addButton: React.ReactNode
}

const CategoryTabs: React.FC<ComponnetProps> = ({ changeType, addButton }): JSX.Element => {
    const items: TabsProps['items'] = [
        {
            key: 'income',
            label: 'Income',
        },
        {
            key: 'expense',
            label: 'Expense',
        },
    ];
    const onChange = (e) => { changeType(e) }
    return (
        <UI_Tabs tabBarExtraContent={addButton} items={items} onChange={onChange} />

    )
}

export default CategoryTabs