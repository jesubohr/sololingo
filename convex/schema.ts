import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

const cefrLevel = v.union(
  v.literal("A1"),
  v.literal("A2"),
  v.literal("B1"),
  v.literal("B2"),
)

const learningStage = v.union(
  v.literal(1),
  v.literal(2),
  v.literal(3),
)

const interfaceLanguage = v.union(
  v.literal("pt"),
  v.literal("es"),
  v.literal("en"),
)

const exerciseType = v.union(
  v.literal("listen_repeat"),
  v.literal("multiple_choice"),
  v.literal("fill_blank"),
  v.literal("put_in_order"),
  v.literal("spot_portunhol"),
  v.literal("flashcard"),
)

const alertCategory = v.union(
  v.literal("false_cognate"),
  v.literal("register_trap"),
  v.literal("gender_trap"),
  v.literal("preposition_trap"),
  v.literal("structural"),
  v.literal("taboo"),
)

const pronunciationCategory = v.union(
  v.literal("nasal_vowels"),
  v.literal("brazilian_r"),
  v.literal("palatal_sounds"),
  v.literal("reduced_vowels"),
  v.literal("connected_speech"),
)

const badgeCategory = v.union(
  v.literal("journey"),
  v.literal("consistency"),
  v.literal("pronunciation"),
  v.literal("radio_brasil"),
  v.literal("portunhol_survivor"),
  v.literal("vocabulary"),
  v.literal("conversationalist"),
)

const srsRating = v.union(
  v.literal("forgotten"),
  v.literal("hard"),
  v.literal("good"),
  v.literal("easy"),
)

const characterId = v.union(
  v.literal("carlos"),
  v.literal("juliana"),
  v.literal("dona_fatima"),
)

const conversationMode = v.union(
  v.literal("text"),
  v.literal("voice"),
)

const lessonStatus = v.union(
  v.literal("not_started"),
  v.literal("in_progress"),
  v.literal("completed"),
)

