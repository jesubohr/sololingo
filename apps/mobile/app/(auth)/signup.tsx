// apps/mobile/app/(auth)/signup.tsx
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

export default function SignUpScreen() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    password?: string
  }>({})

  function validate(): boolean {
    const newErrors: typeof errors = {}
    if (!name.trim()) {
      newErrors.name = "El nombre es obligatorio"
    }
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

  function handleSignUp() {
    if (!validate()) return
    // TODO: integrate with auth backend
    console.log("Sign up:", { name, email, password })
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

        <Text style={typography.headlineMedium}>Crear cuenta</Text>

        <View style={styles.socialSection}>
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

        <Divider text="o usar email" style={styles.divider} />

        <View style={styles.form}>
          <TextInput
            label="Nombre"
            value={name}
            onChangeText={(t) => {
              setName(t)
              if (errors.name) setErrors((e) => ({ ...e, name: undefined }))
            }}
            placeholder="Tu nombre"
            autoCapitalize="words"
            error={errors.name}
          />

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
            placeholder="Minimo 8 caracteres"
            secureTextEntry
            error={errors.password}
          />
        </View>

        <Button
          label="Registrarse"
          onPress={handleSignUp}
          variant="primary"
        />

        <Text style={styles.termsText}>
          Al registrarte, aceptas los{" "}
          <Text style={styles.termsLink}>Terminos</Text>
          {" "}y la{" "}
          <Text style={styles.termsLink}>Politica de Privacidad</Text>
        </Text>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Ya tienes cuenta? </Text>
          <Pressable onPress={() => router.push("/(auth)/login")}>
            <Text style={styles.footerLink}>Iniciar sesion</Text>
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
  socialSection: {
    gap: spacing.md,
    marginTop: spacing["2xl"],
  },
  divider: {
    marginVertical: spacing["2xl"],
  },
  form: {
    gap: spacing.lg,
    marginBottom: spacing["2xl"],
  },
  socialIcon: {
    fontFamily: fontFamilies.headlineBold,
    fontSize: 18,
    color: colors.onSurface,
  },
  termsText: {
    fontFamily: fontFamilies.bodyRegular,
    fontSize: 12,
    lineHeight: 16,
    color: colors.outline,
    textAlign: "center",
    marginTop: spacing.lg,
  },
  termsLink: {
    color: colors.primary,
    fontFamily: fontFamilies.bodyMedium,
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
