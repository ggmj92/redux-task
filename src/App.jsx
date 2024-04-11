import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAll, deleteAll } from './redux/allSlice';

const App = () => {
  const all = useSelector(state => state.all);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleAddAll = () => {
    dispatch(addAll(input));
    setInput('');
  };

  const handleDeleteAll = id => {
    dispatch(deleteAll(id));
  };

  return (
    <>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleAddAll}>Add Task</button>
      <ul>
        {all.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDeleteAll(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
