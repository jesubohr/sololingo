# Placement Test + Main Navigation Shell — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Placement Test onboarding flow (views 1.5–1.7) and the complete main tab navigation shell with all 5 tab landing screens (views 3.1, 4.1, 5.1, 6.1, 8.1) using stub data.

**Architecture:** Placement Test screens live in the existing `(auth)` route group and navigate to `/(tabs)` on completion. The main tab navigator uses Expo Router's `Tabs` component in a new `(tabs)` route group. All screens use the existing design system (tokens, typography, UI components) with hardcoded stub data — no backend integration in this phase.

**Tech Stack:** React Native 0.83, Expo SDK 55, Expo Router 3, TypeScript, `@expo/vector-icons` (bundled with Expo SDK), existing design tokens + components.

---

## What's Already Done (read IMPLEMENTED.md before starting)

- Auth screens 1.1–1.4: Splash, Welcome, Login, Signup — **do not recreate**
- Design tokens: `src/theme/tokens.ts`, `src/theme/fonts.ts`, `src/theme/typography.ts`
- Layout components: `ScreenContainer`, `KeyboardAvoidingContainer`
- UI components: `Button`, `TextInput`, `BrandText`, `Divider`, `GlassCard`, `LanguageToggle`
- `login.tsx` and `signup.tsx` have stub handlers that `console.log` — we will update them

---

## File Structure

**New files:**
```
apps/mobile/app/(auth)/placement-intro.tsx
apps/mobile/app/(auth)/placement-question.tsx
apps/mobile/app/(auth)/placement-result.tsx
apps/mobile/app/(tabs)/_layout.tsx
apps/mobile/app/(tabs)/index.tsx
apps/mobile/app/(tabs)/lessons.tsx
apps/mobile/app/(tabs)/radio.tsx
apps/mobile/app/(tabs)/explore.tsx
apps/mobile/app/(tabs)/profile.tsx
```

**Modified files:**
```
apps/mobile/app/(auth)/login.tsx      — stub handleLogin navigates to /(auth)/placement-intro
apps/mobile/app/(auth)/signup.tsx     — stub handleSignup navigates to /(auth)/placement-intro
IMPLEMENTED.md                        — updated after each task
```

---

## Task 1: Wire Post-Auth Navigation

**Files:**
- Modify: `apps/mobile/app/(auth)/login.tsx`
- Modify: `apps/mobile/app/(auth)/signup.tsx`

- [ ] **Step 1: Read current login.tsx stub handler**

Read `apps/mobile/app/(auth)/login.tsx` and locate `handleLogin`. It currently calls `console.log("Login:", ...)` with no navigation.

- [ ] **Step 2: Update handleLogin to navigate on "success"**

In `login.tsx`, replace the stub body of `handleLogin` (after `validate()` check) with:

```typescript
function handleLogin() {
  if (!validate()) return
  // TODO: integrate with auth backend
  console.log("Login:", { email, password })
  router.replace("/(auth)/placement-intro")
}
```

- [ ] **Step 3: Read current signup.tsx stub handler**

Read `apps/mobile/app/(auth)/signup.tsx` and locate the submit handler.

- [ ] **Step 4: Update signup submit handler**

In `signup.tsx`, update the submit handler so after `console.log(...)` it also calls:

```typescript
router.replace("/(auth)/placement-intro")
```

- [ ] **Step 5: Run typecheck**

```bash
cd apps/mobile && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add apps/mobile/app/(auth)/login.tsx apps/mobile/app/(auth)/signup.tsx
git commit -m "feat(mobile): wire post-auth navigation to placement-intro"
```

---

## Task 2: Placement Test — Intro Screen (view 1.5)

**Files:**
- Create: `apps/mobile/app/(auth)/placement-intro.tsx`

- [ ] **Step 1: Create the screen**

```typescript
// apps/mobile/app/(auth)/placement-intro.tsx
import { StyleSheet, Text, View } from "react-native"
import { useRouter } from "expo-router"
import { ScreenContainer } from "../../src/components/layout/ScreenContainer"
import { Button } from "../../src/components/ui/Button"
import { fontFamilies } from "../../src/theme/fonts"
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
```

- [ ] **Step 2: Run typecheck**

