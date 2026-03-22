// apps/mobile/app/(auth)/welcome.tsx
import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useRouter } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"
import type { InterfaceLanguage } from "@sololingo/types"
import { ScreenContainer } from "../../src/components/layout/ScreenContainer"
import { Button } from "../../src/components/ui/Button"
import { GlassCard } from "../../src/components/ui/GlassCard"
import { LanguageToggle } from "../../src/components/ui/LanguageToggle"
import { fontFamilies } from "../../src/theme/fonts"
import { colors, radii, spacing } from "../../src/theme/tokens"

export default function WelcomeScreen() {
  const router = useRouter()
  const [language, setLanguage] = useState<InterfaceLanguage>("es")

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <View style={styles.headerSpacer} />
        <LanguageToggle value={language} onChange={setLanguage} />
      </View>

      <View style={styles.content}>
        <LinearGradient
          colors={[colors.primary, colors.primaryContainer]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <Text style={styles.heroTitle}>Fala, Brasil!</Text>
          <Text style={styles.heroSubtitle}>
            Aprende portugues brasileno a partir de tu espanol
          </Text>

          <GlassCard style={styles.glassCard}>
            <Text style={styles.glassEmoji}>🚀</Text>
            <Text style={styles.glassTitle}>Smart Sync</Text>
            <Text style={styles.glassBody}>
              Tu espanol te da un 40% de ventaja en portugues. Aprovechalo.
            </Text>
          </GlassCard>
        </LinearGradient>

        <View style={styles.buttons}>
          <Button
            label="Crear cuenta"
            onPress={() => router.push("/(auth)/signup")}
            variant="primary"
          />
          <Button
            label="Iniciar sesion"
            onPress={() => router.push("/(auth)/login")}
            variant="secondary"
          />
        </View>

        <Pressable style={styles.termsContainer}>
          <Text style={styles.termsText}>
            Al continuar, aceptas los{" "}
            <Text style={styles.termsLink}>Terminos</Text>
            {" "}y la{" "}
            <Text style={styles.termsLink}>Politica de Privacidad</Text>
          </Text>
        </Pressable>
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: spacing["2xl"],
    paddingTop: spacing.md,
  },
  headerSpacer: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing["2xl"],
    paddingTop: spacing["3xl"],
    justifyContent: "center",
  },
  hero: {
    borderRadius: radii.xl,
    padding: spacing["3xl"],
    gap: spacing.lg,
  },
  heroTitle: {
    fontFamily: fontFamilies.headlineExtraBold,
    fontSize: 36,
    lineHeight: 44,
    color: colors.onPrimary,
  },
  heroSubtitle: {
    fontFamily: fontFamilies.bodyRegular,
    fontSize: 16,
    lineHeight: 24,
    color: "rgba(255, 255, 255, 0.85)",
  },
  glassCard: {
    marginTop: spacing.lg,
  },
  glassEmoji: {
    fontSize: 28,
    marginBottom: spacing.sm,
  },
  glassTitle: {
    fontFamily: fontFamilies.headlineSemiBold,
    fontSize: 18,
    lineHeight: 24,
    color: colors.onSurface,
    marginBottom: spacing.xs,
  },
  glassBody: {
    fontFamily: fontFamilies.bodyRegular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.onSurfaceVariant,
  },
  buttons: {
    gap: spacing.md,
    marginTop: spacing["3xl"],
  },
  termsContainer: {
    alignItems: "center",
    paddingVertical: spacing["2xl"],
  },
  termsText: {
    fontFamily: fontFamilies.bodyRegular,
    fontSize: 12,
    lineHeight: 16,
    color: colors.outline,
    textAlign: "center",
  },
  termsLink: {
    color: colors.primary,
    fontFamily: fontFamilies.bodyMedium,
  },
})
