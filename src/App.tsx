import React from 'react';
import ThemeContext from "./contexts/ThemeContext";
import AppTheme from './components/common/AppTheme';

const App: React.FC = () => {
  return (
    <ThemeContext>
      <AppTheme />
    </ThemeContext>
  );
}

export default App;