// apps/mobile/app/(tabs)/lessons.tsx
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { ScreenContainer } from "../../src/components/layout/ScreenContainer"
import { fontFamilies } from "../../src/theme/fonts"
import { colors, radii, shadows, spacing } from "../../src/theme/tokens"
import { typography } from "../../src/theme/typography"

type LessonStatus = "completed" | "current" | "locked"

interface Lesson {
  id: string
  title: string
  emoji: string
  status: LessonStatus
}

interface Stage {
  title: string
  lessons: Lesson[]
}

const STAGES: Stage[] = [
  {
    title: "Estágio 1 — Sobrevivência",
    lessons: [
      { id: "1-1", title: "Olá, Brasil!", emoji: "👋", status: "completed" },
      { id: "1-2", title: "Me chamo...", emoji: "🙋", status: "completed" },
      { id: "1-3", title: "Números e Preços", emoji: "🔢", status: "current" },
      { id: "1-4", title: "Falsos Cognatos", emoji: "⚠️", status: "locked" },
      { id: "1-5", title: "No Mercado", emoji: "🛒", status: "locked" },
    ],
  },
  {
    title: "Estágio 2 — Interação",
    lessons: [
      { id: "2-1", title: "Tempo e Clima", emoji: "☀️", status: "locked" },
      { id: "2-2", title: "Família", emoji: "👨‍👩‍👧", status: "locked" },
      { id: "2-3", title: "Rotina Diária", emoji: "🕐", status: "locked" },
    ],
  },
  {
    title: "Estágio 3 — Fluência Prática",
    lessons: [
      { id: "3-1", title: "Debates e Opiniões", emoji: "💬", status: "locked" },
      { id: "3-2", title: "Gírias Brasileiras", emoji: "🇧🇷", status: "locked" },
    ],
  },
]

export default function LessonsScreen() {
  return (
    <ScreenContainer statusBarStyle="dark-content">
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[typography.headlineSmall, styles.pageTitle]}>
          Mapa de Lições
        </Text>

        {STAGES.map((stage) => (
          <View key={stage.title} style={styles.stage}>
            <View style={styles.stageHeader}>
              <Text style={styles.stageTitle}>{stage.title}</Text>
            </View>
            {stage.lessons.map((lesson, index) => (
              <LessonNode
                key={lesson.id}
                lesson={lesson}
                isLast={index === stage.lessons.length - 1}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </ScreenContainer>
  )
}

function LessonNode({
  lesson,
  isLast,
}: {
  lesson: Lesson
  isLast: boolean
}) {
  const isCompleted = lesson.status === "completed"
  const isCurrent = lesson.status === "current"
  const isLocked = lesson.status === "locked"

  return (
    <View style={styles.nodeRow}>
      <View style={styles.nodeColumn}>
        <View
          style={[
            styles.nodeCircle,
            isCompleted && styles.nodeCompleted,
            isCurrent && styles.nodeCurrent,
            isLocked && styles.nodeLocked,
          ]}
        >
          {isCompleted ? (
            <Ionicons name="checkmark" size={20} color={colors.onPrimary} />
          ) : isLocked ? (
            <Ionicons name="lock-closed" size={15} color={colors.outline} />
          ) : (
            <Text style={styles.nodeEmoji}>{lesson.emoji}</Text>
          )}
        </View>
        {!isLast && <View style={styles.connector} />}
      </View>

      <View style={[styles.nodeLabel, isCurrent && styles.nodeLabelCurrent]}>
        {isCurrent && <Text style={styles.currentTag}>Atual</Text>}
        <Text
          style={[
            typography.bodyMedium,
            isLocked ? styles.nodeTitleLocked : styles.nodeTitle,
          ]}
        >
          {lesson.title}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  scroll: {
    padding: spacing["2xl"],
    paddingBottom: spacing["4xl"],
    gap: spacing["3xl"],
  },
  pageTitle: {
    marginBottom: spacing.sm,
  },
  stage: {},
  stageHeader: {
    backgroundColor: colors.primaryContainer,
    borderRadius: radii.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  stageTitle: {
    fontFamily: fontFamilies.headlineSemiBold,
    fontSize: 13,
    color: colors.onPrimaryContainer,
  },
  nodeRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.lg,
    minHeight: 60,
  },
  nodeColumn: {
    alignItems: "center",
    width: 48,
  },
  nodeCircle: {
    width: 48,
    height: 48,
    borderRadius: radii.full,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.surfaceContainer,
    borderWidth: 2,
    borderColor: colors.outlineVariant,
  },
  nodeCompleted: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  nodeCurrent: {
    width: 56,
    height: 56,
    marginLeft: -4,
    backgroundColor: colors.primaryContainer,
    borderColor: colors.primary,
    borderWidth: 3,
    ...shadows.soft,
  },
  nodeLocked: {
    opacity: 0.45,
  },
  connector: {
    width: 2,
    flex: 1,
    minHeight: 12,
    backgroundColor: colors.outlineVariant,
  },
  nodeLabel: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 14,
    paddingBottom: spacing.lg,
  },
  nodeLabelCurrent: {
    paddingTop: 16,
  },
  currentTag: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 10,
    color: colors.primary,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 2,
  },
  nodeTitle: {
    color: colors.onSurface,
  },
  nodeTitleLocked: {
    color: colors.outline,
  },
  nodeEmoji: {
    fontSize: 20,
  },
})
