// apps/mobile/src/components/ui/TextInput.tsx
import { useState } from "react"
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  View,
  type KeyboardTypeOptions,
  type ViewStyle,
} from "react-native"
import { fontFamilies } from "../../theme/fonts"
import { colors, radii, spacing } from "../../theme/tokens"

interface TextInputProps {
  label: string
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  secureTextEntry?: boolean
  error?: string
  keyboardType?: KeyboardTypeOptions
  autoCapitalize?: "none" | "sentences" | "words" | "characters"
  style?: ViewStyle
}

export function TextInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  error,
  keyboardType,
  autoCapitalize,
  style,
}: TextInputProps) {
  const [focused, setFocused] = useState(false)
  const [hidePassword, setHidePassword] = useState(secureTextEntry)

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          focused && styles.inputFocused,
          error ? styles.inputError : undefined,
        ]}
      >
        <RNTextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.outline}
          secureTextEntry={hidePassword}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {secureTextEntry && (
          <Pressable
            onPress={() => setHidePassword(!hidePassword)}
            style={styles.toggleButton}
          >
            <Text style={styles.toggleText}>
              {hidePassword ? "Mostrar" : "Ocultar"}
            </Text>
          </Pressable>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  label: {
    fontFamily: fontFamilies.bodyMedium,
    fontSize: 14,
    lineHeight: 20,
    color: colors.onSurfaceVariant,
    marginBottom: spacing.xs,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: radii.md,
    paddingHorizontal: spacing.lg,
    minHeight: 52,
  },
  inputFocused: {
    backgroundColor: colors.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: colors.primary,
    // Compensate for border to prevent layout shift
    paddingHorizontal: spacing.lg - 2,
  },
  inputError: {
    borderWidth: 2,
    borderColor: colors.error,
    paddingHorizontal: spacing.lg - 2,
  },
  input: {
    flex: 1,
    fontFamily: fontFamilies.bodyRegular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.onSurface,
    paddingVertical: spacing.md,
  },
  toggleButton: {
    paddingLeft: spacing.sm,
  },
  toggleText: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 13,
    color: colors.primary,
  },
  errorText: {
    fontFamily: fontFamilies.bodyRegular,
    fontSize: 12,
    lineHeight: 16,
    color: colors.error,
    marginTop: spacing.xs,
  },
})
