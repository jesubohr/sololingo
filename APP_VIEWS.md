1. Onboarding & Auth

**1.1 Splash Screen** App logo and name centered on a warm background. Brief animated entrance. No interactions.

**1.2 Welcome Screen** App name, tagline ("Learn Brazilian Portuguese fast — starting from your Spanish"), and two CTAs: "Create account" and "Log in". Language selector (PT / ES / EN) in the top right corner.

**1.3 Sign Up Screen** Fields: name, email, password. Social login options (Google, Apple). Link to Terms & Privacy. Submit button.

**1.4 Log In Screen** Email and password fields. "Forgot password?" link. Social login options. Link back to Sign Up.

**1.5 Placement Test — Intro** A friendly screen explaining the test takes 2 minutes and helps personalize the journey. Single CTA: "Start test". Option to skip and start from zero.

**1.6 Placement Test — Question** Single question displayed at a time (5–8 questions total). Multiple choice format. Progress dots at the top. No back button — forward only.

**1.7 Placement Test — Result** Displays the detected level (e.g. "A1 — Sobrevivência") with a brief description of what the user can already do and what they'll learn next. CTA: "Start my journey".

---

### 2. Main Navigation

The app uses a bottom tab bar with five tabs:

- **Home** (house icon)
- **Lessons** (book icon)
- **Rádio Brasil** (headphones icon)
- **Explore** (compass icon — houses Alerta Portunhol and Pronunciation Tips)
- **Profile** (person icon)

---

### 3. Home Tab

**3.1 Home Screen**

- Personalized greeting at the top ("Bom dia, Lucas!")
- Streak indicator (flame icon + number of days) top right
- Journey Progress Bar — a horizontal bar spanning full width showing three labeled segments: "Sobrevivência", "Interação", "Fluência Prática", with a dot indicating the current position
- "Today's Lesson" card: lesson title, estimated time, a progress ring showing how much of today's content is done, and a prominent "Continue" or "Start" button
- "Recommended Episode" card from Rádio Brasil: cover art, title, level badge, duration, and a play button
- Quick access row with icon buttons: "Alerta Portunhol", "Dicas de Pronúncia", "Parceiro de Conversa"
- Recent badges strip (last 3 earned)

---

### 4. Lessons Tab

**4.1 Lessons Map Screen** A vertical scrollable map of lesson nodes (similar to a path or trail). Each node is a circle with an icon and lesson name. Completed nodes are filled; the current one is highlighted and slightly larger; locked nodes are grayed out. Stage section headers divide the map into the three journey stages.

**4.2 Lesson Intro Screen** Before a lesson begins: lesson title, theme, estimated time, a list of 3–4 things the user will practice, and a "Let's go" CTA.

**4.3 Exercise Screen — Listen & Repeat** Audio waveform visualization at center. Play button to hear the phrase. Phrase text displayed below the waveform. Record button at the bottom. After recording: a pronunciation score (0–100) with color coding, and per-syllable breakdown showing which parts were strong (green) and which need work (orange/red). Option to hear again or move on.

**4.4 Exercise Screen — Multiple Choice** The prompt (a phrase or sentence with a gap or a question) at the top. Four answer cards below it, each tappable. On selection: immediate feedback — correct answer turns green with a brief explanation note; wrong answer turns red and the correct one reveals itself in green. A "Next" button appears after feedback.

**4.5 Exercise Screen — Fill in the Blank** A sentence displayed with one blank represented by an underlined gap. A set of word chips below (4–6 options). The user taps a chip to place it in the blank. Tapping the blank removes the placed word. Same feedback pattern as multiple choice.

**4.6 Exercise Screen — Put in Order** A scrambled set of word chips at the top. An empty answer row below. The user drags or taps chips into order. Feedback on submission.

**4.7 Exercise Screen — Spot the Portunhol Error** A sentence displayed with one subtle error. The user taps the word they think is wrong. If correct, the word highlights and the correction is shown with a brief explanation. If wrong, the correct word highlights instead.

