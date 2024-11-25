import React from "react";
import { createContext, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children, value }) {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
