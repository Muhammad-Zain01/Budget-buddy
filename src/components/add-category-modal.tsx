import UI_Modal from "@/ui/components/ui-modal";
import UI_Select from "@/ui/components/ui-select";
import { UI_Text } from "@/ui/components/ui-text";

type ComponentProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
}
const AddCategoryModal: React.FC<ComponentProps> = ({ open, setOpen }) => {
    return (
        <UI_Modal
            open={open}
            title={'Add Category'}
            onCancel={() => {console.log("SDF");setOpen(false)}}
            style={{ backgroundColor: 'black' }}
            centered
            className="modal_SS"
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <UI_Text style={{ marginBottom: 6 }}>Category Type</UI_Text>
                <UI_Select
                    defaultValue="income"
                    options={[{ value: 'income', label: 'Income' }, { value: 'expense', label: 'Expense' }]}
                />
            </div>
        </UI_Modal>
    )
}

export default AddCategoryModal;