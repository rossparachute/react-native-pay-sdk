
import React, { createContext, useContext, useState } from 'react';

const SwitchContext = createContext();

export const useSwitchContext = () => {
  return useContext(SwitchContext);
};

export const SwitchProvider = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  
  const [selectedIndex, setSelectedIndex] = useState(0);

    const handleIndexChange = (index) => {
        setSelectedIndex(index);
    }

  return (
    <SwitchContext.Provider value={{ isEnabled, toggleSwitch, selectedIndex, handleIndexChange }}>
      {children}
    </SwitchContext.Provider>
  );
};
