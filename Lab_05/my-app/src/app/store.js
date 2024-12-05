import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../features/items/itemsSlice';
import { createStore, createEvent } from 'effector';

export const addItemEffector = createEvent();
export const removeItemEffector = createEvent();


export const $itemsEffector = createStore([])
  .on(addItemEffector, (state, item) => [...state, item])
  .on(removeItemEffector, (state, itemId) => state.filter(item => item.id !== itemId));
export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
