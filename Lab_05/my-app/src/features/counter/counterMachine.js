import { createMachine, interpret } from 'xstate';

const counterMachine = createMachine({
  id: 'counter',
  initial: 'idle',
  context: { value: 0 },
  states: {
    idle: {
      on: {
        INCREMENT: { actions: 'increment' },
        DECREMENT: { actions: 'decrement' },
      },
    },
  },
}, {
  actions: {
    increment: (context) => { context.value += 1; },
    decrement: (context) => { context.value -= 1; },
  },
});

export const counterService = interpret(counterMachine).start();
