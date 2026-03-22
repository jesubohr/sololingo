// apps/mobile/app/(auth)/splash.tsx
import { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { useRouter } from "expo-router"
import { BrandText } from "../../src/components/ui/BrandText"
import { fontFamilies } from "../../src/theme/fonts"
import { colors, spacing } from "../../src/theme/tokens"

export default function AppSplashScreen() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/welcome")
    }, 2000)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Text style={styles.icon}>📖</Text>
        <Text style={styles.icon}>🎉</Text>
        <Text style={styles.icon}>🌍</Text>
      </View>

      <BrandText size="large" />

      <Text style={styles.tagline}>Brasil na Mao!</Text>

      <Text style={styles.version}>Versao 2.4.0</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing["3xl"],
  },
  iconRow: {
    flexDirection: "row",
    gap: spacing["2xl"],
    marginBottom: spacing["3xl"],
  },
  icon: {
    fontSize: 32,
  },
  tagline: {
    fontFamily: fontFamilies.bodyMedium,
    fontSize: 18,
    lineHeight: 24,
    color: colors.onSurfaceVariant,
    marginTop: spacing.md,
  },
  version: {
    fontFamily: fontFamilies.bodyRegular,
    fontSize: 13,
    color: colors.outline,
    position: "absolute",
    bottom: 48,
  },
})
