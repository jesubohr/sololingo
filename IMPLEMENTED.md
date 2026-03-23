# Implemented Features

## Auth Flow — Screens & Design System

**Completed:** 2026-03-22
**Plan:** `implementation_plan.md`

### Theme (`apps/mobile/src/theme/`)

| File | What it provides |
|------|-----------------|
| `tokens.ts` | Colors (Material You warm palette, primary=#006d43), spacing (xs–6xl), radii (sm–full), shadows (soft/subtle) |
| `fonts.ts` | `useAppFonts()` hook + `fontFamilies` constants — loads Plus Jakarta Sans (600/700/800) and Be Vietnam Pro (400/500/600) |
| `typography.ts` | Named `StyleSheet` presets: displayLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, bodyLarge, bodyMedium, labelLarge, labelMedium |

### Layout Components (`apps/mobile/src/components/layout/`)

| File | What it does |
|------|-------------|
| `ScreenContainer.tsx` | `SafeAreaView` wrapper with `StatusBar`; accepts `statusBarStyle` prop |
| `KeyboardAvoidingContainer.tsx` | `KeyboardAvoidingView` + `ScrollView` with `keyboardShouldPersistTaps="handled"` |

### UI Components (`apps/mobile/src/components/ui/`)

| File | What it does |
|------|-------------|
| `BrandText.tsx` | "Sololingo" wordmark in ExtraBold; `size="large"` (40px) or `size="medium"` (28px) |
| `Button.tsx` | Three variants: `primary` (LinearGradient green), `secondary` (outlined), `social` (white card); supports `icon`, `loading`, `disabled` |
| `TextInput.tsx` | Labeled input with tonal focus state (border + bg shift), show/hide toggle for passwords, inline error text |
| `Divider.tsx` | Hairline rule with centered label text (e.g. "or") |
| `GlassCard.tsx` | `BlurView` on iOS (intensity 20), solid `rgba(255,255,255,0.92)` fallback on Android |
| `LanguageToggle.tsx` | PT/ES/EN chip selector; uses `InterfaceLanguage` type from `@sololingo/types` |

### Navigation (`apps/mobile/app/`)

| File | What it does |
|------|-------------|
| `_layout.tsx` | Root Stack; gates render on `useAppFonts()`; hides native splash screen once fonts are ready |
| `index.tsx` | Immediately redirects to `/(auth)/splash` |
| `(auth)/_layout.tsx` | Auth Stack with `headerShown: false` and `animation: "fade"` |

### Auth Screens (`apps/mobile/app/(auth)/`)

| File | What it does |
|------|-------------|
| `splash.tsx` | Centered branding; auto-navigates to `/(auth)/welcome` after 2 seconds |
| `welcome.tsx` | Hero LinearGradient card with GlassCard feature callout; language toggle (PT/ES/EN); CTA buttons to Login and Sign Up |
| `login.tsx` | Email + password form with client-side validation; "forgot password" link; Google/Apple social buttons; link to Sign Up |
| `signup.tsx` | Social-first layout (Google/Apple), then email form (name + email + password); terms text; link to Login |

### Dependencies added

```
expo-splash-screen
expo-linear-gradient
expo-blur
@expo-google-fonts/plus-jakarta-sans
@expo-google-fonts/be-vietnam-pro
```

---

## Not yet implemented

- Auth backend integration (login/signup handlers are stubs with `console.log`)
- Forgot password flow
- Social auth (Google / Apple) — buttons render but `onPress` is a no-op
- Authenticated app screens (post-login routing)
- Persistent language selection (currently local state on Welcome screen)

---

## Placement Test + Main Navigation Shell

**Completed:** 2026-03-23
**Plan:** `docs/superpowers/plans/2026-03-22-placement-test-and-main-navigation.md`

### Navigation Update

- `(auth)/login.tsx` — stub handler now navigates to `/(auth)/placement-intro`
- `(auth)/signup.tsx` — stub handler now navigates to `/(auth)/placement-intro`

### Placement Test (`apps/mobile/app/(auth)/`)

| File | What it does |
|------|-------------|
| `placement-intro.tsx` | Friendly intro: 🎯 emoji, headline, 3-point checklist, "Iniciar teste" → placement-question, "Começar do zero" → /(tabs) |
| `placement-question.tsx` | 5 hardcoded multiple-choice questions, progress dots, 700ms feedback delay, passes score to result via searchParam |
| `placement-result.tsx` | Computes level (A1/A2/B1) from score, shows level badge, description, next steps; "Começar minha jornada" → /(tabs) |

### Main Tab Navigator (`apps/mobile/app/(tabs)/`)

| File | What it does |
|------|-------------|
| `_layout.tsx` | Expo Router Tabs with 5 tabs; Ionicons (filled active, outline inactive); design-token styled tab bar |
| `index.tsx` | Home — greeting, streak pill, journey progress bar (3 segments), today's lesson card, recommended episode card, quick-access row (3 items), recent badges strip |
| `lessons.tsx` | Lessons Map — vertical scrollable map across 3 stages; completed/current/locked node states with connector lines |
| `radio.tsx` | Rádio Brasil Library — header, featured episode, horizontal level filter chips, scrollable episode card list |
| `explore.tsx` | Explore — 3 feature cards: Alerta Portunhol, Dicas de Pronúncia, Parceiro de Conversa |
| `profile.tsx` | Profile — initials avatar, level badge, 2×2 stats grid, journey progress bars, badges gallery (earned/locked) |

### Still not implemented

- Auth backend integration (login/signup still stubs)
- Forgot password flow
- Social auth (Google / Apple)
- Persistent user state / language selection
- Lesson detail screens (4.2–4.10)
- Rádio Brasil detail + player screens (5.2–5.4)
- Explore detail screens (6.2–6.5)
- Parceiro de Conversa screens (7.1–7.4)
- Settings screen (8.2), Achievements gallery (8.3), Leagues screen (8.4)
- Notifications + system states (9.x)
