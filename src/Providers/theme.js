import { createContext, useState } from 'react';

export const ThemeContext = createContext([]);

export function ThemeProvider({ children }) {

    const themeLocal = localStorage.getItem("themeSite") || "light"
    const [currentTheme, setCurrentTheme] = useState(themeLocal);
    
    function getOpositeTheme() {
  
      setCurrentTheme(currentTheme === "light" ? "dark" : "light");
      localStorage.setItem("themeSite", currentTheme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider
            value={{ currentTheme, getOpositeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}









/*



*/