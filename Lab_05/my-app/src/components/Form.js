import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/items/itemsSlice';
import './App.css';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addItem(inputValue.trim()));
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter item"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default Form;
