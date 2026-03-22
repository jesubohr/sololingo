export type CefrLevel = "A1" | "A2" | "B1" | "B2"

export type LearningStage = 1 | 2 | 3

export type InterfaceLanguage = "pt" | "es" | "en"

export type ExerciseType =
  | "listen_repeat"
  | "multiple_choice"
  | "fill_blank"
  | "put_in_order"
  | "spot_portunhol"
  | "flashcard"

export type AlertCategory =
  | "false_cognate"
  | "register_trap"
  | "gender_trap"
  | "preposition_trap"
  | "structural"
  | "taboo"

export type PronunciationCategory =
  | "nasal_vowels"
  | "brazilian_r"
  | "palatal_sounds"
  | "reduced_vowels"
  | "connected_speech"

export type BadgeCategory =
  | "journey"
  | "consistency"
  | "pronunciation"
  | "radio_brasil"
  | "portunhol_survivor"
  | "vocabulary"
  | "conversationalist"

export type ConversationCharacterId = "carlos" | "juliana" | "dona_fatima"

export type ConversationMode = "text" | "voice"

export type SrsRating = "forgotten" | "hard" | "good" | "easy"

export type LessonStatus = "not_started" | "in_progress" | "completed"
