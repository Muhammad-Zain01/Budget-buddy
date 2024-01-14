import { TimelineField } from "@/styles/dashboard";
import { DatePickerProps } from "antd";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from "dayjs";
dayjs.extend(customParseFormat);

const Timeline: React.FC = (): JSX.Element => {
    const onChangeMonth: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString)
    }
    
    return (
        <>
            <TimelineField defaultValue={dayjs()} format="MMMM YYYY" onChange={onChangeMonth} picker="month" />
        </>
    )
}

export default Timeline;
