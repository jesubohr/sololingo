// apps/mobile/app/(tabs)/explore.tsx
import { StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { ScreenContainer } from "../../src/components/layout/ScreenContainer"
import { fontFamilies } from "../../src/theme/fonts"
import { colors, radii, shadows, spacing } from "../../src/theme/tokens"
import { typography } from "../../src/theme/typography"

const SECTIONS = [
  {
    icon: "warning" as const,
    iconColor: "#E84D0E",
    bgColor: "#fff3ee",
    title: "Alerta Portunhol",
    description:
      "Evite os erros mais comuns de falantes de espanhol ao aprender português.",
    cta: "Explorar alertas",
  },
  {
    icon: "mic" as const,
    iconColor: colors.tertiary,
    bgColor: "#e3f0ff",
    title: "Dicas de Pronúncia",
    description:
      "Domine os sons do português brasileiro: nasais, o R carioca, as vogais reduzidas.",
    cta: "Ver dicas",
  },
  {
    icon: "chatbubbles" as const,
    iconColor: colors.primary,
    bgColor: "#e6f9f0",
    title: "Parceiro de Conversa",
    description:
      "Pratique com um personagem brasileiro no seu ritmo e receba correções em tempo real.",
    cta: "Começar conversa",
  },
]

export default function ExploreScreen() {
  return (
    <ScreenContainer statusBarStyle="dark-content">
      <View style={styles.container}>
        <Text style={typography.headlineSmall}>Explorar</Text>
        <View style={styles.sections}>
          {SECTIONS.map((section) => (
            <View key={section.title} style={[styles.card, shadows.subtle]}>
              <View
                style={[styles.iconBox, { backgroundColor: section.bgColor }]}
              >
                <Ionicons
                  name={section.icon}
                  size={26}
                  color={section.iconColor}
                />
              </View>
              <View style={styles.cardContent}>
                <Text style={typography.titleMedium}>{section.title}</Text>
                <Text
                  style={[
                    typography.bodyMedium,
                    { color: colors.onSurfaceVariant },
                  ]}
                >
                  {section.description}
                </Text>
                <View style={styles.ctaRow}>
                  <Text style={styles.ctaText}>{section.cta}</Text>
                  <Ionicons
                    name="arrow-forward"
                    size={14}
                    color={colors.primary}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing["2xl"],
    gap: spacing["2xl"],
  },
  sections: {
    gap: spacing.lg,
  },
  card: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: radii.md,
    padding: spacing["2xl"],
    gap: spacing.lg,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: radii.md,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    gap: spacing.sm,
  },
  ctaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  ctaText: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 14,
    color: colors.primary,
  },
})
