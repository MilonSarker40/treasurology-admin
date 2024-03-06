import React, { useState } from 'react';
import Calendar from 'moedim';

const AllHoliday = () => {
    const [value, setValue] = useState(new Date())
    return (
        <div>
            <Calendar value={value} onChange={(d) => setValue(d)} />
        </div>
    );
}

export default AllHoliday;
