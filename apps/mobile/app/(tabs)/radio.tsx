import { ScrollView, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { ScreenContainer } from "../../src/components/layout/ScreenContainer"
import { fontFamilies } from "../../src/theme/fonts"
import { colors, radii, shadows, spacing } from "../../src/theme/tokens"
import { typography } from "../../src/theme/typography"

type Level = "A1" | "A2" | "B1" | "B2"

interface Episode {
  id: string
  title: string
  level: Level
  theme: string
  duration: string
  isNew?: boolean
  coverEmoji: string
}

const EPISODES: Episode[] = [
  {
    id: "e1",
    title: "No Mercado: Frutas e Preços",
    level: "A1",
    theme: "Cotidiano",
    duration: "4:32",
    isNew: true,
    coverEmoji: "🛒",
  },
  {
    id: "e2",
    title: "No Aeroporto: Check-in e Bagagem",
    level: "A1",
    theme: "Viagem",
    duration: "5:10",
    coverEmoji: "✈️",
  },
  {
    id: "e3",
    title: "Marcando um Encontro",
    level: "A2",
    theme: "Social",
    duration: "6:48",
    isNew: true,
    coverEmoji: "📅",
  },
  {
    id: "e4",
    title: "No Médico: Sintomas e Tratamento",
    level: "A2",
    theme: "Saúde",
    duration: "7:12",
    coverEmoji: "🏥",
  },
  {
    id: "e5",
    title: "Entrevista de Emprego",
    level: "B1",
    theme: "Trabalho",
    duration: "8:30",
    coverEmoji: "💼",
  },
  {
    id: "e6",
    title: "Carnaval: História e Cultura",
    level: "B1",
    theme: "Cultura",
    duration: "9:05",
    coverEmoji: "🎭",
  },
]

const LEVEL_COLORS: Record<Level, { bg: string; text: string }> = {
  A1: { bg: "#e6f9f0", text: colors.primary },
  A2: { bg: "#fff8e1", text: colors.secondary },
  B1: { bg: "#e3f0ff", text: colors.tertiary },
  B2: { bg: "#fce4ec", text: "#c62828" },
}

const FILTERS = ["Todos", "A1", "A2", "B1", "B2"]

export default function RadioScreen() {
  return (
    <ScreenContainer statusBarStyle="dark-content">
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="headset" size={26} color={colors.primary} />
          <Text style={typography.headlineSmall}>Rádio Brasil</Text>
        </View>

        {/* Featured */}
        <View>
          <Text style={[typography.labelLarge, styles.sectionLabel]}>
            Em destaque
          </Text>
          <EpisodeCard episode={EPISODES[0]} featured />
        </View>

        {/* Level filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
        >
          {FILTERS.map((f, i) => (
            <View
              key={f}
              style={[styles.filterChip, i === 0 && styles.filterChipActive]}
            >
              <Text
                style={[
                  styles.filterText,
                  i === 0 && styles.filterTextActive,
                ]}
              >
                {f}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Episode list */}
        <View style={styles.list}>
          {EPISODES.slice(1).map((ep) => (
            <EpisodeCard key={ep.id} episode={ep} />
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  )
}

function EpisodeCard({
  episode,
  featured = false,
}: {
  episode: Episode
  featured?: boolean
}) {
  const levelColor = LEVEL_COLORS[episode.level]

  return (
    <View style={[styles.card, featured && styles.cardFeatured, shadows.subtle]}>
      <View style={styles.cover}>
        <Text style={styles.coverEmoji}>{episode.coverEmoji}</Text>
      </View>
      <View style={styles.cardInfo}>
        <View style={styles.cardMeta}>
          <View style={[styles.levelBadge, { backgroundColor: levelColor.bg }]}>
            <Text style={[styles.levelText, { color: levelColor.text }]}>
              {episode.level}
            </Text>
          </View>
          {episode.isNew && (
            <View style={styles.newBadge}>
              <Text style={styles.newText}>Novo</Text>
            </View>
          )}
        </View>
        <Text
          style={[
            typography.bodyMedium,
            { fontFamily: fontFamilies.bodySemiBold },
          ]}
          numberOfLines={2}
        >
          {episode.title}
        </Text>
        <Text
          style={[typography.labelMedium, { color: colors.onSurfaceVariant }]}
        >
          {episode.theme} · {episode.duration}
        </Text>
      </View>
      <Ionicons name="play-circle-outline" size={30} color={colors.primary} />
    </View>
  )
}

const styles = StyleSheet.create({
  scroll: {
    padding: spacing["2xl"],
    paddingBottom: spacing["4xl"],
    gap: spacing["2xl"],
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  sectionLabel: {
    marginBottom: spacing.md,
  },
  filters: {
    gap: spacing.sm,
    paddingRight: spacing["2xl"],
  },
  filterChip: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radii.full,
    backgroundColor: colors.surfaceContainer,
    borderWidth: 1,
    borderColor: colors.outlineVariant,
  },
  filterChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterText: {
    fontFamily: fontFamilies.bodyMedium,
    fontSize: 13,
    color: colors.onSurfaceVariant,
  },
  filterTextActive: {
    color: colors.onPrimary,
  },
  list: {
    gap: spacing.md,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: radii.md,
    padding: spacing.md,
  },
  cardFeatured: {
    padding: spacing["2xl"],
  },
  cover: {
    width: 52,
    height: 52,
    borderRadius: radii.sm,
    backgroundColor: colors.surfaceContainer,
    justifyContent: "center",
    alignItems: "center",
  },
  coverEmoji: {
    fontSize: 26,
  },
  cardInfo: {
    flex: 1,
    gap: spacing.xs,
  },
  cardMeta: {
    flexDirection: "row",
    gap: spacing.xs,
    alignItems: "center",
  },
  levelBadge: {
    borderRadius: radii.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
  },
  levelText: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 11,
  },
  newBadge: {
    backgroundColor: colors.secondaryContainer,
    borderRadius: radii.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
  },
  newText: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 11,
    color: colors.onSecondaryContainer,
  },
})
