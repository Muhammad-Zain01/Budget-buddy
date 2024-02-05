import { ContegoryMenuIconSpan, ContegoryMenuIconWrapper } from "@/styles/category";
import { Cash, Delete, Dots, Edit, HiddenIcon, ShowIcon } from "../icon";
import { useState } from "react";
import DropMenu from "../common/drop-menu";
import { MenuProps } from "antd";
import UI_Button from "../ui/ui-button";


type ComponentProps = {
    id: number;
    isPrimary: boolean;
}

const CategoryMenu = () => {
    return (
        <div style={{ width: 120, padding: 1 }}>
            <UI_Button type="text" style={{ width: "100%", display: 'flex', textAlign: 'start' }}>
                <Edit size={15} right={5} />
                Edit
            </UI_Button>
            <UI_Button type="text" style={{ width: "100%", textAlign: 'start' }}>Active</UI_Button>
        </div>
    )
}
const CategoryControlMenu: React.FC<ComponentProps> = ({ id, isPrimary }): JSX.Element => {
    const [showCategory, setShowCategory] = useState(true)
    const ShowCategory = () => {
        setShowCategory(false)
    }
    const HideCategory = () => {
        setShowCategory(true)
    }
    const RemoveCategory = () => {
        console.log("REMOVE CATEGORY")
    }

    if (!isPrimary) {
        return (
            <ContegoryMenuIconWrapper>
                <DropMenu item={<CategoryMenu />} />
            </ContegoryMenuIconWrapper>
        )
    }
}

export default CategoryControlMenu;