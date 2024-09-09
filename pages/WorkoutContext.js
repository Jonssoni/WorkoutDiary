import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const removeWorkout = (index) => {
    const updatedWorkouts = workouts.filter((_, i) => i !== index);
    setWorkouts(updatedWorkouts);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, removeWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};
