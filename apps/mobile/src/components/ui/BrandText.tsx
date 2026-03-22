// apps/mobile/src/components/ui/BrandText.tsx
import { StyleSheet, Text, type TextStyle } from "react-native"
import { fontFamilies } from "../../theme/fonts"
import { colors } from "../../theme/tokens"

interface BrandTextProps {
  size?: "large" | "medium"
  style?: TextStyle
}

export function BrandText({ size = "large", style }: BrandTextProps) {
  return (
    <Text
      style={[
        styles.base,
        size === "large" ? styles.large : styles.medium,
        style,
      ]}
    >
      Sololingo
    </Text>
  )
}

const styles = StyleSheet.create({
  base: {
    fontFamily: fontFamilies.headlineExtraBold,
    color: colors.primary,
  },
  large: {
    fontSize: 40,
    lineHeight: 48,
  },
  medium: {
    fontSize: 28,
    lineHeight: 36,
  },
})
