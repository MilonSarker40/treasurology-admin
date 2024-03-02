import React from 'react';

const FxBlotterSelect = () => {
    return (
        <div className='select__field select__field__date'>
            <select class="form-select" aria-label="Default select example">
                <option selected>Select Currency</option>
                <option value="1">USD</option>
                <option value="2">EUR</option>
                <option value="3">GBP</option>
                <option value="3">JPY</option>
            </select>
        </div>
    );
}

export default FxBlotterSelect;
