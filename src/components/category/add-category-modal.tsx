import UI_Modal from "@/components/ui/ui-modal";
import UI_Select from "@/components/ui/ui-select";
import IconsDiv from "../common/icons-div";
import { ChangeEvent, useState } from "react";
import UI_Input from "@/components/ui/ui-input";
import UI_Button from "@/components/ui/ui-button";
import { FormItemContainer, FormItemLabel } from "@/styles/global";
import useFormState from "@/hooks/useFormState";
import { CategoryType } from "@/pages/categories";
import CategoryModalContainer from "./category-modal-container";
import useMessage from "@/hooks/useMessage";
import { addCategory } from "@/api/request";
import { ResponseErrors } from "@/common/errors";
import { useRouter } from "next/router";

type ComponentProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
    defaultCategory: CategoryType;
}
export type FormState = {
    icon: string;
    categoryType: CategoryType;
    categoryName: string;
    setCategories: (value: any) => void;
}
const AddCategoryModal: React.FC<ComponentProps> = ({ open, setOpen, defaultCategory, setCategories }) => {
    const InitialState = { icon: "", categoryType: defaultCategory, categoryName: "" }
    const rules = { required: ['categoryName'] };
    const { form, reset, check, setValue, formRules } = useFormState<FormState>(InitialState, rules)
    const [loading, setLoading] = useState(false);
    const message = useMessage();
    const onSave = async () => {
        if (!check()) return;
        if (form?.icon == '') {
            return message.error('Please select icon');
        }
        setLoading(true)
        const response = await addCategory(form)
        if (response?.status) {
            setCategories(prev => [...prev, response?.data])
            message.success('Successfully added category');
            setOpen(false);
        }
        else {
            message.error(response?.message ? ResponseErrors[response?.message] : "Something went wrong")
        }
        setLoading(false)
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
                <UI_Button loading={loading} type="primary" onClick={onSave}>Save</UI_Button>
            }
        >
            <CategoryModalContainer form={form} setValue={setValue} rules={formRules} />
        </UI_Modal>
    )
}

export default AddCategoryModal;