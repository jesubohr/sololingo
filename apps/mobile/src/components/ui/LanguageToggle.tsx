// apps/mobile/src/components/ui/LanguageToggle.tsx
import { Pressable, StyleSheet, Text, View, type ViewStyle } from "react-native"
import type { InterfaceLanguage } from "@sololingo/types"
import { fontFamilies } from "../../theme/fonts"
import { colors, radii, spacing } from "../../theme/tokens"

interface LanguageToggleProps {
  value: InterfaceLanguage
  onChange: (lang: InterfaceLanguage) => void
  style?: ViewStyle
}

const languages: { key: InterfaceLanguage; label: string }[] = [
  { key: "pt", label: "PT" },
  { key: "es", label: "ES" },
  { key: "en", label: "EN" },
]

export function LanguageToggle({ value, onChange, style }: LanguageToggleProps) {
  return (
    <View style={[styles.container, style]}>
      {languages.map(({ key, label }) => {
        const isActive = value === key
        return (
          <Pressable
            key={key}
            onPress={() => onChange(key)}
            style={[styles.chip, isActive && styles.chipActive]}
          >
            <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
              {label}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  chip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radii.full,
    backgroundColor: colors.surfaceContainerLow,
  },
  chipActive: {
    backgroundColor: colors.primary,
  },
  chipText: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 13,
    color: colors.onSurface,
  },
  chipTextActive: {
    color: colors.onPrimary,
  },
})