```bash
cd apps/mobile && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Manual verification**

Run `expo start` and navigate: Login → (tap login with any input) → should land on Placement Intro. Verify layout looks correct.

- [ ] **Step 4: Commit**

```bash
git add apps/mobile/app/(auth)/placement-intro.tsx
git commit -m "feat(mobile): add Placement Test intro screen (view 1.5)"
```

---

## Task 3: Placement Test — Question Screen (view 1.6)

**Files:**
- Create: `apps/mobile/app/(auth)/placement-question.tsx`

The screen tracks current question index, selected answer, and cumulative score in local state. After answering each question, it waits 700ms (to show feedback), then advances. After the final question, it replaces the route with `placement-result` passing the score as a search param.

- [ ] **Step 1: Create the screen**

```typescript
// apps/mobile/app/(auth)/placement-question.tsx
import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useRouter } from "expo-router"
import { ScreenContainer } from "../../src/components/layout/ScreenContainer"
import { fontFamilies } from "../../src/theme/fonts"
import { colors, radii, shadows, spacing } from "../../src/theme/tokens"
import { typography } from "../../src/theme/typography"

interface Question {
  prompt: string
  options: string[]
  correct: number
}

const QUESTIONS: Question[] = [
  {
    prompt: "Como se traduz 'Estoy embarazada' para o Português Brasileiro?",
    options: ["Estou embaraçada", "Estou grávida", "Sou grávida", "Fico grávida"],
    correct: 1,
  },
  {
    prompt: "Qual frase está correta em Português Brasileiro?",
    options: [
      "Eu quero ir al supermercado",
      "Eu quero ir ao supermercado",
      "Eu quiero ir ao supermercado",
      "Eu vou ir no supermercado",
    ],
    correct: 1,
  },
  {
    prompt: "O que significa 'borracha' em Português Brasileiro?",
    options: ["Mulher bêbada", "Material elástico", "Burra", "Borboleta"],
    correct: 1,
  },
  {
    prompt: "Como se diz 'ônibus' em Português Brasileiro?",
    options: ["Autobús", "Bus", "Ônibus", "Bonde"],
    correct: 2,
  },
  {
    prompt: "Qual é a conjugação correta de 'ter' na 1ª pessoa do singular?",
    options: ["Tenho", "Tengo", "Teno", "Tem"],
    correct: 0,
  },
]

export default function PlacementQuestionScreen() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)

  const question = QUESTIONS[currentIndex]

  function handleSelect(optionIndex: number) {
    if (selected !== null) return
    setSelected(optionIndex)

    const isCorrect = optionIndex === question.correct
    const newScore = isCorrect ? score + 1 : score

    setTimeout(() => {
      if (currentIndex + 1 < QUESTIONS.length) {
        setCurrentIndex((prev) => prev + 1)
        setSelected(null)
        if (isCorrect) setScore(newScore)
      } else {
        if (isCorrect) {
          router.replace({
            pathname: "/(auth)/placement-result",
            params: { score: String(newScore) },
          })
        } else {
          router.replace({
            pathname: "/(auth)/placement-result",
            params: { score: String(score) },
          })
        }
      }
    }, 700)
  }

  function optionStyle(index: number) {
    if (selected === null) return styles.option
    if (index === question.correct) return [styles.option, styles.optionCorrect]
    if (index === selected) return [styles.option, styles.optionWrong]
    return styles.option
  }

  return (
    <ScreenContainer>
      <View style={styles.container}>
        {/* Progress dots */}
        <View style={styles.dots}>
          {QUESTIONS.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i < currentIndex && styles.dotDone,
                i === currentIndex && styles.dotActive,
              ]}
            />
          ))}
        </View>

        <Text style={[typography.labelMedium, styles.counter]}>
          {currentIndex + 1} / {QUESTIONS.length}
        </Text>

        <Text style={[typography.titleLarge, styles.prompt]}>
          {question.prompt}
        </Text>

        <View style={styles.options}>
          {question.options.map((option, i) => (
            <Pressable key={i} style={optionStyle(i)} onPress={() => handleSelect(i)}>
              <Text style={styles.optionText}>{option}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing["2xl"],
    paddingTop: spacing["3xl"],
    gap: spacing["2xl"],
  },
  dots: {
    flexDirection: "row",
    gap: spacing.sm,
    justifyContent: "center",
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: radii.full,
    backgroundColor: colors.outlineVariant,
  },
  dotDone: {
    backgroundColor: colors.primary,
  },
  dotActive: {
    width: 24,
    backgroundColor: colors.primaryContainer,
  },
  counter: {
    textAlign: "center",
    color: colors.onSurfaceVariant,
  },
  prompt: {
    textAlign: "center",
    color: colors.onSurface,
    paddingHorizontal: spacing.sm,
  },
  options: {
    gap: spacing.md,
  },
  option: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: radii.md,
    padding: spacing["2xl"],
    borderWidth: 1.5,
    borderColor: colors.outlineVariant,
    ...shadows.subtle,
  },
  optionCorrect: {
    backgroundColor: "#e6f9f0",
    borderColor: colors.primary,
  },
  optionWrong: {
    backgroundColor: "#fff0f0",
    borderColor: colors.error,
  },
  optionText: {
    fontFamily: fontFamilies.bodyMedium,
    fontSize: 16,
    lineHeight: 22,
    color: colors.onSurface,
    textAlign: "center",
  },
})
```

- [ ] **Step 2: Run typecheck**

```bash
cd apps/mobile && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add apps/mobile/app/(auth)/placement-question.tsx
git commit -m "feat(mobile): add Placement Test question screen (view 1.6)"
```

---

## Task 4: Placement Test — Result Screen (view 1.7)

**Files:**
- Create: `apps/mobile/app/(auth)/placement-result.tsx`

Score is received via `useLocalSearchParams`. Level is computed from the score range: 0–1 → A1, 2–3 → A2, 4–5 → B1.

- [ ] **Step 1: Create the screen**

```typescript
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
```

- [ ] **Step 2: Run typecheck**

```bash
cd apps/mobile && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Manual verification — full placement test flow**

