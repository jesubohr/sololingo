// apps/mobile/src/theme/typography.ts
import { StyleSheet } from "react-native"
import { fontFamilies } from "./fonts"
import { colors } from "./tokens"

export const typography = StyleSheet.create({
  displayLarge: {
    fontFamily: fontFamilies.headlineBold,
    fontSize: 40,
    lineHeight: 48,
    color: colors.onSurface,
  },
  headlineMedium: {
    fontFamily: fontFamilies.headlineSemiBold,
    fontSize: 28,
    lineHeight: 36,
    color: colors.onSurface,
  },
  headlineSmall: {
    fontFamily: fontFamilies.headlineSemiBold,
    fontSize: 24,
    lineHeight: 32,
    color: colors.onSurface,
  },
  titleLarge: {
    fontFamily: fontFamilies.bodyMedium,
    fontSize: 22,
    lineHeight: 28,
    color: colors.onSurface,
  },
  titleMedium: {
    fontFamily: fontFamilies.bodyMedium,
    fontSize: 18,
    lineHeight: 24,
    color: colors.onSurface,
  },
  bodyLarge: {
    fontFamily: fontFamilies.bodyRegular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.onSurface,
  },
  bodyMedium: {
    fontFamily: fontFamilies.bodyRegular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.onSurface,
  },
  labelLarge: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 14,
    lineHeight: 20,
    color: colors.onSurface,
  },
  labelMedium: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 12,
    lineHeight: 16,
    color: colors.onSurface,
  },
})
