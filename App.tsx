import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import MainNavigator from "./src/navigation";
import { theme } from "./src/utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <MainNavigator />
    </ThemeProvider>
  );
}

export default App;
