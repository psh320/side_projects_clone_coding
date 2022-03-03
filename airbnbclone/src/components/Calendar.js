import React, {useState} from 'react';
import 'react-dates/lib/css/_datepicker.css';
import './Calendar.css';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';
import { selectCheckin } from '../actions';
import {useSelector, useDispatch} from 'react-redux';

const Calendar = () => {
    const dispatch = useDispatch();
    const checkdate = useSelector((state) => state.search)
    const defaultFocusedInput = "startDate";
    const [focusedInput, setFocusedInput] = useState(defaultFocusedInput);
    const handleDatesChange = (dates) => {
        dispatch(selectCheckin(dates));
      };
    const onFocusChange = (focusedInput) => {
        setFocusedInput(focusedInput);
    };
    return (
        <div className="calendar-component">
            <DayPickerRangeController 
                startDate={checkdate.date.startDate}
                endDate={checkdate.date.endDate}
                onDatesChange={handleDatesChange}
                focusedInput={focusedInput || defaultFocusedInput}
                onFocusChange={onFocusChange}
                numberOfMonths={2}
            />
        </div>
    );
}

export default Calendar;