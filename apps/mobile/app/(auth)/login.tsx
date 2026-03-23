// apps/mobile/app/(auth)/login.tsx
import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useRouter } from "expo-router"
import { ScreenContainer } from "../../src/components/layout/ScreenContainer"
import { KeyboardAvoidingContainer } from "../../src/components/layout/KeyboardAvoidingContainer"
import { BrandText } from "../../src/components/ui/BrandText"
import { Button } from "../../src/components/ui/Button"
import { Divider } from "../../src/components/ui/Divider"
import { TextInput } from "../../src/components/ui/TextInput"
import { fontFamilies } from "../../src/theme/fonts"
import { colors, spacing } from "../../src/theme/tokens"
import { typography } from "../../src/theme/typography"

export default function LoginScreen() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  function validate(): boolean {
    const newErrors: typeof errors = {}
    if (!email.trim()) {
      newErrors.email = "El email es obligatorio"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Ingresa un email valido"
    }
    if (!password) {
      newErrors.password = "La contrasena es obligatoria"
    } else if (password.length < 8) {
      newErrors.password = "Minimo 8 caracteres"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleLogin() {
    if (!validate()) return
    // TODO: integrate with auth backend
    console.log("Login:", { email, password })
    router.replace("/(auth)/placement-intro")
  }

  return (
    <ScreenContainer>
      <KeyboardAvoidingContainer
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backArrow}>←</Text>
          </Pressable>
          <BrandText size="medium" />
        </View>

        <Text style={typography.headlineMedium}>Iniciar sesion</Text>

        <View style={styles.form}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(t) => {
              setEmail(t)
              if (errors.email) setErrors((e) => ({ ...e, email: undefined }))
            }}
            placeholder="tu@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email}
          />

          <TextInput
            label="Contrasena"
            value={password}
            onChangeText={(t) => {
              setPassword(t)
              if (errors.password) setErrors((e) => ({ ...e, password: undefined }))
            }}
            placeholder="Tu contrasena"
            secureTextEntry
            error={errors.password}
          />

          <Pressable style={styles.forgotButton}>
            <Text style={styles.forgotText}>Olvidaste tu contrasena?</Text>
          </Pressable>
        </View>

        <Button label="Iniciar sesion" onPress={handleLogin} variant="primary" />

        <Divider text="o conectar con" style={styles.divider} />

        <View style={styles.socialButtons}>
          <Button
            label="Continuar con Google"
            onPress={() => {}}
            variant="social"
            icon={<Text style={styles.socialIcon}>G</Text>}
          />
          <Button
            label="Continuar con Apple"
            onPress={() => {}}
            variant="social"
            icon={<Text style={styles.socialIcon}></Text>}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>No tienes cuenta? </Text>
          <Pressable onPress={() => router.push("/(auth)/signup")}>
            <Text style={styles.footerLink}>Registrate</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingContainer>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: spacing["2xl"],
    paddingBottom: spacing["4xl"],
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    paddingTop: spacing.md,
    marginBottom: spacing["3xl"],
  },
  backButton: {
    padding: spacing.sm,
  },
  backArrow: {
    fontSize: 24,
    color: colors.onSurface,
  },
  form: {
    gap: spacing.lg,
    marginTop: spacing["2xl"],
    marginBottom: spacing["2xl"],
  },
  forgotButton: {
    alignSelf: "flex-end",
  },
  forgotText: {
    fontFamily: fontFamilies.bodyMedium,
    fontSize: 14,
    color: colors.primary,
  },
  divider: {
    marginVertical: spacing["2xl"],
  },
  socialButtons: {
    gap: spacing.md,
  },
  socialIcon: {
    fontFamily: fontFamilies.headlineBold,
    fontSize: 18,
    color: colors.onSurface,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing["3xl"],
  },
  footerText: {
    fontFamily: fontFamilies.bodyRegular,
    fontSize: 14,
    color: colors.onSurfaceVariant,
  },
  footerLink: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 14,
    color: colors.primary,
  },
})
