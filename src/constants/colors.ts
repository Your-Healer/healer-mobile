export const colors = {
  primaryColor: "rgba(28, 42, 58, 1)",
  secondaryColor: "rgba(255, 255, 255, 1)",
  greyScales: {
    50: "rgba(249,250,251,1)",
    100: "rgba(243, 244, 246, 1)",
    200: "rgba(229, 231, 235, 1)",
    300: "rgba(209, 213, 219, 1)",
    400: "rgba(156, 163, 175, 1)",
    500: "rgba(107, 114, 128, 1)",
    600: "rgba(75, 85, 99, 1)",
    700: "rgba(55, 65, 81, 1)",
    800: "rgba(31, 42, 55, 1)",
    900: "rgba(17, 25, 40, 1)",
  },
  deepTeal: "rgba(1, 71, 55, 1)",
  teal: "rgba(77, 155, 145, 1)",
  lightTeal: "rgba(164, 207, 195, 1)",
  green: "rgba(147, 193, 158, 1)",
  paleGreen: "rgba(222, 247, 228, 1)",
  darkGreen: "rgba(119, 29, 29, 1)",
  deepPink: "rgba(220, 148, 151, 1)",
  pink: "rgba(222, 182, 181, 1)",
  lightPink: "rgba(253, 232, 232, 1)",
  lightPurple: "rgba(172, 161, 205, 1)",
  blue: "rgba(28, 100, 242, 1)",
  paleBlue: "rgba(137, 204, 219, 1)",
  purple: "rgba(53, 34, 97, 1)",
  orange: "rgba(245, 173, 126, 1)",
};

const tintColorLight = colors.blue;
const tintColorDark = colors.secondaryColor;

export const colorMode = {
  light: {
    text: colors.greyScales[900],
    background: colors.secondaryColor,
    tint: tintColorLight,
    icon: colors.greyScales[400],
    tabIconDefault: colors.greyScales[400],
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: colors.greyScales[50],
    background: colors.greyScales[900],
    tint: tintColorDark,
    icon: colors.greyScales[300],
    tabIconDefault: colors.greyScales[300],
    tabIconSelected: tintColorDark,
  },
};

export interface ColorPalette {
  background: string;
  surface: string;
  outline: string;
  textColor: string;
  primary: string;
  primaryBtn: string;
  secondary: string;
  border: string;
  error: string;
  fall: string;
  success: string;
}

export const colorPallette: ColorPalette = {
  background: colors.greyScales[50],
  surface: colors.secondaryColor,
  outline: colors.greyScales[200],
  textColor: colors.greyScales[900],
  primary: colors.primaryColor,
  border: colors.greyScales[200],
  primaryBtn: colors.blue,
  secondary: colors.greyScales[500],
  error: colors.deepPink,
  fall: colors.orange,
  success: colors.green,
};
