// apps/mobile/src/theme/fonts.ts
import { useFonts } from "expo-font"
import {
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from "@expo-google-fonts/plus-jakarta-sans"
import {
  BeVietnamPro_400Regular,
  BeVietnamPro_500Medium,
  BeVietnamPro_600SemiBold,
} from "@expo-google-fonts/be-vietnam-pro"

export const fontFamilies = {
  headlineSemiBold: "PlusJakartaSans_600SemiBold",
  headlineBold: "PlusJakartaSans_700Bold",
  headlineExtraBold: "PlusJakartaSans_800ExtraBold",
  bodyRegular: "BeVietnamPro_400Regular",
  bodyMedium: "BeVietnamPro_500Medium",
  bodySemiBold: "BeVietnamPro_600SemiBold",
} as const

export function useAppFonts() {
  return useFonts({
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
    BeVietnamPro_400Regular,
    BeVietnamPro_500Medium,
    BeVietnamPro_600SemiBold,
  })
}
