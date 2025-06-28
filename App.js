import React, { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import { ThemeProvider } from "react-native-rapi-ui";
import AppNavigator from "./src/navigator/AppNavigator";

// Keep splash screen visible while loading fonts

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Roboto-Black": require("./src/fonts/Roboto-Black.ttf"),
      "Roboto-Bold": require("./src/fonts/Roboto-Bold.ttf"),
      "Roboto-ExtraBold": require("./src/fonts/Roboto-ExtraBold.ttf"),
      "Roboto-ExtraLight": require("./src/fonts/Roboto-ExtraLight.ttf"),
      "Roboto-Light": require("./src/fonts/Roboto-Light.ttf"),
      "Roboto-Medium": require("./src/fonts/Roboto-Medium.ttf"),
      "Roboto-Regular": require("./src/fonts/Roboto-Regular.ttf"),
      "Roboto-SemiBold": require("./src/fonts/Roboto-SemiBold.ttf"),
      "Roboto-Thin": require("./src/fonts/Roboto-Thin.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);


  if (!fontsLoaded) return null;

  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
