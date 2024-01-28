import { Next, Previous } from '@/components/icon'
import IconBox from './icon-box';
import { Icons } from '@/common/common';
import usePagination from '@/hooks/usePagination';
import { IconDivWrapper, IconDivControls } from '@/styles/global';
type ComponentProps = {
    selectIcon: (value: string) => void;
    selectedIcon: string;
}
const IconsDiv: React.FC<ComponentProps> = ({ selectedIcon, selectIcon }): JSX.Element => {
    const iconPerPage = 12;
    const { items, next, prev, showPrev, showNext } = usePagination<string[]>(Icons, iconPerPage);

    return (
        <IconDivWrapper>
            <IconDivControls onClick={prev}>
                {showPrev && <Previous size={20} />}
            </IconDivControls>
            <IconBox data={items} select={selectedIcon} onClick={selectIcon} />
            <IconDivControls onClick={next}>
                {showNext && <Next size={20} />}
            </IconDivControls>
        </IconDivWrapper>
    )

}

export default IconsDiv;