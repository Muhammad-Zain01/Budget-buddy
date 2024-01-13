import { TimelineField } from "@/layout/dashboard.style";
import { DatePickerProps } from "antd";

const Timeline: React.FC = (): JSX.Element => {
    const onChangeMonth: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString)
    }
    return (
        <>
            <TimelineField onChange={onChangeMonth} picker="month" />
        </>
    )
}

export default Timeline;
