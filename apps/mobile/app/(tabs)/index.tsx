// apps/mobile/app/(tabs)/index.tsx
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { ScreenContainer } from "../../src/components/layout/ScreenContainer"
import { fontFamilies } from "../../src/theme/fonts"
import { colors, radii, shadows, spacing } from "../../src/theme/tokens"
import { typography } from "../../src/theme/typography"

const STUB = {
  name: "Lucas",
  streak: 3,
  lessonTitle: "Falsos Cognatos Essenciais",
  lessonTime: "8 min",
  lessonProgress: 0.4,
  episodeTitle: "No Mercado: Frutas e Preços",
  episodeLevel: "A1",
  episodeDuration: "4:32",
  badges: [
    { emoji: "🔥", label: "Sequência" },
    { emoji: "🎧", label: "Ouvinte" },
    { emoji: "🌟", label: "Iniciante" },
  ],
}

const JOURNEY_STAGES = [
  { label: "Sobrevivência", pct: 0.7 },
  { label: "Interação", pct: 0.15 },
  { label: "Fluência", pct: 0 },
]

export default function HomeScreen() {
  return (
    <ScreenContainer statusBarStyle="dark-content">
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={[typography.labelLarge, { color: colors.onSurfaceVariant }]}>
              Bom dia,
            </Text>
            <Text style={typography.headlineSmall}>{STUB.name}! 👋</Text>
          </View>
          <View style={styles.streak}>
            <Ionicons name="flame" size={20} color={colors.secondaryContainer} />
            <Text style={styles.streakCount}>{STUB.streak}</Text>
          </View>
        </View>

        {/* Journey Progress */}
        <View style={[styles.card]}>
          <Text style={[typography.labelLarge, styles.cardLabel]}>Sua jornada</Text>
          <View style={styles.progressBarContainer}>
            {JOURNEY_STAGES.map((stage, i) => (
              <View key={i} style={styles.progressSegment}>
                <View style={styles.segmentTrack}>
                  <View
                    style={[
                      styles.segmentFill,
                      { width: `${stage.pct * 100}%` },
                    ]}
                  />
                </View>
                <Text style={styles.segmentLabel} numberOfLines={1}>
                  {stage.label}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Today's Lesson */}
        <View style={[styles.card, styles.rowCard]}>
          <View style={styles.lessonInfo}>
            <Text style={[typography.labelMedium, { color: colors.primary }]}>
              Lição de hoje
            </Text>
            <Text style={typography.titleMedium}>{STUB.lessonTitle}</Text>
            <Text style={[typography.bodyMedium, { color: colors.onSurfaceVariant }]}>
              {STUB.lessonTime}
            </Text>
          </View>
          <View style={styles.progressRing}>
            <Text style={styles.progressPct}>
              {Math.round(STUB.lessonProgress * 100)}%
            </Text>
          </View>
        </View>

        {/* Recommended Episode */}
        <View style={[styles.card, styles.rowCard]}>
          <View style={styles.episodeCover}>
            <Ionicons name="headset" size={28} color={colors.onPrimary} />
          </View>
          <View style={styles.episodeInfo}>
            <View style={styles.episodeBadge}>
              <Text style={styles.episodeBadgeText}>{STUB.episodeLevel}</Text>
            </View>
            <Text
              style={[typography.bodyMedium, { fontFamily: fontFamilies.bodySemiBold }]}
              numberOfLines={2}
            >
              {STUB.episodeTitle}
            </Text>
            <Text style={[typography.labelMedium, { color: colors.onSurfaceVariant }]}>
              {STUB.episodeDuration}
            </Text>
          </View>
          <Ionicons name="play-circle" size={38} color={colors.primary} />
        </View>

        {/* Quick access */}
        <View style={styles.quickRow}>
          {[
            { icon: "warning-outline", label: "Alerta\nPortunhol" },
            { icon: "mic-outline", label: "Dicas de\nPronúncia" },
            { icon: "chatbubble-outline", label: "Parceiro de\nConversa" },
          ].map((item, i) => (
            <View key={i} style={styles.quickItem}>
              <View style={styles.quickIcon}>
                <Ionicons
                  name={item.icon as React.ComponentProps<typeof Ionicons>["name"]}
                  size={22}
                  color={colors.primary}
                />
              </View>
              <Text style={[typography.labelMedium, { textAlign: "center" }]}>
                {item.label}
              </Text>
            </View>
          ))}
        </View>

        {/* Recent badges */}
        <View>
          <Text style={[typography.labelLarge, styles.cardLabel]}>
            Conquistas recentes
          </Text>
          <View style={styles.badgesRow}>
            {STUB.badges.map((b, i) => (
              <View key={i} style={styles.badge}>
                <Text style={styles.badgeEmoji}>{b.emoji}</Text>
                <Text
                  style={[
                    typography.labelMedium,
                    { color: colors.onSurfaceVariant },
                  ]}
                >
                  {b.label}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  scroll: {
    padding: spacing["2xl"],
    gap: spacing["2xl"],
    paddingBottom: spacing["4xl"],
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  streak: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    backgroundColor: colors.surfaceContainer,
    borderRadius: radii.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  streakCount: {
    fontFamily: fontFamilies.headlineBold,
    fontSize: 15,
    color: colors.onSurface,
  },
  card: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: radii.md,
    padding: spacing["2xl"],
    ...shadows.subtle,
  },
  rowCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  cardLabel: {
    marginBottom: spacing.md,
  },
  progressBarContainer: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  progressSegment: {
    flex: 1,
    gap: spacing.xs,
  },
  segmentTrack: {
    height: 6,
    backgroundColor: colors.surfaceContainerHigh,
    borderRadius: radii.full,
    overflow: "hidden",
  },
  segmentFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: radii.full,
  },
  segmentLabel: {
    fontFamily: fontFamilies.bodyRegular,
    fontSize: 10,
    color: colors.onSurfaceVariant,
  },
  lessonInfo: {
    flex: 1,
    gap: spacing.xs,
  },
  progressRing: {
    width: 52,
    height: 52,
    borderRadius: radii.full,
    borderWidth: 4,
    borderColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  progressPct: {
    fontFamily: fontFamilies.headlineSemiBold,
    fontSize: 12,
    color: colors.primary,
  },
  episodeCover: {
    width: 52,
    height: 52,
    borderRadius: radii.sm,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  episodeInfo: {
    flex: 1,
    gap: spacing.xs,
  },
  episodeBadge: {
    backgroundColor: colors.tertiaryContainer,
    borderRadius: radii.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    alignSelf: "flex-start",
  },
  episodeBadgeText: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 10,
    color: colors.onTertiary,
  },
  quickRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quickItem: {
    alignItems: "center",
    gap: spacing.sm,
    flex: 1,
  },
  quickIcon: {
    width: 52,
    height: 52,
    borderRadius: radii.md,
    backgroundColor: colors.surfaceContainer,
    justifyContent: "center",
    alignItems: "center",
  },
  badgesRow: {
    flexDirection: "row",
    gap: spacing.md,
  },
  badge: {
    alignItems: "center",
    gap: spacing.xs,
    flex: 1,
    backgroundColor: colors.surfaceContainer,
    borderRadius: radii.md,
    padding: spacing.md,
  },
  badgeEmoji: {
    fontSize: 24,
  },
})
