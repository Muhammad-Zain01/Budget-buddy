import { ContegoryMenuIconSpan, ContegoryMenuIconWrapper } from "@/styles/category";
import { Delete, HiddenIcon, ShowIcon } from "../icon";
import { useState } from "react";


type ComponentProps = {
    id: number;
    isPrimary: boolean;
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
                <ContegoryMenuIconSpan onClick={showCategory ? ShowCategory : HideCategory}>
                    {showCategory ? <ShowIcon size={18} /> : <HiddenIcon size={18} />}
                </ContegoryMenuIconSpan>
                <ContegoryMenuIconSpan onClick={RemoveCategory}>
                    <Delete size={15} />
                </ContegoryMenuIconSpan>
                {/* <HiddenIcon size={20} /> */}
            </ContegoryMenuIconWrapper>
        )
    }
}

export default CategoryControlMenu;