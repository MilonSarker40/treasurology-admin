import React from 'react';

const DownloadSelect = () => {
    return (
        <div className='select__field select__field__dwn'>
            <i class="ri-download-2-fill"></i>
            <select class="form-select" aria-label="Default select example">
                <option selected>Download</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    );
}

export default DownloadSelect;