Navigate the complete flow: Welcome → Sign Up → Placement Intro → answer all 5 questions → Result screen shows correct level → tap "Começar minha jornada" → (will 404 until task 5 creates tabs).

- [ ] **Step 4: Commit**

```bash
git add apps/mobile/app/(auth)/placement-result.tsx
git commit -m "feat(mobile): add Placement Test result screen (view 1.7)"
```

---

## Task 5: Main Tab Navigator

**Files:**
- Create: `apps/mobile/app/(tabs)/_layout.tsx`

> **Note:** `@expo/vector-icons` is bundled with Expo SDK 55 and available without installing. Import from `@expo/vector-icons`.

- [ ] **Step 1: Create the tabs layout**

```typescript
// apps/mobile/app/(tabs)/_layout.tsx
import { Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { fontFamilies } from "../../src/theme/fonts"
import { colors } from "../../src/theme/tokens"

type IconName = React.ComponentProps<typeof Ionicons>["name"]

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.outline,
        tabBarStyle: {
          backgroundColor: colors.surfaceContainerLowest,
          borderTopColor: colors.outlineVariant,
          borderTopWidth: 1,
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontFamily: fontFamilies.bodyMedium,
          fontSize: 11,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="lessons"
        options={{
          title: "Lições",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "book" : "book-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="radio"
        options={{
          title: "Rádio",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "headset" : "headset-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explorar",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "compass" : "compass-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
```

- [ ] **Step 2: Run typecheck**

```bash
cd apps/mobile && npx tsc --noEmit
```