**4.8 Exercise Screen — Flashcard (SRS)** Front of card: the phrase in Portuguese with context (e.g. a short situational sentence). Audio button. Tap to flip. Back of card: meaning inferred from context, plus a contrastive note (ES → PT). Four rating buttons at the bottom: "Esqueci" / "Difícil" / "Bom" / "Fácil" — each with a color and a next-review estimate ("again", "1 day", "4 days", "2 weeks").

**4.9 Portunhol Alert Overlay** Triggered mid-lesson when a flagged word appears for the first time. A full-screen modal with: an orange header bar labeled "⚠ Alerta Portunhol", the risky word in large text, the expected Spanish confusion below it, the correct Portuguese form, a full-sentence example with audio, and a "Got it" button to dismiss and continue.

**4.10 Lesson Results Screen** End-of-lesson summary. XP earned (animated counter), words practiced, accuracy percentage, streak status (maintained or new record). Row of newly earned or nearly-earned badges. Two buttons: "Keep going" (start next lesson) and "Back to map".

---

### 5. Rádio Brasil Tab

**5.1 Rádio Brasil — Library Screen** Header with the Rádio Brasil logo/title. A horizontal filter row for level (All / A1 / A2 / B1 / B2) and theme (All / Viagem / Trabalho / Social / Saúde / Cultura). A grid or list of episode cards. Each card shows: a cover illustration, episode title, level badge, duration, and a "New" badge if recently added. A featured episode banner at the top.

**5.2 Rádio Brasil — Episode Detail Screen** Episode title, theme, level, and duration. A short description of the episode's situation (who are the characters, what's happening). List of vocabulary highlights from the episode (3–5 key words previewed). Two CTA buttons: "Listen" and "Listen with pronunciation mode". An option to download for offline use.

**5.3 Rádio Brasil — Player Screen (Listening Mode)** Top section: episode title and character names. Center: audio player with play/pause, seek bar, 5s rewind, and speed selector (0.75× / 1× / 1.25×). Bottom section (scrollable): the full synchronized transcript. The currently playing word is highlighted in real time; the currently playing sentence has a soft background highlight. Tapping any word in the transcript jumps playback to that point.

**5.4 Rádio Brasil — Player Screen (Pronunciation Mode)** Same layout as listening mode, but with a persistent banner at the top: "Modo Pronúncia ativo". When the audio reaches a pause point, playback stops, the paused segment is highlighted in the transcript, a microphone icon pulses in the center, and the user records their repetition. After recording: a quick score overlay fades in and out, and playback resumes automatically. The user can toggle pronunciation mode on/off without leaving the player.

---

### 6. Explore Tab

**6.1 Explore Screen** A simple menu-style screen with two large cards or sections:

- **Alerta Portunhol** — with a brief description and an entry CTA
- **Dicas de Pronúncia** — with a brief description and an entry CTA
- Optionally, a third card for **Parceiro de Conversa** shortcut

**6.2 Alerta Portunhol — Library Screen** A searchable list of all alerts, filterable by category (False Cognates / Gender Traps / Preposition Traps / Taboo Words / Structural Portunhol). Each list item shows: the risky word, the category tag, and a danger rating (1–3 skull icons). Seen/unseen status indicator.

**6.3 Alerta Portunhol — Alert Card Screen** Full-screen card view for reviewing a single alert. Shows: the word in large type, the danger rating, the trap explanation, the correct form, a full-sentence example with audio playback, and a contrastive note. Navigation arrows to go to previous/next alert. A "Mark as reviewed" button.

**6.4 Dicas de Pronúncia — Library Screen** A list of pronunciation tips organized by phonetic category (Nasal Vowels / The Brazilian R / Palatal Sounds / Reduced Vowels / Connected Speech). Each item shows the sound focus, a difficulty indicator for Spanish speakers (1–3 bars), and a completion checkmark. Tapping an item opens the tip detail.

**6.5 Dicas de Pronúncia — Tip Detail Screen** The phonetic phenomenon explained in Portuguese, with written examples. An audio comparison player (two buttons side by side: "Espanhol" and "Português"). A practice section below: the user records themselves and gets feedback. A "Mark as practiced" button.

