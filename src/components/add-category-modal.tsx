import UI_Modal from "@/ui/components/ui-modal";
import UI_Select from "@/ui/components/ui-select";
import { UI_Text } from "@/ui/components/ui-text";
import IconsDiv from "./icons-div";
import { useState } from "react";
import UI_Input from "@/ui/components/ui-input";
import UI_Button from "@/ui/components/ui-button";

type ComponentProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
}
const AddCategoryModal: React.FC<ComponentProps> = ({ open, setOpen }) => {
    const [selectedIcon, selectIcon] = useState<string>("selected")
    
    const onSave = () => {
        console.log("SAVING");
    }
    return (
        <UI_Modal
            open={open}
            title={'Add Category'}
            onCancel={() => { setOpen(false) }}
            centered
            footer={
                <UI_Button type="primary" onClick={onSave}>Save</UI_Button>
            }
        >
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 7 }}>
                <UI_Text style={{ marginBottom: 6 }}>Category Name</UI_Text>
                <UI_Input placeholder="Enter Category Name..." />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 7 }}>
                <UI_Text style={{ marginBottom: 6 }}>Category Type</UI_Text>
                <UI_Select
                    defaultValue="income"
                    options={[{ value: 'income', label: 'Income' }, { value: 'expense', label: 'Expense' }]}
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 7 }}>
                <UI_Text style={{ marginBottom: 6 }}>Select Icon</UI_Text>
                <IconsDiv selectIcon={selectIcon} selectedIcon={selectedIcon} />
            </div>
        </UI_Modal>
    )
}

export default AddCategoryModal;