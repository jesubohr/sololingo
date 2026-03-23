// apps/mobile/app/(auth)/placement-result.tsx
import { StyleSheet, Text, View } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import { ScreenContainer } from "../../src/components/layout/ScreenContainer"
import { Button } from "../../src/components/ui/Button"
import { fontFamilies } from "../../src/theme/fonts"
import { colors, radii, spacing } from "../../src/theme/tokens"
import { typography } from "../../src/theme/typography"

interface LevelDef {
  min: number
  max: number
  code: string
  name: string
  description: string
  next: string
}

const LEVELS: LevelDef[] = [
  {
    min: 0,
    max: 1,
    code: "A1",
    name: "Sobrevivência",
    description:
      "Você está começando! Vamos construir as bases do Português Brasileiro passo a passo.",
    next: "Aprenderás saudações, apresentações e frases do dia a dia.",
  },
  {
    min: 2,
    max: 3,
    code: "A2",
    name: "Interação",
    description:
      "Você já tem uma base sólida. Vamos expandir seu vocabulário e sua confiança.",
    next:
      "Focaremos em conversas mais naturais, narração de eventos e expressões coloquiais.",
  },
  {
    min: 4,
    max: 5,
    code: "B1",
    name: "Fluência Prática",
    description:
      "Impressionante! Você já tem uma boa compreensão do Português Brasileiro.",
    next: "Refinaremos pronúncia, expressões idiomáticas e contextos mais complexos.",
  },
]

export default function PlacementResultScreen() {
  const { score } = useLocalSearchParams<{ score: string }>()
  const router = useRouter()
  const numScore = parseInt(score ?? "0", 10)
  const level =
    LEVELS.find((l) => numScore >= l.min && numScore <= l.max) ?? LEVELS[0]

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <View style={styles.badge}>
          <Text style={styles.badgeCode}>{level.code}</Text>
          <Text style={styles.badgeName}>{level.name}</Text>
        </View>

        <View style={styles.info}>
          <Text style={[typography.headlineSmall, styles.center]}>Seu nível atual</Text>
          <Text style={[typography.bodyLarge, styles.description]}>
            {level.description}
          </Text>
        </View>

        <View style={styles.nextBox}>
          <Text style={styles.nextLabel}>O que vem a seguir</Text>
          <Text style={[typography.bodyMedium, { color: colors.onSurfaceVariant }]}>
            {level.next}
          </Text>
        </View>

        <Button
          label="Começar minha jornada"
          onPress={() => router.replace("/(tabs)")}
          variant="primary"
        />
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: spacing["2xl"],
    justifyContent: "center",
    gap: spacing["3xl"],
  },
  badge: {
    alignSelf: "center",
    backgroundColor: colors.primaryContainer,
    borderRadius: radii.xl,
    paddingVertical: spacing["3xl"],
    paddingHorizontal: spacing["4xl"],
    alignItems: "center",
    gap: spacing.sm,
  },
  badgeCode: {
    fontFamily: fontFamilies.headlineExtraBold,
    fontSize: 48,
    lineHeight: 56,
    color: colors.onPrimaryContainer,
  },
  badgeName: {
    fontFamily: fontFamilies.headlineSemiBold,
    fontSize: 20,
    lineHeight: 28,
    color: colors.onPrimaryContainer,
  },
  info: {
    gap: spacing.lg,
  },
  center: {
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    color: colors.onSurfaceVariant,
  },
  nextBox: {
    backgroundColor: colors.surfaceContainer,
    borderRadius: radii.md,
    padding: spacing["2xl"],
    gap: spacing.sm,
  },
  nextLabel: {
    fontFamily: fontFamilies.headlineSemiBold,
    fontSize: 14,
    color: colors.primary,
  },
})
