import { SessionProvider } from "@/contexts/SessionProvider";
import "../global.css";
import { Slot } from "expo-router";
import { useColorScheme } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import Toast, { BaseToast } from "react-native-toast-message";
import {
  commonToastStyle,
  defaultText1Style,
  defaultText2Style,
} from "@/utils/toast";
import { colorPallette } from "@/constants/colors";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const [loaded, error] = useFonts({
    ReadexPro_300Light: require("@/assets/fonts/ReadexPro_300Light.ttf"),
    ReadexPro_400Regular: require("@/assets/fonts/ReadexPro_400Regular.ttf"),
    ReadexPro_600SemiBold: require("@/assets/fonts/ReadexPro_600SemiBold.ttf"),
    ReadexPro_700Bold: require("@/assets/fonts/ReadexPro_700Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }

  const toastConfig = {
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{
          ...commonToastStyle,
          borderLeftColor: colorPallette.success,
        }}
        text1Style={defaultText1Style}
        text2Style={defaultText2Style}
        text2NumberOfLines={2}
      />
    ),
    info: (props: any) => (
      <BaseToast
        {...props}
        style={{
          ...commonToastStyle,
          borderLeftColor: colorPallette.secondary,
        }}
        text1Style={defaultText1Style}
        text2Style={defaultText2Style}
        text2NumberOfLines={2}
      />
    ),
    error: (props: any) => (
      <BaseToast
        {...props}
        style={{
          ...commonToastStyle,
          borderLeftColor: colorPallette.error,
        }}
        text1Style={defaultText1Style}
        text2Style={defaultText2Style}
        text2NumberOfLines={2}
      />
    ),
  };

  return (
    <SessionProvider>
      <ThemeProvider
        value={colorScheme === "light" ? DarkTheme : DefaultTheme}
      >
        <Slot />
        <Toast config={toastConfig} />
      </ThemeProvider>
    </SessionProvider >
  )
}
