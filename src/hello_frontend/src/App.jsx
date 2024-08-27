import React, { useState } from 'react';

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');

  const addHabit = () => {
    if (newHabit.trim() !== '') {
      const habit = {
        id: Date.now(),
        name: newHabit,
        completed: false,
      };
      setHabits([...habits, habit]);
      setNewHabit('');
    }
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map(habit =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Habit Tracker</h1>
      <input
        type="text"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        placeholder="Enter new habit"
        style={{ padding: '10px', width: '80%', marginBottom: '10px' }}
      />
      <button onClick={addHabit} style={{ padding: '10px 20px' }}>Add</button>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {habits.map(habit => (
          <li
            key={habit.id}
            style={{
              textDecoration: habit.completed ? 'line-through' : 'none',
              marginBottom: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {habit.name}
            <div>
              <button onClick={() => toggleHabit(habit.id)} style={{ marginRight: '10px' }}>
                {habit.completed ? 'Undo' : 'Done'}
              </button>
              <button onClick={() => deleteHabit(habit.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;
