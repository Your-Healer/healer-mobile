import { useColorScheme } from "react-native";

import { colorMode } from "@/constants/colors";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof colorMode.light & keyof typeof colorMode.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return colorMode[theme][colorName];
  }
}
