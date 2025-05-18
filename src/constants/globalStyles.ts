import { StyleSheet, Platform } from "react-native";
import { colorPallette } from "@/constants/colors";

export const globalStyles = StyleSheet.create({
  // Layout
  statusBarHeight: {
    height: 44,
  },
  navbarHeight: {
    height: 44,
  },
  marginLayout: {
    marginHorizontal: 16,
  },
  tabBarHeight: {
    height: 78,
  },
  homeIndicator: {
    height: 34,
  },

  // Font
  fontNormal: {
    fontFamily: "ReadexPro_400Regular",
  },
  fontBold: {
    fontFamily: "ReadexPro_700Bold",
  },

  //color:
  primaryColor: {
    color: colorPallette.primary, // Primary color for text
  },
  secondaryColor: {
    color: colorPallette.secondary, // Secondary text color
  },
  errorColor: {
    color: colorPallette.error, // Error text color
  },
  successColor: {
    color: colorPallette.success, // Success text color
  },
  fallColor: {
    color: colorPallette.fall, // Fall color for specific elements
  },
  background: {
    backgroundColor: colorPallette.background, // Main background color
  },
  surface: {
    backgroundColor: colorPallette.surface, // Surface color for cards, containers, etc.
  },
  outline: {
    borderColor: colorPallette.outline, // Outline color for borders
    borderWidth: 1, // Border width
  },

  // Shadows
  innerShadow: {
    // iOS inner shadow simulation
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: -2, // Note: This doesn't create an inner shadow on Android
      },
    }),
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
    backgroundColor: colorPallette.surface,
    overflow: "hidden",
  },

  // Inner shadow variations
  innerShadowLight: {
    // iOS inner shadow simulation - light version
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
    }),
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.03)",
    backgroundColor: colorPallette.surface,
    overflow: "hidden",
  },

  innerShadowDark: {
    // iOS inner shadow simulation - darker version
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
      },
    }),
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.08)",
    backgroundColor: colorPallette.surface,
    overflow: "hidden",
  },

  // Helper to use with innerShadow for better Android support
  innerShadowAndroid: {
    // For Android, a pseudo inner shadow effect
    backgroundColor: "rgba(0,0,0,0.03)",
    borderRadius: 8, // Match the parent's border radius
    position: "absolute",
    top: 2,
    left: 2,
    right: 2,
    bottom: 2,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
});
