import React, { createContext, useContext, useState } from 'react';

const SwitchContext = createContext();

export const useSwitchContext = () => {
  return useContext(SwitchContext);
};

export const SwitchProvider = ({ children }) => {
  const [walletPaymentsEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const [darkThemeEnabled, setSelectedIndex] = useState(0);

  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };

  return (
    <SwitchContext.Provider
      value={{
        walletPaymentsEnabled,
        toggleSwitch,
        darkThemeEnabled,
        handleIndexChange,
      }}
    >
      {children}
    </SwitchContext.Provider>
  );
};
