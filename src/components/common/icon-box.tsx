import { Icon } from "../icon"
import { IconGrid, IconGridWrapper } from "@/styles/global";

type ComponentProps = {
    data: string[];
    select: string;
    onClick: (item: string) => void;
}

const IconBox: React.FC<ComponentProps> = ({ data, select, onClick }): JSX.Element => {
    return (
        <IconGridWrapper>
            {
                data.map((item, index) => (
                    <IconGrid key={index} $isSelected={select === item ? true : false} onClick={() => onClick(item)}>
                        <Icon icon={item} size={35} />
                    </IconGrid>
                ))
            }
        </IconGridWrapper>
    )
}

export default IconBox;