Expected: no errors (the tab screen files don't exist yet — TS won't complain since they're route strings).

- [ ] **Step 3: Commit**

```bash
git add apps/mobile/app/(tabs)/_layout.tsx
git commit -m "feat(mobile): add main tab navigator with 5 tabs"
```

---

## Task 6: Home Screen (view 3.1)

**Files:**
- Create: `apps/mobile/app/(tabs)/index.tsx`

All data is stubbed inline. No backend calls.

- [ ] **Step 1: Create the screen**

```typescript
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
```

- [ ] **Step 2: Run typecheck**

```bash
cd apps/mobile && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Manual verification**

Complete full flow to reach tabs. Verify Home tab renders correctly with all sections visible. Tap other tabs — they will 404 until tasks 7–10.

- [ ] **Step 4: Commit**

```bash
git add apps/mobile/app/(tabs)/index.tsx
git commit -m "feat(mobile): add Home screen with stub data (view 3.1)"
```

---

## Task 7: Lessons Map Screen (view 4.1)

**Files:**
- Create: `apps/mobile/app/(tabs)/lessons.tsx`

A vertical scrollable map with lesson nodes organized by stage. Nodes have three states: `completed` (green check), `current` (larger highlighted), `locked` (grayed padlock). A vertical connector line runs between nodes.

- [ ] **Step 1: Create the screen**

```typescript
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
```

- [ ] **Step 2: Run typecheck**

```bash
cd apps/mobile && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add apps/mobile/app/(tabs)/lessons.tsx
git commit -m "feat(mobile): add Lessons Map screen with stub data (view 4.1)"
```

---

## Task 8: Rádio Brasil Library Screen (view 5.1)

**Files:**
- Create: `apps/mobile/app/(tabs)/radio.tsx`

- [ ] **Step 1: Create the screen**

```typescript
// apps/mobile/app/(tabs)/radio.tsx
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
```

- [ ] **Step 2: Run typecheck**

```bash
cd apps/mobile && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add apps/mobile/app/(tabs)/radio.tsx
git commit -m "feat(mobile): add Rádio Brasil library screen with stub data (view 5.1)"
```

---

## Task 9: Explore Screen (view 6.1)

**Files:**
- Create: `apps/mobile/app/(tabs)/explore.tsx`

Three feature cards — Alerta Portunhol, Dicas de Pronúncia, Parceiro de Conversa — each with an icon, description, and CTA text. Tapping is a no-op for now (detail screens are future work).

- [ ] **Step 1: Create the screen**

```typescript
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
```

- [ ] **Step 2: Run typecheck**

```bash
cd apps/mobile && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add apps/mobile/app/(tabs)/explore.tsx
git commit -m "feat(mobile): add Explore screen (view 6.1)"
```

---

## Task 10: Profile Screen (view 8.1)

**Files:**
- Create: `apps/mobile/app/(tabs)/profile.tsx`

- [ ] **Step 1: Create the screen**

```typescript
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
```

- [ ] **Step 2: Run typecheck**

```bash
cd apps/mobile && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Full flow manual verification**

Run through the complete flow:
- Welcome → Sign Up → Placement Intro → 5 questions → Result → tap "Começar minha jornada"
- Verify all 5 tabs are visible and tappable
- Verify Home, Lessons, Rádio, Explorar, Perfil tabs each render correctly
- Verify tab bar icons switch between outlined/filled on focus

- [ ] **Step 4: Commit**

```bash
git add apps/mobile/app/(tabs)/profile.tsx
git commit -m "feat(mobile): add Profile screen with stub data (view 8.1)"
```

---

## Task 11: Update IMPLEMENTED.md

- [ ] **Step 1: Update IMPLEMENTED.md**

Append the following section to `IMPLEMENTED.md` under the existing content:

```markdown
---

## Placement Test + Main Navigation Shell

**Completed:** 2026-03-22
**Plan:** `docs/superpowers/plans/2026-03-22-placement-test-and-main-navigation.md`

### Placement Test (`apps/mobile/app/(auth)/`)

| File | What it does |
|------|-------------|
| `placement-intro.tsx` | Friendly intro explaining the test, key points list, "Start" / "Skip to A1" buttons |
| `placement-question.tsx` | 5 hardcoded multiple-choice questions, progress dots, immediate correct/wrong feedback, passes score to result via searchParam |
| `placement-result.tsx` | Displays computed level (A1/A2/B1) from score, description, next steps, "Start my journey" CTA → /(tabs) |

### Main Tab Navigator (`apps/mobile/app/(tabs)/`)

| File | What it does |
|------|-------------|
| `_layout.tsx` | Expo Router Tabs with 5 tabs; Ionicons icons (outlined inactive, filled active); design-token styled tab bar |
| `index.tsx` | Home screen — greeting, streak badge, journey progress bar, Today's Lesson card, Recommended Episode card, quick-access row, recent badges strip |
| `lessons.tsx` | Lessons Map — vertically scrollable node map across 3 stages, connector lines, completed/current/locked node states |
| `radio.tsx` | Rádio Brasil Library — featured episode, horizontal level filter chips, scrollable episode card list |
| `explore.tsx` | Explore — 3 feature cards: Alerta Portunhol, Dicas de Pronúncia, Parceiro de Conversa |
| `profile.tsx` | Profile — initials avatar, level badge, 2×2 stats grid, journey progress bars, badges gallery (earned/locked) |

### Updated files

- `(auth)/login.tsx` — stub handler now navigates to `/(auth)/placement-intro`
- `(auth)/signup.tsx` — stub handler now navigates to `/(auth)/placement-intro`

### Still not implemented

- Backend integration for auth (login/signup still stubs)
- Forgot password flow
- Social auth (Google / Apple)
- Persistent user state / language selection
- Lesson detail screens (4.2–4.10)
- Rádio Brasil detail + player screens (5.2–5.4)
- Explore detail screens (6.2–6.5)
- Parceiro de Conversa screens (7.1–7.4)
- Settings screen (8.2)
- Achievements gallery (8.3)
- Leagues screen (8.4)
- Notifications + system states (9.x)
```

- [ ] **Step 2: Commit**

```bash
git add IMPLEMENTED.md
git commit -m "docs: update IMPLEMENTED.md with placement test and main navigation screens"
```

---

## Summary

After all tasks complete, the app will have:

- ✅ **Complete onboarding flow**: Splash → Welcome → Sign Up/Login → Placement Test (3 screens) → Main App
- ✅ **Full tab navigation shell**: 5 tabs with polished icons and styling
- ✅ **5 tab landing screens** with realistic stub data: Home, Lessons Map, Rádio Brasil, Explore, Profile

Views implemented in this plan: **1.5, 1.6, 1.7, 3.1, 4.1, 5.1, 6.1, 8.1** (8 of 30 remaining views)

Views still remaining: 2.x (future — already handled by tab setup), 4.2–4.10, 5.2–5.4, 6.2–6.5, 7.1–7.4, 8.2–8.4, 9.x
