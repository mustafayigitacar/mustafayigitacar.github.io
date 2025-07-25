import React, { useState, createContext } from 'react';
import './ThemeProvider.css';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(d => !d);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div className={dark ? 'theme-dark' : 'theme-light'}>
        <button className="theme-toggle" onClick={toggleTheme}>
          {dark ? 'Açık Tema' : 'Koyu Tema'}
        </button>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 