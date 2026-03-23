// apps/mobile/app/(tabs)/profile.tsx
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { ScreenContainer } from "../../src/components/layout/ScreenContainer"
import { fontFamilies } from "../../src/theme/fonts"
import { colors, radii, shadows, spacing } from "../../src/theme/tokens"
import { typography } from "../../src/theme/typography"

const STUB = {
  name: "Lucas García",
  level: "A1",
  stageName: "Sobrevivência",
  stats: [
    { label: "Sequência", value: "3 dias", icon: "flame" as const },
    { label: "Palavras", value: "42", icon: "book" as const },
    { label: "Horas", value: "1.5h", icon: "headset" as const },
    { label: "Episódios", value: "2", icon: "radio" as const },
  ],
  journey: [
    { stage: "Sobrevivência", pct: 0.7 },
    { stage: "Interação", pct: 0.15 },
    { stage: "Fluência Prática", pct: 0 },
  ],
  badges: [
    { emoji: "🔥", label: "Chama Viva", earned: true },
    { emoji: "🎧", label: "Ouvinte", earned: true },
    { emoji: "🌟", label: "Iniciante", earned: true },
    { emoji: "🏆", label: "Campeão", earned: false },
    { emoji: "🗣️", label: "Falante", earned: false },
    { emoji: "📚", label: "Estudioso", earned: false },
  ],
}

export default function ProfileScreen() {
  const initials = STUB.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <ScreenContainer statusBarStyle="dark-content">
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Top bar */}
        <View style={styles.topBar}>
          <View />
          <Text style={typography.titleMedium}>Perfil</Text>
          <Ionicons
            name="settings-outline"
            size={22}
            color={colors.onSurfaceVariant}
          />
        </View>

        {/* Identity */}
        <View style={styles.identity}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initials}</Text>
          </View>
          <Text style={typography.headlineSmall}>{STUB.name}</Text>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>
              {STUB.level} · {STUB.stageName}
            </Text>
          </View>
        </View>

        {/* Stats 2x2 grid */}
        <View style={styles.statsGrid}>
          {STUB.stats.map((stat) => (
            <View key={stat.label} style={[styles.statCard, shadows.subtle]}>
              <Ionicons name={stat.icon} size={20} color={colors.primary} />
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text
                style={[
                  typography.labelMedium,
                  { color: colors.onSurfaceVariant },
                ]}
              >
                {stat.label}
              </Text>
            </View>
          ))}
        </View>

        {/* Journey progress */}
        <View style={[styles.section, shadows.subtle]}>
          <Text style={[typography.titleMedium, styles.sectionTitle]}>
            Sua Jornada
          </Text>
          {STUB.journey.map((item) => (
            <View key={item.stage} style={styles.progressRow}>
              <Text style={[typography.bodyMedium, styles.progressLabel]}>
                {item.stage}
              </Text>
              <View style={styles.progressTrack}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${item.pct * 100}%` },
                  ]}
                />
              </View>
              <Text
                style={[
                  typography.labelMedium,
                  { color: colors.primary, width: 36, textAlign: "right" },
                ]}
              >
                {Math.round(item.pct * 100)}%
              </Text>
            </View>
          ))}
        </View>

        {/* Badges */}
        <View style={styles.section}>
          <Text style={[typography.titleMedium, styles.sectionTitle]}>
            Conquistas
          </Text>
          <View style={styles.badgesGrid}>
            {STUB.badges.map((b) => (
              <View
                key={b.label}
                style={[styles.badge, !b.earned && styles.badgeLocked]}
              >
                <Text
                  style={[styles.badgeEmoji, !b.earned && { opacity: 0.3 }]}
                >
                  {b.emoji}
                </Text>
                <Text
                  style={[
                    typography.labelMedium,
                    {
                      color: b.earned ? colors.onSurface : colors.outline,
                      textAlign: "center",
                    },
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
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  identity: {
    alignItems: "center",
    gap: spacing.md,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: radii.full,
    backgroundColor: colors.primaryContainer,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontFamily: fontFamilies.headlineExtraBold,
    fontSize: 28,
    color: colors.onPrimaryContainer,
  },
  levelBadge: {
    backgroundColor: colors.surfaceContainer,
    borderRadius: radii.full,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xs,
  },
  levelText: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 13,
    color: colors.onSurfaceVariant,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
  },
  statCard: {
    flex: 1,
    minWidth: "44%",
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: radii.md,
    padding: spacing.lg,
    alignItems: "center",
    gap: spacing.xs,
  },
  statValue: {
    fontFamily: fontFamilies.headlineBold,
    fontSize: 22,
    color: colors.onSurface,
  },
  section: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: radii.md,
    padding: spacing["2xl"],
  },
  sectionTitle: {
    marginBottom: spacing.lg,
  },
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  progressLabel: {
    width: 110,
    color: colors.onSurface,
  },
  progressTrack: {
    flex: 1,
    height: 6,
    backgroundColor: colors.surfaceContainerHigh,
    borderRadius: radii.full,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: radii.full,
  },
  badgesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
  },
  badge: {
    width: "30%",
    alignItems: "center",
    gap: spacing.xs,
    padding: spacing.md,
    backgroundColor: colors.surfaceContainer,
    borderRadius: radii.md,
  },
  badgeLocked: {
    backgroundColor: colors.surfaceContainerHighest,
  },
  badgeEmoji: {
    fontSize: 26,
  },
})
