// apps/mobile/src/components/layout/KeyboardAvoidingContainer.tsx
import { type ReactNode } from "react"
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  type ViewStyle,
} from "react-native"

interface KeyboardAvoidingContainerProps {
  children: ReactNode
  style?: ViewStyle
  contentContainerStyle?: ViewStyle
}

export function KeyboardAvoidingContainer({
  children,
  style,
  contentContainerStyle,
}: KeyboardAvoidingContainerProps) {
  return (
    <KeyboardAvoidingView
      style={[styles.container, style]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
})
