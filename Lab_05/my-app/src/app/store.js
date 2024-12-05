import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../features/items/itemsSlice'; // Імпортуємо itemsSlice

export const store = configureStore({
  reducer: {
    items: itemsReducer,  // Додаємо items reducer в store
  },
});
