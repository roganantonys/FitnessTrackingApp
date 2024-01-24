import React, { createContext, useState } from "react";

const fitnessItems = createContext();
const FitnessContext = ({ children }) => {
  const [completed, setcompleted] = useState([]);
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [mins, setMins] = useState(0);
  return (
    <fitnessItems.Provider
      value={{
        completed,
        setcompleted,
        workout,
        setWorkout,
        calories,
        setCalories,
        mins,
        setMins,
      }}>
      {children}
    </fitnessItems.Provider>
  );
};

export {FitnessContext,fitnessItems};