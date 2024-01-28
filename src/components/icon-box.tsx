import { CategoryIcon, CategoryIconWrapper } from "@/styles/category"
import { Icon } from "./icon"

type ComponentProps = {
    data: string[];
    select: string;
    onClick: (item: string) => void;
}

const IconBox: React.FC<ComponentProps> = ({ data, select, onClick }): JSX.Element => {
    return (
        <CategoryIconWrapper>
            {
                data.map((item, index) => (
                    <CategoryIcon key={index} $isSelected={select === item ? true : false} onClick={() => onClick(item)}>
                        <Icon icon={item} size={35} />
                    </CategoryIcon>
                ))
            }
        </CategoryIconWrapper>
    )
}

export default IconBox;