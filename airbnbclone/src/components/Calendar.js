import React, {useState} from 'react';
import 'react-dates/lib/css/_datepicker.css';
import './Calendar.css';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';

const Calendar = () => {

    const [dates, setDates] = useState({ startDate: null, endDate: null });
    const defaultFocusedInput = "startDate";
    const [focusedInput, setFocusedInput] = useState(defaultFocusedInput);
    const handleDatesChange = (dates) => {
        setDates(dates);
      };
    const onFocusChange = (focusedInput) => {
        console.log(onFocusChange);
        setFocusedInput(focusedInput);
    };
    return (
        <div className="calendar-component">
            <DayPickerRangeController 
                startDate={dates.startDate}
                endDate={dates.endDate}
                onDatesChange={handleDatesChange}
                focusedInput={focusedInput || defaultFocusedInput}
                onFocusChange={onFocusChange}
                numberOfMonths={2}
            />
        </div>
    );
}

export default Calendar;