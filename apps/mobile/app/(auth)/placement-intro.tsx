// apps/mobile/app/(auth)/placement-intro.tsx
import { StyleSheet, Text, View } from "react-native"
import { useRouter } from "expo-router"
import { ScreenContainer } from "../../src/components/layout/ScreenContainer"
import { Button } from "../../src/components/ui/Button"
import { colors, radii, spacing } from "../../src/theme/tokens"
import { typography } from "../../src/theme/typography"

export default function PlacementIntroScreen() {
  const router = useRouter()

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <Text style={styles.emoji}>🎯</Text>

        <Text style={[typography.headlineSmall, styles.center]}>
          Vamos descobrir seu nível
        </Text>

        <Text style={[typography.bodyLarge, styles.subtitle]}>
          Em 2 minutos, vamos personalizar sua jornada de aprendizado no Português Brasileiro.
        </Text>

        <View style={styles.points}>
          {[
            "5 perguntas de múltipla escolha",
            "Sem timer — vá no seu ritmo",
            "Resultado imediato com seu nível atual",
          ].map((point, i) => (
            <View key={i} style={styles.point}>
              <View style={styles.bullet} />
              <Text style={[typography.bodyMedium, styles.pointText]}>{point}</Text>
            </View>
          ))}
        </View>

        <View style={styles.buttons}>
          <Button
            label="Iniciar teste"
            onPress={() => router.push("/(auth)/placement-question")}
            variant="primary"
          />
          <Button
            label="Começar do zero (nível A1)"
            onPress={() => router.replace("/(tabs)")}
            variant="secondary"
          />
        </View>
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: spacing["2xl"],
    justifyContent: "center",
    gap: spacing["2xl"],
  },
  emoji: {
    fontSize: 56,
    textAlign: "center",
  },
  center: {
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: colors.onSurfaceVariant,
  },
  points: {
    gap: spacing.md,
    backgroundColor: colors.surfaceContainer,
    borderRadius: radii.md,
    padding: spacing["2xl"],
  },
  point: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: radii.full,
    backgroundColor: colors.primary,
    flexShrink: 0,
  },
  pointText: {
    flex: 1,
    color: colors.onSurface,
  },
  buttons: {
    gap: spacing.md,
  },
})
