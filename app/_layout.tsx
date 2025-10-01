
import { useColorScheme } from "react-native";
import { Stack } from "expo-router";
import { SystemBars } from "react-native-edge-to-edge";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import "react-native-reanimated";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { colors } from "@/styles/commonStyles";
import { CartProvider } from "@/contexts/CartContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.background,
    card: colors.card,
    text: colors.text,
    border: colors.grey,
  },
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={lightTheme}>
        <CartProvider>
          <SystemBars style="dark" />
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen 
              name="checkout" 
              options={{ 
                title: 'Оформление заказа',
                headerBackTitle: 'Назад',
              }} 
            />
          </Stack>
          <StatusBar style="dark" />
        </CartProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
