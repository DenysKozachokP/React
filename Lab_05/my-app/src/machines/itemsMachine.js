import { createMachine, assign } from 'xstate';

export const itemsMachine = createMachine({
  id: 'itemsMachine',
  initial: 'idle',
  context: {
    items: [], // Ініціалізація пустого масиву
  },
  states: {
    idle: {
      on: {
        ADD_ITEM: {
          actions: 'addItem', // Додаємо елемент
        },
        REMOVE_ITEM: {
          actions: 'removeItem', // Видаляємо елемент
        },
      },
    },
  },
}, {
  actions: {
    addItem: assign({
      items: (context, event) => {
        return [
          ...context.items, // Оновлюємо новим масивом
          {
            id: Date.now(), // Унікальний ID
            text: event.text, // Текст нового елементу
          }
        ];
      }
    }),
    removeItem: assign({
      items: (context, event) => {
        return context.items.filter(item => item.id !== event.id);
      }
    }),
  },
});
