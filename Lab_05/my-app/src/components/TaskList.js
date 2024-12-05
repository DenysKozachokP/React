import React from 'react';
import { useGetTasksQuery } from '../features/api/apiSlice';
import './App.css';

const TaskList = () => {
  const { data: tasks, error, isLoading } = useGetTasksQuery();

  if (isLoading) return <p>Loading tasks...</p>;
  if (error) return <p>Error loading tasks.</p>;

  return (
    <div>
      <h2>Tasks from RTK Query</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
