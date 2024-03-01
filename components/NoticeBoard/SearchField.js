import React from 'react';
import Classes from '../SearchField/search.module.css';

const SearchField = () => {
    return (
        <div className={`${Classes.notice__search__field}`}>
            <i class="ri-search-line"></i>
            <input type='search' placeholder='Search' />
        </div>
    );
}

export default SearchField;


