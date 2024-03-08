import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Classes from '../Date/date.module.css';

const FormDate = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className={`${Classes.form__date__picher__wrp}`}>
            <DatePicker style={{display:'block'}} selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    );
}

export default FormDate;
