import { useState, useEffect } from 'react';

export default function useDarkMode() { 
  
  const [isDarkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.remove('dark-theme', 'light-theme');

    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setDarkMode(currentValue => !currentValue);
  };

  return [isDarkMode, toggleTheme];

}