import { TranactionItemsGridDiv } from "@/styles/transaction"
import { Icon } from "./icon"
import { UI_Text } from "@/ui/components/ui-text"

type ComponentProps = {
    items: string[][];
    selectedItem: string;
    label: string;
    onClick: (item: string[]) => void;
}


const TransactionGrid: React.FC<ComponentProps> = ({ items, label, selectedItem, onClick }): JSX.Element => {
    return (
        <div style={{ margin: ' 10px 0' }}>
            <UI_Text style={{ fontWeight: 500 }}>{label}</UI_Text>
            <div style={{ marginTop: 5, display: 'flex', flexWrap: 'wrap', justifyContent: 'start', }}>
                {items.map(item => (
                    <TranactionItemsGridDiv key={item[0]} $isSelected={item[0] == selectedItem ? true : false} onClick={() => onClick(item)}>
                        <Icon icon={item[0]} size={50} />
                        <UI_Text style={{ fontSize: 13, marginTop: 5 }}>{item[1]}</UI_Text>
                    </TranactionItemsGridDiv>
                ))}
            </div>
        </div>
    )
}

export default TransactionGrid