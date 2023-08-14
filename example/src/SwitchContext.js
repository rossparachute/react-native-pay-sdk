
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

  return (
    <SwitchContext.Provider value={{ isEnabled, toggleSwitch }}>
      {children}
    </SwitchContext.Provider>
  );
};
