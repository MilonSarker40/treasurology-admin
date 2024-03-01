import React from 'react';

const SelectParticipant = () => {
    return (
        <div className='select__field select__field__action'>
            <select class="form-select" aria-label="Default select example">
                <option selected>Select Market Participant</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    );
}

export default SelectParticipant;
