import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/items/itemsSlice';
import './App.css';

const List = () => {
  const items = useSelector((state) => state.items.items); // Отримуємо список items з Redux store
  const dispatch = useDispatch();

  // Перевірка на випадок, якщо items ще не завантажено
  if (!items) {
    return <div>No items to display.</div>;
  }

  const handleRemove = (id) => {
    dispatch(removeItem(id)); // Видалення елемента
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
