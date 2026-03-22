// apps/mobile/src/theme/tokens.ts

export const colors = {
  // Primary — Brazilian green
  primary: "#006d43",
  primaryContainer: "#00a86b",
  primaryLight: "#78fbb6",
  onPrimary: "#ffffff",
  onPrimaryContainer: "#00331d",

  // Secondary — Amber/gold
  secondary: "#835500",
  secondaryContainer: "#feae2c",
  secondaryLight: "#ffb955",
  onSecondary: "#ffffff",
  onSecondaryContainer: "#6b4500",

  // Tertiary — Sky blue
  tertiary: "#005fac",
  tertiaryContainer: "#4c95ec",
  onTertiary: "#ffffff",
  onTertiaryContainer: "#002c55",

  // Surfaces — warm off-white tonal system
  background: "#fbf9f4",
  surface: "#fbf9f4",
  surfaceDim: "#dbdad5",
  surfaceContainer: "#f0eee9",
  surfaceContainerHigh: "#eae8e3",
  surfaceContainerHighest: "#e4e2dd",
  surfaceContainerLow: "#f5f3ee",
  surfaceContainerLowest: "#ffffff",

  // Text — never pure black
  onSurface: "#1b1c19",
  onSurfaceVariant: "#3d4a41",

  // Outline
  outline: "#6d7a70",
  outlineVariant: "#bccabe",

  // Error
  error: "#ba1a1a",
  errorContainer: "#ffdad6",
  onError: "#ffffff",
  onErrorContainer: "#93000a",

  // Inverse
  inverseSurface: "#30312e",
  inverseOnSurface: "#f2f1ec",
  inversePrimary: "#59de9b",
} as const

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 32,
  "4xl": 40,
  "5xl": 48,
  "6xl": 64,
} as const

export const radii = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 48,
  full: 9999,
} as const

export const shadows = {
  soft: {
    shadowColor: "#1b1c19",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.06,
    shadowRadius: 32,
    elevation: 3,
  },
  subtle: {
    shadowColor: "#1b1c19",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
} as const
