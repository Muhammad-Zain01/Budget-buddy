import { FormItemContainer, FormItemLabel } from "@/styles/global";
import UI_Input from "../ui/ui-input";
import UI_Select from "../ui/ui-select";
import { ChangeEvent } from "react";
import IconsDiv from "../common/icons-div";
import { CategoryType } from "@/pages/categories";
import { FormState } from "./add-category-modal";
import { FormRules } from "@/hooks/useFormState";


type ComponentProps = {
    form: FormState;
    setValue: (item: string, value: any) => void
    rules: FormRules | {}
}

const CategoryModalContainer: React.FC<ComponentProps> = ({ form, setValue, rules }) => {
    const Options: { value: CategoryType, label: string }[] = [
        { value: 'income', label: 'Income' },
        { value: 'expense', label: 'Expense' }
    ]
    return (
        <>
            <FormItemContainer>
                <FormItemLabel>Category Name</FormItemLabel>
                <UI_Input
                    {...rules?.categoryName}
                    value={form?.categoryName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => { setValue<string>("categoryName", e.currentTarget.value) }}
                    placeholder="Enter Category Name..."
                />
            </FormItemContainer>
            <FormItemContainer>
                <FormItemLabel>Category Type</FormItemLabel>
                <UI_Select
                    value={form?.categoryType}
                    options={Options}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                        const value = e as unknown;
                        setValue<CategoryType>("categoryType", value as CategoryType)
                    }}
                />
            </FormItemContainer>
            <FormItemContainer>
                <FormItemLabel>Select Icon</FormItemLabel>
                <IconsDiv
                    selectIcon={(value) => setValue('icon', value)}
                    selectedIcon={form?.icon}
                />
            </FormItemContainer>
        </>
    )
}

export default CategoryModalContainer;