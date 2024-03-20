import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const CounterPartySelect = () => {

    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        const optionsFromApi = ['Red', 'Blue', 'Orange', 'Red-Orange'];
        setOptions(optionsFromApi);
      };
    
      fetchData();
    }, []);
    
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
    
    const handleSelect = (option) => {
      setValue(option);
      setIsOpen(false);
    };

  return (
    <div className="custom-select custom-select-search">
      <div className="select-wrapper">
        <Form.Control
          className="w-100"
          onClick={handleToggle}
          readOnly
          value={value}
          placeholder="Select an option..."
        />
        <i className="ri-arrow-down-s-line dropdown-icon" onClick={handleToggle}></i>
      </div>
      {isOpen && (
        <div className="custom-menu">
          <Form.Control
            autoFocus
            className=""
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <i className="ri-search-line search-icon"></i>
          <ul className="list-unstyled">
            {options.map((option, index) => (
              <li key={index} onClick={() => handleSelect(option)}>{option}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CounterPartySelect;



// const [value, setValue] = useState('');
// const [isOpen, setIsOpen] = useState(false);
// const [options, setOptions] = useState([]);

// useEffect(() => {
//   // Define the API endpoint you want to fetch data from
//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://api.example.com/data');
//       const data = await response.json();
//       setOptions(data); // Assuming data is an array of options
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   fetchData();
// }, []);

// const handleToggle = () => {
//   setIsOpen(!isOpen);
// };

// const handleSelect = (e) => {
//   setValue(e.target.innerText);
//   setIsOpen(false);
// };