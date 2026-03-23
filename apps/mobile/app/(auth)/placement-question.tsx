import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useRouter } from "expo-router"
import { ScreenContainer } from "../../src/components/layout/ScreenContainer"
import { fontFamilies } from "../../src/theme/fonts"
import { colors, radii, shadows, spacing } from "../../src/theme/tokens"
import { typography } from "../../src/theme/typography"

interface Question {
  prompt: string
  options: string[]
  correct: number
}

const QUESTIONS: Question[] = [
  {
    prompt: "Como se traduz 'Estoy embarazada' para o Português Brasileiro?",
    options: ["Estou embaraçada", "Estou grávida", "Sou grávida", "Fico grávida"],
    correct: 1,
  },
  {
    prompt: "Qual frase está correta em Português Brasileiro?",
    options: [
      "Eu quero ir al supermercado",
      "Eu quero ir ao supermercado",
      "Eu quiero ir ao supermercado",
      "Eu vou ir no supermercado",
    ],
    correct: 1,
  },
  {
    prompt: "O que significa 'borracha' em Português Brasileiro?",
    options: ["Mulher bêbada", "Material elástico", "Burra", "Borboleta"],
    correct: 1,
  },
  {
    prompt: "Como se diz 'ônibus' em Português Brasileiro?",
    options: ["Autobús", "Bus", "Ônibus", "Bonde"],
    correct: 2,
  },
  {
    prompt: "Qual é a conjugação correta de 'ter' na 1ª pessoa do singular?",
    options: ["Tenho", "Tengo", "Teno", "Tem"],
    correct: 0,
  },
]

export default function PlacementQuestionScreen() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)

  const question = QUESTIONS[currentIndex]

  function handleSelect(optionIndex: number) {
    if (selected !== null) return
    setSelected(optionIndex)

    const isCorrect = optionIndex === question.correct
    const newScore = isCorrect ? score + 1 : score

    setTimeout(() => {
      if (currentIndex + 1 < QUESTIONS.length) {
        setCurrentIndex((prev) => prev + 1)
        setSelected(null)
        setScore(newScore)
      } else {
        if (isCorrect) {
          router.replace({
            pathname: "/(auth)/placement-result",
            params: { score: String(newScore) },
          })
        } else {
          router.replace({
            pathname: "/(auth)/placement-result",
            params: { score: String(score) },
          })
        }
      }
    }, 700)
  }

  function optionStyle(index: number) {
    if (selected === null) return styles.option
    if (index === question.correct) return [styles.option, styles.optionCorrect]
    if (index === selected) return [styles.option, styles.optionWrong]
    return styles.option
  }

  return (
    <ScreenContainer>
      <View style={styles.container}>
        {/* Progress dots */}
        <View style={styles.dots}>
          {QUESTIONS.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i < currentIndex && styles.dotDone,
                i === currentIndex && styles.dotActive,
              ]}
            />
          ))}
        </View>

        <Text style={[typography.labelMedium, styles.counter]}>
          {currentIndex + 1} / {QUESTIONS.length}
        </Text>

        <Text style={[typography.titleLarge, styles.prompt]}>
          {question.prompt}
        </Text>

        <View style={styles.options}>
          {question.options.map((option, i) => (
            <Pressable key={i} style={optionStyle(i)} onPress={() => handleSelect(i)}>
              <Text style={styles.optionText}>{option}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing["2xl"],
    paddingTop: spacing["3xl"],
    gap: spacing["2xl"],
  },
  dots: {
    flexDirection: "row",
    gap: spacing.sm,
    justifyContent: "center",
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: radii.full,
    backgroundColor: colors.outlineVariant,
  },
  dotDone: {
    backgroundColor: colors.primary,
  },
  dotActive: {
    width: 24,
    backgroundColor: colors.primaryContainer,
  },
  counter: {
    textAlign: "center",
    color: colors.onSurfaceVariant,
  },
  prompt: {
    textAlign: "center",
    color: colors.onSurface,
    paddingHorizontal: spacing.sm,
  },
  options: {
    gap: spacing.md,
  },
  option: {
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: radii.md,
    padding: spacing["2xl"],
    borderWidth: 1.5,
    borderColor: colors.outlineVariant,
    ...shadows.subtle,
  },
  optionCorrect: {
    backgroundColor: "#e6f9f0",
    borderColor: colors.primary,
  },
  optionWrong: {
    backgroundColor: "#fff0f0",
    borderColor: colors.error,
  },
  optionText: {
    fontFamily: fontFamilies.bodyMedium,
    fontSize: 16,
    lineHeight: 22,
    color: colors.onSurface,
    textAlign: "center",
  },
})
