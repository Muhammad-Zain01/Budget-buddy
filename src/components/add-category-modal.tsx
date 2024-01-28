import UI_Modal from "@/ui/components/ui-modal";
import UI_Select from "@/ui/components/ui-select";
import IconsDiv from "./icons-div";
import { ChangeEvent } from "react";
import UI_Input from "@/ui/components/ui-input";
import UI_Button from "@/ui/components/ui-button";
import { FormItemContainer, FormItemLabel } from "@/styles/global";
import useFormState from "@/hooks/useFormState";
import { CategoryType } from "@/pages/categories";

type ComponentProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
    defaultCategory: CategoryType;
}
type FormState = {
    icon: string;
    categoryType: CategoryType;
    categoryName: string;
}
const AddCategoryModal: React.FC<ComponentProps> = ({ open, setOpen, defaultCategory }) => {
    const InitialState = { icon: "", categoryType: defaultCategory, categoryName: "" }
    const { form, reset, setValue } = useFormState<FormState>(InitialState)
    const { icon, categoryType, categoryName } = form;

    const Options: { value: CategoryType, label: string }[] = [
        { value: 'income', label: 'Income' },
        { value: 'expense', label: 'Expense' }
    ]
    const onSave = () => {
        console.log("SAVING");
    }
    const onCancel = () => {
        reset();
        setOpen(false);
    }
    return (
        <UI_Modal
            open={open}
            title={'Add Category'}
            onCancel={onCancel}
            centered
            footer={
                <UI_Button type="primary" onClick={onSave}>Save</UI_Button>
            }
        >
            <FormItemContainer>
                <FormItemLabel>Category Name</FormItemLabel>
                <UI_Input
                    value={categoryName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => { setValue<string>("categoryName", e.currentTarget.value) }}
                    placeholder="Enter Category Name..."
                />
            </FormItemContainer>
            <FormItemContainer>
                <FormItemLabel>Category Type</FormItemLabel>
                <UI_Select
                    value={categoryType}
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
                    selectedIcon={icon}
                />
            </FormItemContainer>
        </UI_Modal>
    )
}

export default AddCategoryModal;