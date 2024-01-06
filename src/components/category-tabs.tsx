import { CategoryType } from "@/pages/category";
import { Segmented } from "@/ui/imports/ui-import";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const SegmentedWrapper = styled(Segmented)`
    background-color: ${(props) => props.theme.contentBackground};
    color: ${(props) => props.theme.color};
    width: 60%;
    margin-bottom: 20px;
    
    .ant-segmented-item:not(.ant-segmented-item-selected):hover{
        /* background-color: ${(props) => props.theme.theme === 'dark' && '#394655'} !important; */
        color: ${(props) => props.theme.theme === 'dark' && 'white'} !important;
    }
 
    label{
        margin-right:10px;
    }

`
const SegemnetedDiv = styled.div`
    display: flex;
    justify-content: center;
`

type ComponnetProps = {
    changeType: Dispatch<SetStateAction<CategoryType | string>>
}
const CategoryTabs: React.FC<ComponnetProps> = ({ changeType }): JSX.Element => {
    return (
        <SegemnetedDiv>
            <SegmentedWrapper
                options={[
                    { label: 'Income', value: 'income' },
                    { label: 'Expense', value: 'expense' }
                ]}
                defaultValue="income"
                block
                onChange={(e: string) => { changeType(e) }}
                size="large"
            />
        </SegemnetedDiv>
    )
}

export default CategoryTabs