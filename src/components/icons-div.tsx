import { Icon, Next, Previous } from '@/components/icon'
import { CategoryIcon, CategoryIconWrapper } from '@/styles/category';
import { useState } from 'react';

type ComponentProps = {
    selectIcon: (value: string) => void;
    selectedIcon: string;
}
const IconsDiv: React.FC<ComponentProps> = ({ selectedIcon, selectIcon }): JSX.Element => {
    const [iconPage, setPage] = useState<number>(1)
    const iconPerPage = 12;
    const Icons = [
        "user",
        "food",
        "transport",
        "grocery",
        "travel",
        "entertainment",
        "fuel",
        "bill",
        "medical",
        "shopping",
        "education",
        "office",
        "home",
        "rent",
        "loan",
        "donation",
        "gift",
        "family",
        "fitness",
        "wedding",
        "mobile",
        "electronics",
        "insurance",
        "money",
        "expenses",
        "salary",
        "profits",
        "investment",
        "commission",
        "retirement",
        "fund",
        "bonus",
        "wallet",
        "freelancer",
        "gift",
        "rent",
        "loan",
        "money",
        "savings",
    ]
    const totalPages = Math.floor(Icons.length / iconPerPage);
    const FilteredIcons = Icons.filter((_, index) => ((iconPage - 1) * iconPerPage) <= index && (iconPage * iconPerPage) > index)
    const NextClick = () => setPage(prev => prev + 1)
    const PrevClick = () => setPage(prev => prev - 1)
    return (
        <div style={{ display: 'flex', marginTop: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center' }} onClick={PrevClick}>
                {iconPage != 1 && <Previous size={20} />}
            </div>
            <CategoryIconWrapper>
                {
                    FilteredIcons?.map((item, index) => (
                        <CategoryIcon key={index} isSelected={selectedIcon === item ? true : false} onClick={() => selectIcon(item)}>
                            <Icon icon={item} size={35} />
                        </CategoryIcon>
                    ))
                }
            </CategoryIconWrapper>
            <div style={{ display: 'flex', alignItems: 'center' }} onClick={NextClick}>
                {iconPage <= totalPages && iconPage >= 1 && <Next size={20} />}
            </div>
        </div>
    )

}

export default IconsDiv;