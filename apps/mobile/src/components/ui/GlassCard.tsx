// apps/mobile/src/components/ui/GlassCard.tsx
import { type ReactNode } from "react"
import { Platform, StyleSheet, View, type ViewStyle } from "react-native"
import { BlurView } from "expo-blur"
import { radii, spacing } from "../../theme/tokens"

interface GlassCardProps {
  children: ReactNode
  style?: ViewStyle
}

export function GlassCard({ children, style }: GlassCardProps) {
  // BlurView has limited Android support — use a solid fallback
  if (Platform.OS === "android") {
    return (
      <View style={[styles.fallback, style]}>
        {children}
      </View>
    )
  }

  return (
    <BlurView intensity={20} tint="light" style={[styles.blur, style]}>
      <View style={styles.overlay}>
        {children}
      </View>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  blur: {
    borderRadius: radii.md,
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: spacing["2xl"],
    borderRadius: radii.md,
  },
  fallback: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    padding: spacing["2xl"],
    borderRadius: radii.md,
  },
})
