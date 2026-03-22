// apps/mobile/src/components/layout/ScreenContainer.tsx
import { type ReactNode } from "react"
import { StatusBar, StyleSheet, type ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { colors } from "../../theme/tokens"

interface ScreenContainerProps {
  children: ReactNode
  style?: ViewStyle
  statusBarStyle?: "light-content" | "dark-content"
}

export function ScreenContainer({
  children,
  style,
  statusBarStyle = "dark-content",
}: ScreenContainerProps) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle={statusBarStyle} backgroundColor={colors.background} />
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
})