---

### 7. Parceiro de Conversa (AI Conversation Partner)

**7.1 Character Selection Screen** Three character cards laid out horizontally or in a grid. Each card shows: an illustrated avatar, the character's name, city of origin, personality description, and speaking style note. A "Chat" button on each card.

**7.2 Conversation Screen — Text Mode** Standard chat bubble layout. The AI character's messages on the left with their avatar. The user's messages on the right. A text input bar at the bottom with a send button and a microphone toggle to switch to voice mode. A "Corrections" button at the top right — tapping it reveals a slide-up panel showing corrections for the current session, only available between turns. The conversation is entirely in Portuguese.

**7.3 Conversation Screen — Voice Mode** A simplified view focused on voice. The character's avatar is centered and animated (idle / speaking states). A large pulsing record button at the bottom. When the AI is "speaking", an audio waveform animates below the avatar. When the user holds to speak, the waveform switches to input mode. A transcript of the last exchange is shown in small text below the avatar for reference.

**7.4 Session Summary Screen** After ending a conversation session: XP earned, number of exchanges, words used for the first time, and a "Corrections" list — each correction shows the user's original sentence and the more natural alternative side by side, with a brief note. A "Practice again" button and a "Back to Home" button.

---

### 8. Profile Tab

**8.1 Profile Screen** User avatar (initials-based or photo), display name, and current level badge at the top. Four stat cards in a 2×2 grid: Streak (days), Words Mastered, Listening Hours, Episodes Completed. The full Journey Progress Bar, expanded to show the four sub-dimensions per stage (Vocabulary / Listening / Pronunciation / Grammar in Context). A badges section showing all earned achievements and greyed-out locked ones. A settings gear icon in the top right.

**8.2 Settings Screen** Interface language selector (Português / Español / English). Notification preferences (daily reminder time, streak alerts, new episode alerts). Audio quality setting (for low-bandwidth users). Account management (change email, password, delete account). Subscription status and management.

**8.3 Achievements / Badges Screen** Full gallery of all badges organized by category (Journey / Consistency / Pronunciation / Rádio Brasil / Portunhol Survivor / Vocabulary / Conversationalist). Each badge shows its name, description, and unlock condition. Earned badges are full color; locked ones are grayscale with the unlock condition visible.

**8.4 Leagues Screen** Current league name and rank. A ranked list of the top 20 users in the current weekly league, showing avatar, name, and XP. The user's own row is highlighted. Countdown timer to the end of the week. Promotion and demotion zone indicators (top 5 / bottom 5 highlighted differently).

---

### 9. Notifications & System States

**9.1 Daily Reminder Notification** (lockscreen/banner)
"Hoje é dia de praticar! 🔥 Sua sequência de X dias te espera."

**9.2 Streak at Risk Notification** "Sua sequência de X dias está em risco! Pratique antes da meia-noite."

**9.3 New Episode Notification** "Novo episódio na Rádio Brasil: [episode title] — nível [X]."

**9.4 Stage Completion Celebration Screen** Full-screen modal triggered when the user advances to a new stage. Confetti animation, the new stage name in large type, a description of what the user can now do, XP earned, and a "Continue" CTA.

**9.5 Empty States**

- No internet connection: friendly illustration with "Sem conexão — mas você ainda pode praticar com o conteúdo baixado."
- No lessons available (all caught up): "Você está em dia! Volte amanhã para mais conteúdo — ou ouça um episódio da Rádio Brasil."
- First time in a section: short onboarding tooltip or coach mark pointing to the main action.

---

That's **34 distinct views** across 9 sections. Each view description is self-contained enough for a design AI agent to work with independently, and they cover the complete user journey from onboarding through daily use. When passing these to the agent, you may want to specify the visual identity alongside: warm background (`#F8F6F1`), primary green (`#00A86B`), amber (`#F5A623`), alert orange (`#E84D0E`), audio blue (`#2D7DD2`), and a friendly modern sans-serif typeface.