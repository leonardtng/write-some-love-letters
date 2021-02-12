import React, { useState, createContext, ReactNode } from 'react';

export interface ThemeContextProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {
    darkMode: true,
    toggleTheme: () => { },
  }
)

interface ThemeContextProviderProps {
  children?: ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(!(localStorage.getItem('theme') === 'light'));
  const toggleTheme = (): void => {
    if (darkMode) {
      setDarkMode(false);
      localStorage.setItem('theme', 'light');
    } else {
      setDarkMode(true);
      localStorage.removeItem('theme');
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        darkMode: darkMode,
        toggleTheme: toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;