export default defineSchema({
  // ── Users ──────────────────────────────────────────────
  users: defineTable({
    name: v.string(),
    email: v.string(),
    interfaceLanguage: interfaceLanguage,
    currentStage: learningStage,
    currentLevel: cefrLevel,
    xp: v.number(),
    streakDays: v.number(),
    streakShieldCount: v.number(),
    isPremium: v.boolean(),
    premiumExpiresAt: v.optional(v.number()),
    lastActivityAt: v.number(),
  })
    .index("by_email", ["email"]),

  // ── Vocabulary Items (content) ─────────────────────────
  vocabulary_items: defineTable({
    portuguese: v.string(),
    audioUrl: v.optional(v.string()),
    category: v.string(),
    cefrLevel: cefrLevel,
    stage: learningStage,
    contrastiveNote: v.optional(v.string()),
    isPortunholAlert: v.boolean(),
    initialStability: v.number(),
    initialDifficulty: v.number(),
    isPublished: v.boolean(),
  })
    .index("by_stage", ["stage"])
    .index("by_level", ["cefrLevel"]),

  // ── User Progress (SRS state per vocabulary item) ──────
  user_progress: defineTable({
    userId: v.id("users"),
    vocabularyItemId: v.id("vocabulary_items"),
    stability: v.number(),
    difficulty: v.number(),
    dueAt: v.number(),
    lapses: v.number(),
    repetitions: v.number(),
    lastRating: v.optional(srsRating),
    masteryScore: v.number(),
    lastReviewedAt: v.optional(v.number()),
  })
    .index("by_user", ["userId"])
    .index("by_user_item", ["userId", "vocabularyItemId"])
    .index("by_user_due", ["userId", "dueAt"]),

  // ── Lessons ────────────────────────────────────────────
  lessons: defineTable({
    stage: learningStage,
    order: v.number(),
    title: v.string(),
    theme: v.string(),
    cefrLevel: cefrLevel,
    estimatedMinutes: v.number(),
    vocabularyItemIds: v.array(v.id("vocabulary_items")),
    isPublished: v.boolean(),
  })
    .index("by_stage_order", ["stage", "order"]),

  // ── Exercises ──────────────────────────────────────────
  exercises: defineTable({
    lessonId: v.id("lessons"),
    type: exerciseType,
    order: v.number(),
    promptText: v.optional(v.string()),
    promptAudioUrl: v.optional(v.string()),
    options: v.optional(v.array(v.string())),
    correctAnswer: v.string(),
    explanationText: v.optional(v.string()),
    vocabularyItemId: v.optional(v.id("vocabulary_items")),
    alertId: v.optional(v.id("alerts")),
  })
    .index("by_lesson", ["lessonId"]),

  // ── User Lesson Progress ───────────────────────────────
  user_lesson_progress: defineTable({
    userId: v.id("users"),
    lessonId: v.id("lessons"),
    status: lessonStatus,
    accuracy: v.number(),
    xpEarned: v.number(),
    completedAt: v.optional(v.number()),
  })
    .index("by_user", ["userId"])
    .index("by_user_lesson", ["userId", "lessonId"]),

  // ── Episodes (Rádio Brasil) ────────────────────────────
  episodes: defineTable({
    title: v.string(),
    theme: v.string(),
    cefrLevel: cefrLevel,
    durationSeconds: v.number(),
    audioUrl: v.string(),
    transcript: v.array(v.object({
      word: v.string(),
      startMs: v.number(),
      endMs: v.number(),
      sentenceIndex: v.number(),
    })),
    vocabularyHighlightIds: v.array(v.id("vocabulary_items")),
    isPublished: v.boolean(),
    publishedAt: v.optional(v.number()),
  })
    .index("by_level", ["cefrLevel"])
    .index("by_theme", ["theme"]),

  // ── Alerts (Portunhol) ────────────────────────────────
  alerts: defineTable({
    riskyWord: v.string(),
    category: alertCategory,
    dangerLevel: v.union(v.literal(1), v.literal(2), v.literal(3)),
    trapExplanation: v.string(),
    correctForm: v.string(),
    exampleSentence: v.string(),
    exampleAudioUrl: v.optional(v.string()),
    isPublished: v.boolean(),
  })
    .index("by_category", ["category"]),

  // ── User Alerts (tracking) ────────────────────────────
  user_alerts: defineTable({
    userId: v.id("users"),
    alertId: v.id("alerts"),
    seenAt: v.number(),
    reviewCount: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_alert", ["userId", "alertId"]),

  // ── Pronunciation Tips ────────────────────────────────
  pronunciation_tips: defineTable({
    phenomenon: v.string(),
    category: pronunciationCategory,
    explanationText: v.string(),
    audioUrl: v.optional(v.string()),
    difficulty: v.union(v.literal(1), v.literal(2), v.literal(3)),
    isPublished: v.boolean(),
  })
    .index("by_category", ["category"]),

  // ── User Pronunciation Tips (tracking) ────────────────
  user_pronunciation_tips: defineTable({
    userId: v.id("users"),
    pronunciationTipId: v.id("pronunciation_tips"),
    completedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_tip", ["userId", "pronunciationTipId"]),

  // ── Conversation Sessions ─────────────────────────────
  conversation_sessions: defineTable({
    userId: v.id("users"),
    characterId: characterId,
    mode: conversationMode,
    exchanges: v.number(),
    corrections: v.array(v.object({
      original: v.string(),
      improved: v.string(),
      note: v.string(),
    })),
    xpEarned: v.number(),
    startedAt: v.number(),
    endedAt: v.optional(v.number()),
  })
    .index("by_user", ["userId"]),

  // ── Badges ────────────────────────────────────────────
  badges: defineTable({
    name: v.string(),
    description: v.string(),
    category: badgeCategory,
    unlockCondition: v.string(),
    iconUrl: v.optional(v.string()),
  })
    .index("by_category", ["category"]),

  // ── User Badges ───────────────────────────────────────
  user_badges: defineTable({
    userId: v.id("users"),
    badgeId: v.id("badges"),
    earnedAt: v.number(),
  })
    .index("by_user", ["userId"]),

  // ── Leagues ───────────────────────────────────────────
  leagues: defineTable({
    name: v.string(),
    tier: v.number(),
    weekStartAt: v.number(),
    weekEndAt: v.number(),
  })
    .index("by_tier", ["tier"]),

  // ── League Members ────────────────────────────────────
  league_members: defineTable({
    leagueId: v.id("leagues"),
    userId: v.id("users"),
    weeklyXp: v.number(),
    rank: v.optional(v.number()),
  })
    .index("by_league", ["leagueId"])
    .index("by_user", ["userId"])
    .index("by_league_xp", ["leagueId", "weeklyXp"]),
})
