import * as React from 'react';
import { addMonths, format, getDaysInMonth, subMonths } from 'date-fns';

interface DateInfo {
    day: number;
    month: string;
    daysInMonth: number;
    prevMonth: string;
    nextMonth: string;
}

const useDateInfo = (inputDate: Date): DateInfo => {
    const day = inputDate.getDate();
    const month = format(inputDate, 'MMMM');
    const daysInMonth = getDaysInMonth(inputDate);
    const prevMonth = format(subMonths(inputDate, 1), 'MMMM');
    const nextMonth = format(addMonths(inputDate, 1), 'MMMM');


    return { day, month, daysInMonth, prevMonth, nextMonth };
};


interface CalendarProps {
    startDate?: Date;
    renderItem?: (value: { day: number }) => JSX.Element
    prevMonth?: (value: string) => JSX.Element
    nextMonth?: (value: string) => JSX.Element
}

const Calendar: React.FC<CalendarProps> = ({ startDate, renderItem }) => {
    const f = useDateInfo(new Date())
    console.log('HELLO', new Date(), f, new Array(f.daysInMonth));
    if (!f.daysInMonth) return <>Loading...</>
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>prev</div>
            {[...Array(f.daysInMonth)].map((_day, index) => {
                return !!renderItem ? renderItem({ day: index }) : (
                    <div style={{
                        margin: "0 10px",
                        backgroundColor: '#E9E9E9',
                        padding: '10px 12px'
                    }}>
                        {index}
                    </div>
                )
            })}
            <div>next</div>
        </div>
    )
}

export { Calendar }