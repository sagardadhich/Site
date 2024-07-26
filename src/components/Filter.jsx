// src/components/Filter.js
import React from 'react';
import Select from 'react-select';

const Filter = ({ onChange }) => {
  const handleDateChange = (selectedOption) => {
    onChange({ date: selectedOption ? selectedOption.value : '' });
  };

  const handleTypeChange = (selectedOption) => {
    onChange({ type: selectedOption ? selectedOption.value : '' });
  };

  const dateOptions = [
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' }
  ];

  const typeOptions = [
    { value: 'Forest', label: 'Forest' },
    { value: 'Lake', label: 'Lake' },
    { value: 'Spa', label: 'Spa' }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '16px' }}>
      <Select options={dateOptions} onChange={handleDateChange} placeholder="Filter by Date" />
      <Select options={typeOptions} onChange={handleTypeChange} placeholder="Filter by Type" />
    </div>
  );
};

export default Filter;
