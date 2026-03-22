// apps/mobile/app/_layout.tsx
import { useEffect } from "react"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useAppFonts } from "../src/theme/fonts"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded, fontError] = useAppFonts()

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return <Stack screenOptions={{ headerShown: false }} />
}
