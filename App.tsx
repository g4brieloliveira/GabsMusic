import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import MainNavigator from "./src/navigation";
import { theme } from "./src/theme";
// "@types/react": "~18.0.8",

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <MainNavigator />
    </ThemeProvider>
  );
}

export default App;
