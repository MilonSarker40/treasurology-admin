import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Classes from '../Date/date.module.css';

const StartDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className={`${Classes.date__picher__wrp}`}>
            <label>Start Date</label>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    );
}

export default StartDate;
