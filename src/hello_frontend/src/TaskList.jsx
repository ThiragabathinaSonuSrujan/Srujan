import React from 'react';

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <span onClick={() => onToggleTask(task.id)}>{task.text}</span>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
