import React, { createContext, useContext, useState } from 'react';

// @ts-ignore: will refactor later
const SwitchContext = createContext();

export const useSwitchContext = () => {
  return useContext(SwitchContext);
};

export const SwitchProvider = ({ children }: { children: any }) => {
  const [walletPaymentsEnabled, setIsEnabled] = useState(true);
  const [darkThemeEnabled, setSelectedIndex] = useState(0);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const handleIndexChange = (index: React.SetStateAction<number>) => {
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
