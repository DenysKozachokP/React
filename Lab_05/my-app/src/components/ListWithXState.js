import React, { useState } from 'react';
import { useMachine } from '@xstate/react';
import { itemsMachine } from '../machines/itemsMachine';

const ListWithXState = () => {
  const [state, send] = useMachine(itemsMachine);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim()) {
      send({ type: 'ADD_ITEM', text: newItem });
      setNewItem('');
    }
  };

  const handleRemoveItem = (id) => {
    send({ type: 'REMOVE_ITEM', id });
  };

  return (
    <div>
      <h2>List with XState</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter new item"
      />
      <button onClick={handleAddItem}>Add Item</button>

      <ul>
        {state.context.items.length === 0 ? (
          <li>No items to display</li>
        ) : (
          state.context.items.map(item => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ListWithXState;
