// apps/mobile/src/components/ui/Divider.tsx
import { StyleSheet, Text, View, type ViewStyle } from "react-native"
import { fontFamilies } from "../../theme/fonts"
import { colors, spacing } from "../../theme/tokens"

interface DividerProps {
  text: string
  style?: ViewStyle
}

export function Divider({ text, style }: DividerProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.lg,
  },
  line: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.outlineVariant,
  },
  text: {
    fontFamily: fontFamilies.bodyRegular,
    fontSize: 13,
    color: colors.onSurfaceVariant,
  },
})
