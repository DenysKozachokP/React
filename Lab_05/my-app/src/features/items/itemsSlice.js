import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],  // Правильна ініціалізація як порожній масив
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: Date.now(), // Генерація унікального ID
        text: action.payload,
      };
      state.items.push(newItem); // Додаємо елемент в список
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload); // Видаляємо елемент
    },
  },
});

export const { addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
