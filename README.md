# Sololing: Fala, Brasil! — Documento de Produto

### Aplicativo de Português Brasileiro para Falantes de Espanhol

**Versão do documento:** 1.0  
**Status:** Planejamento / Pré-desenvolvimento

---

## Índice

1. [Visão Geral do Produto](#1-vis%C3%A3o-geral-do-produto)
2. [Público-Alvo](#2-p%C3%BAblico-alvo)
3. [Filosofia Pedagógica](#3-filosofia-pedag%C3%B3gica)
4. [Jornada de Aprendizagem — Os Três Estágios](#4-jornada-de-aprendizagem--os-tr%C3%AAs-est%C3%A1gios)
5. [Funcionalidades do Aplicativo](#5-funcionalidades-do-aplicativo)
6. [Estratégia de Conteúdo](#6-estrat%C3%A9gia-de-conte%C3%BAdo)
7. [Arquitetura do Sistema](#7-arquitetura-do-sistema)
8. [Stack Tecnológico](#8-stack-tecnol%C3%B3gico)
9. [Design e Telas](#9-design-e-telas)
10. [Gamificação](#10-gamifica%C3%A7%C3%A3o)
11. [IA e Geração de Conteúdo](#11-ia-e-gera%C3%A7%C3%A3o-de-conte%C3%BAdo)
12. [Roadmap de Desenvolvimento](#12-roadmap-de-desenvolvimento)
13. [Considerações sobre Monetização](#13-considera%C3%A7%C3%B5es-sobre-monetiza%C3%A7%C3%A3o)
14. [Riscos e Mitigações](#14-riscos-e-mitiga%C3%A7%C3%B5es)

---

## 1. Visão Geral do Produto

**Fala, Brasil!** é um aplicativo mobile de aprendizagem de português brasileiro, desenvolvido especificamente para falantes nativos de espanhol. Ao contrário de cursos de idiomas genéricos, o aplicativo aproveita o conhecimento linguístico já existente do usuário — a proximidade entre o espanhol e o português — para acelerar drasticamente a aquisição da nova língua.

O objetivo é conduzir o usuário de zero ao nível conversacional em 6 meses, com sessões de 20 a 30 minutos por dia. Cada lição, exercício, alerta e explicação é apresentado **em português**, criando imersão desde o primeiro contato com o aplicativo. Os elementos de interface (menus, botões, navegação) podem ser apresentados em português, espanhol ou inglês, dependendo da preferência do usuário.

### Proposta de Valor

- **Acelerado pela proximidade linguística:** nenhum outro método explora de forma tão sistemática o que o falante de espanhol já sabe.
- **Imersivo desde o primeiro dia:** todo o conteúdo de aprendizagem está em português.
- **Prático e contextualizado:** as frases e vocabulários são reais, coloquiais e situacionais — não frases de livro didático.
- **Personalizado por nível:** o conteúdo auditivo, os exercícios e as trilhas adaptam-se ao estágio atual do aprendiz.

---

## 2. Público-Alvo

### Perfil Principal

- Falantes nativos ou fluentes de espanhol (qualquer variante: mexicano, colombiano, argentino, espanhol europeu, etc.)
- Faixa etária: 18–45 anos
- Motivação: viagem ao Brasil, trabalho, relacionamentos, interesse cultural, imigração
- Disponibilidade: 20–30 minutos por dia
- Familiaridade com tecnologia: usuários de smartphone com experiência em apps

### Perfis Secundários

- Estudantes universitários de letras ou relações internacionais
- Profissionais de negócios com contatos no Brasil
- Descendentes de brasileiros que cresceram falando espanhol

### O Que o Usuário NÃO É

- Um iniciante em línguas: já tem uma base sólida em gramática romance.
- Um estudante de tempo integral: não tem horas por dia para dedicar ao estudo.
- Um perfeccionista gramatical: quer comunicar-se, não decorar conjugações.

---

## 3. Filosofia Pedagógica

### Princípio Central: Aproveitar a Ponte Linguística

O falante de espanhol já conhece — mesmo sem saber — cerca de 60% do vocabulário do português. A missão do aplicativo não é ensinar uma língua do zero, mas sim **mapear o que o usuário já sabe para o português**, identificar e corrigir as divergências críticas, e construir fluência situacional o mais rápido possível.

### Os Quatro Pilares Metodológicos

**1. Contexto antes de gramática**  
Toda estrutura gramatical é apresentada dentro de frases reais e situações do cotidiano. O usuário ouve "eu fui ao mercado ontem" dezenas de vezes antes de qualquer explicação sobre o pretérito perfeito. O cérebro adquire padrões pelo uso, não pela memorização de regras.

**2. Contraste ativo com o espanhol**  
Cada item de vocabulário e cada estrutura gramatical vêm acompanhados de uma nota contrastiva curta: o que é igual, o que é parecido, e o que é completamente diferente. Esse contraste ativo acelera a retenção porque aproveita o conhecimento existente como âncora.

**3. Português coloquial brasileiro, não português de livro**  
O aplicativo ensina a língua como ela é falada no Brasil: "a gente" em vez de "nós", diminutivos (-inho/-inha), gírias regionais comuns, e expressões como "né?", "tá?", "ô". Um estudante que aprende só pelo livro se torna incompreensível — e não entende ninguém — na rua.

**4. Repetição espaçada + progressão adaptativa**  
O sistema de repetição espaçada (SRS) garante que o vocabulário não seja esquecido. O algoritmo FSRS (Free Spaced Repetition Scheduler) determina o momento exato em que cada item deve ser revisado para maximizar a retenção com o mínimo de repetições. A ordem das lições se adapta ao desempenho real do usuário.

### O Que Não Está no Aplicativo

- Longas aulas de gramática fora de contexto
- Tradução palavra por palavra
- Listas de vocabulário descontextualizadas
- Ênfase em português europeu
- Exercícios de escrita formal ou redação acadêmica

---

## 4. Jornada de Aprendizagem — Os Três Estágios

A progressão do usuário é organizada em três estágios visíveis, representados por uma barra de progresso permanente no aplicativo. Esse indicador visual cria senso de avanço e permite que o usuário se situe na jornada a qualquer momento.

---

### Estágio 1 — Sobrevivência (Meses 1–2 / Níveis A1–A2)

**Objetivo:** O usuário consegue se virar em situações básicas — cumprimentos, pedidos simples, emergências, transações cotidianas.

**Conteúdo:**

- Sons do português que não existem no espanhol: vogais nasais (ão, ã, em, im), o "lh", o "nh", o "r" carioca
- ~500 palavras de alta frequência priorizadas por utilidade imediata
- Frases prontas para usar: saudações, despedidas, agradecimentos, desculpas, pedidos
- Introdução ao sistema de contraste espanhol–português
- Primeiros alertas "Portunhol" (falsos cognatos e armadilhas)
- Gramática implícita: pronomes básicos, presente do indicativo dos verbos mais usados

**Marco de saída:** O usuário consegue se apresentar, pedir informações, fazer compras simples e entender respostas curtas.

---

### Estágio 2 — Interação (Meses 3–4 / Níveis A2–B1)

**Objetivo:** O usuário navega situações do cotidiano com confiança — refeições, transporte, trabalho básico, conversas sociais curtas.

**Conteúdo:**

- Vocabulário situacional expandido: restaurante, transporte público, saúde, moradia, lazer
- Diminutivos e sua carga afetiva no português brasileiro
- Verbos no passado (pretérito perfeito e imperfeito) e no futuro próximo (vai + infinitivo)
- Gírias e expressões coloquiais de uso amplo
- Compreensão auditiva em velocidade real
- Exercícios de pronúncia com feedback (fonemas problemáticos para hispanófonos)

**Marco de saída:** O usuário consegue manter uma conversa breve sobre um tema familiar, entende nativos falando em velocidade normal sobre assuntos do dia a dia.

---

### Estágio 3 — Fluência Prática (Meses 5–6 / Níveis B1–B2)

**Objetivo:** O usuário se comunica com desenvoltura em contextos sociais e profissionais variados, conta histórias, expressa opiniões e entende o humor e a cultura brasileira.

**Conteúdo:**

- Fala conectada: ligações entre palavras, redução de sílabas, ritmo real
- Contextos sociais e profissionais mais complexos
- Variedades regionais: diferenças entre paulistano, carioca, nordestino
- Expressões idiomáticas e provérbios comuns
- Narração de eventos passados e especulação sobre o futuro
- Parceiro de conversação com IA (modo livre)

**Marco de saída:** O usuário sustenta uma conversa real com um brasileiro, entende podcasts e vídeos sem legenda sobre temas familiares.

---

## 5. Funcionalidades do Aplicativo

### 5.1 Lições Diárias

A lição diária é a espinha dorsal do aplicativo. Cada sessão tem duração de 15 a 25 minutos e combina tipos de exercício variados para manter o engajamento cognitivo.

**Tipos de exercício:**

- **Ouça e repita:** o usuário ouve uma frase gravada por falante nativo brasileiro e a reproduz; o app avalia a pronúncia via reconhecimento de fala.
- **Selecione a tradução correta:** dado o contexto em português, o usuário escolhe entre quatro opções (sempre em português, nunca em espanhol — o usuário infere o significado pelo contexto).
- **Complete a frase:** uma frase com lacuna; o usuário escolhe ou digita a palavra correta.
- **Coloque em ordem:** palavras embaralhadas que o usuário organiza para formar uma frase.
- **Identifique o erro:** uma frase com um erro típico de portunhol; o usuário o localiza e corrige.
- **Flashcard de vocabulário:** sistema SRS com kartinhos de frente/verso, sempre com frase de contexto e áudio.

**Notas contrastivas (ES → PT):**  
Cada novo item introduzido vem acompanhado de uma nota curta em português explicando a relação com o espanhol — por exemplo: *"Em espanhol você diz 'embarazada' para 'grávida'. Em português, 'embaraçada' significa 'sem graça' ou 'envergonhada'. Cuidado!"*

---

### 5.2 Dicas de Pronúncia

Uma seção dedicada a treinar os sons do português que não existem — ou existem de forma diferente — no espanhol.

**Organização por desafio:**

- Vogais nasais: ão, ã, em, im, om, um — com visualizações da posição da boca e exercícios de escuta comparativa
- O "r" inicial e duplo (rr): o som gutural do Rio de Janeiro vs. o "r" vibrante do interior
- O "lh" e o "nh": sons palatais que têm paralelo parcial no espanhol ("ll" e "ñ") mas com diferenças
- Vogais átonas reduzidas: o "e" que vira quase "i", o "o" que vira quase "u" no falar paulistano
- Ligação entre palavras: como "pode ser" vira "poche sê" na fala rápida

**Formato das dicas:** Cada dica é uma micro-lição com três partes: (1) explicação do fenômeno em português com exemplos escritos, (2) áudio comparativo espanhol vs. português, (3) exercício de repetição com avaliação. As dicas ficam disponíveis como referência na biblioteca de pronúncia mesmo após serem "concluídas".

---

### 5.3 Alerta Portunhol

O "Alerta Portunhol" é uma das funcionalidades mais distintivas do aplicativo. Trata-se de um sistema de alertas proativos e de uma biblioteca de referência dedicada a palavras e expressões que parecem familiares ao hispanófono mas têm significado completamente diferente em português — os chamados falsos cognatos — além de armadilhas estruturais do "portunhol".

**Categorias de alerta:**

| Categoria                   | Exemplo                                                                    | Explicação                                                    |
| --------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Falsos cognatos lexicais    | "polvo" (pó, não frango)                                                   | Palavras com grafia quase idêntica e significado oposto       |
| Falsos cognatos de registro | "rapariga" (moça — em Portugal; palavrão no Brasil)                        | Mesmo significado muda radicalmente por região                |
| Armadilhas de gênero        | "a viagem" (não "el viaje")                                                | Gênero diferente do espanhol                                  |
| Preposições divergentes     | "falar com" vs. "hablar con" / "pensar em" vs. "pensar en"                 | A preposição certa depois de cada verbo                       |
| Estruturas de portunhol     | "Eu tenho 30 anos" ≠ "Yo tengo 30 años" → forma idêntica, sorte do usuário | Casos onde a lógica do espanhol funciona; e onde não funciona |
| Palavras taboo por contexto | "Borracha" (bêbada, não bolsa)                                             | Palavras inocentes em espanhol que têm conotação forte em PT  |

**Como os alertas aparecem:**

- No momento de primeira exposição a um item de risco, um banner laranja com o ícone de alerta interrompe o fluxo da lição por três segundos, depois exibe a explicação completa.
- Alertas podem ser revisitados na biblioteca "Atenção, Portunhol!" a qualquer momento.
- O sistema rastreia quais alertas o usuário já viu e os repete no SRS se o usuário errar uma questão relacionada.

---

### 5.4 Biblioteca de Podcasts — "Rádio Brasil"

A "Rádio Brasil" é uma biblioteca de episódios de áudio gerados por IA, organizados por nível (A1 a B2) e por tema. O objetivo é treinar simultaneamente a compreensão auditiva (entender o português falado em velocidade real) e a pronúncia (reproduzir trechos do áudio em sincronia com o painel lateral).

**Estrutura de um episódio:**

- **Duração:** 3 a 8 minutos, dependendo do nível.
- **Formato:** conversa entre dois ou mais personagens brasileiros em uma situação específica (ex.: dois amigos planejando uma viagem a Florianópolis; uma entrevista de emprego; uma conversa no botequim).
- **Geração:** os episódios são gerados por um pipeline de IA (roteiro via LLM + síntese de voz com vozes brasileiras via API de TTS) e curados por um revisor humano antes de publicação.
- **Transcrição sincronizada:** cada episódio tem transcrição palavra a palavra com timestamps, exibida no painel lateral em sincronia com o áudio.

**Painel lateral de pronúncia:**  
Enquanto o episódio toca, o painel lateral destaca palavra por palavra na transcrição em sincronia com o áudio. O usuário pode ativar o "modo karaokê de pronúncia": o áudio pausa em pontos predefinidos (ao final de frases ou segmentos de 5 a 8 palavras), o app pede que o usuário repita o trecho, avalia a pronúncia, e retoma o episódio. Esse ciclo — ouça, repita, avance — é o coração da funcionalidade.

**Organização da biblioteca:**

| Nível | Características do áudio                                                                     |
| ----- | -------------------------------------------------------------------------------------------- |
| A1    | Fala lenta e clara, vocabulário básico, frases curtas, situações muito cotidianas            |
| A2    | Velocidade ligeiramente mais real, contrações comuns ("tô", "tá", "num"), frases mais longas |
| B1    | Velocidade natural, gírias básicas, ligações entre palavras, algum sotaque regional          |
| B2    | Velocidade e naturalidade total, humor, expressões idiomáticas, variação de sotaque          |

**Episódios novos:**  
Pelo menos dois episódios novos por nível são adicionados por semana. O usuário pode também solicitar um episódio sobre um tema específico — o pipeline gera um rascunho que entra na fila de revisão.

**Trilhas temáticas:**  
Os episódios são agrupados em trilhas: Viagem e turismo, Trabalho e negócios, Vida social, Saúde e bem-estar, Cultura e entretenimento, Brasil e regiões.

---

### 5.5 Barra de Progresso da Jornada

Uma barra de progresso visual e persistente, exibida no topo do perfil do usuário e na tela de início, que mapeia o avanço do aprendiz pelos três estágios: **Sobrevivência → Interação → Fluência Prática**.

**Design:**

- A barra é uma linha horizontal dividida em três segmentos, cada um correspondente a um estágio.
- O ponto atual do usuário é marcado por um indicador animado.
- Cada segmento exibe o nome do estágio, o intervalo de níveis CEFR correspondente, e uma breve descrição do que o usuário consegue fazer ao concluí-lo.
- Ao passar para um novo estágio, uma animação de celebração é exibida e uma notificação push é enviada.

**Métricas que alimentam a barra:**

- Percentual de vocabulário de cada estágio dominado (SRS com rating ≥ "bom" por pelo menos dois ciclos)
- Exercícios de compreensão auditiva completados por nível
- Sessões de pronúncia com score médio acima do limiar do estágio
- Alertas Portunhol revisados

**Sub-indicadores:**  
Dentro de cada estágio, uma barra secundária mostra o progresso nas quatro dimensões: Vocabulário, Audição, Pronúncia, e Gramática em Contexto.

---

### 5.6 Parceiro de Conversação com IA (Estágio 2 em diante)

A partir do Estágio 2, o usuário tem acesso ao parceiro de conversação com IA — um personagem brasileiro interativo que conduz diálogos em texto ou voz.

**Modo texto:** O usuário digita mensagens em português; o parceiro responde naturalmente, corrige erros de forma gentil ao final da conversa (não no meio, para não interromper o fluxo), e pode sugerir frases mais naturais.

**Modo voz:** O usuário fala; o app transcreve via reconhecimento de fala e envia ao modelo; a resposta é sintetizada em voz brasileira. O ciclo é rápido o suficiente para simular uma conversa real.

**Personalidades disponíveis:** Carlos (São Paulo, tom profissional), Juliana (Rio de Janeiro, tom informal e bem-humorado), Dona Fátima (Nordeste, fala mais devagar, ótima para iniciantes).

---

## 6. Estratégia de Conteúdo

### Idioma do Conteúdo

Todo o conteúdo de aprendizagem — frases, explicações, notas de pronúncia, alertas, narrativas dos podcasts, instruções de exercício — é apresentado **em português**. Isso cria imersão real e força o usuário a desenvolver tolerância à ambiguidade (habilidade essencial na aquisição de línguas) desde o início.

A interface do sistema (menus, botões, configurações, notificações push) pode ser exibida em português, espanhol ou inglês, configurável pelo usuário nas preferências.

### Base de Dados de Conteúdo

O conteúdo principal do aplicativo é estruturado em quatro bases de dados interligadas:

**1. Banco de Frases e Vocabulário**  
Cada entrada contém: a palavra ou frase em português, o arquivo de áudio gravado por falante nativo, a categoria situacional, o nível CEFR, a nota contrastiva ES→PT, a flag de "Alerta Portunhol" (se aplicável), e os parâmetros SRS iniciais.

**2. Biblioteca de Episódios de Rádio Brasil**  
Cada episódio contém: título, tema, nível, duração, arquivo de áudio, transcrição com timestamps por token, lista de palavras-chave do episódio (linkadas ao banco de frases), e metadados de curadoria.

**3. Biblioteca de Alertas Portunhol**  
Cada alerta contém: a palavra/estrutura de risco, a armadilha esperada, a forma correta em português, o exemplo em contexto (frase completa com áudio), e a categoria do erro.

**4. Biblioteca de Dicas de Pronúncia**  
Cada dica contém: o fenômeno fonético, o áudio ilustrativo, o exercício de repetição, e o nível de dificuldade para hispanófonos.

### Curadoria e Qualidade

- Todo conteúdo gerado por IA passa por revisão de um professor de português brasileiro com experiência em ensino para hispanófonos antes de ser publicado.
- Gravações de áudio são feitas com locutores nativos brasileiros (pelo menos dois sotaques diferentes: sudeste e nordeste).
- Alertas Portunhol são validados por um linguista especializado em contraste espanhol–português.

---

## 7. Arquitetura do Sistema

### Visão Geral

O sistema é dividido em quatro camadas principais: conteúdo, motor de aprendizagem, interação e plataforma. A arquitetura é orientada para mobile-first com capacidade de uso offline parcial.

```
┌─────────────────────────────────────────────────────────┐
│                    CAMADA DE CONTEÚDO                   │
│  Banco de frases · Episódios de áudio · Alertas PT      │
│  Dicas de pronúncia · Perfis de personagens IA          │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│                 MOTOR DE APRENDIZAGEM                   │
│  Algoritmo SRS (FSRS) · Rastreamento de maestria        │
│  Progressão adaptativa · Sessão pacing · Milestones     │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│                  CAMADA DE INTERAÇÃO                    │
│  Exercícios · Avaliação de pronúncia · Feedback          │
│  Parceiro de conversação IA · Rádio Brasil              │
│  Dashboard de progresso · Sistema de gamificação        │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│                   CAMADA DE PLATAFORMA                  │
│  React Native (iOS + Android) · Offline-first           │
│  Sync em background · Auth · Push notifications         │
│  Analytics · API Backend                                │
└─────────────────────────────────────────────────────────┘
```

### Motor de Aprendizagem — Detalhamento

**Algoritmo SRS (FSRS):**  
O FSRS (Free Spaced Repetition Scheduler) é o algoritmo estado da arte para repetição espaçada. Diferentemente do SM-2 (usado pelo Anki), o FSRS modela o esquecimento de forma mais precisa e adapta os intervalos individualmente por item. Cada item de vocabulário tem parâmetros de estabilidade e dificuldade que evoluem com base nas avaliações do usuário (Fácil / Bom / Difícil / Esqueci).

**Progressão adaptativa:**  
A ordem de apresentação das lições não é fixa. O algoritmo considera: (1) itens com data de revisão vencida, (2) itens do próximo bloco temático na progressão curricular, e (3) lacunas detectadas no desempenho recente. Uma sessão típica combina revisão de itens antigos (~~40%) com introdução de conteúdo novo (~~60%).

**Rastreamento de maestria:**  
Cada item tem um score de maestria de 0 a 100. Um item é considerado "dominado" quando atinge score ≥ 80 e foi revisado com sucesso pelo menos três vezes após o primeiro contato. O avanço na barra de progresso da jornada depende do percentual de itens dominados por estágio.

**Detecção de padrão de erro:**  
O motor analisa os erros do usuário em busca de padrões (ex.: consistentemente confunde "por" e "para", ou erra palavras com vogais nasais). Quando um padrão é detectado, o motor injeta uma micro-lição de correção no início da próxima sessão.

### Backend — Serviços Principais

| Serviço                            | Responsabilidade                                         |
| ---------------------------------- | -------------------------------------------------------- |
| **Auth Service**                   | Autenticação, sessões, gestão de conta                   |
| **Progress Service**               | Estado SRS, maestria, barra de jornada, XP, streaks      |
| **Content Service**                | Entrega de lições, episódios, alertas e dicas            |
| **AI Conversation Service**        | Proxy para API de LLM, gestão de contexto de conversa    |
| **TTS / Audio Generation Service** | Geração de episódios de Rádio Brasil via pipeline IA     |
| **Pronunciation Scoring Service**  | Avaliação de pronúncia via ASR + comparação fonética     |
| **Notifications Service**          | Push notifications, lembretes de streak, novos episódios |
| **Analytics Service**              | Eventos de uso, funil de aprendizagem, retenção          |

### Sincronização e Modo Offline

O aplicativo funciona em modo offline para: lições diárias (itens já baixados), exercícios de vocabulário SRS, e episódios de Rádio Brasil previamente armazenados. A sincronização ocorre em background sempre que há conexão. O estado SRS local é a fonte de verdade durante o offline; conflitos de sync são resolvidos com merge baseado em timestamp.

---

## 8. Stack Tecnológico

### Mobile

| Camada                 | Tecnologia                      | Justificativa                                                                   |
| ---------------------- | ------------------------------- | ------------------------------------------------------------------------------- |
| Framework              | React Native + Expo             | Codebase único iOS/Android; ecossistema maduro; suporte a áudio e speech nativo |
| Navegação              | Expo Router                     | File-based routing, deep linking para notificações                              |
| Estado global          | Zustand                         | Leve, simples, bem integrado ao RN                                              |
| Armazenamento local    | SQLite (via expo-sqlite) + MMKV | SQLite para dados SRS e conteúdo; MMKV para preferências e estado de sessão     |
| Áudio                  | Expo AV                         | Playback de episódios e flashcards com controle fino                            |
| Reconhecimento de fala | Expo Speech / Whisper API       | Avaliação de pronúncia e modo voz do parceiro IA                                |
| Animações              | Reanimated 3                    | Animações de gamificação e transições fluidas                                   |
| Pagamentos             | RevenueCat                      | Pagamentos fáceis para aplicativos                                              |

### Backend

| Camada              | Tecnologia           | Justificativa                                |
| ------------------- | -------------------- | -------------------------------------------- |
| Runtime             | Node.js + TypeScript | Tipagem forte; ecossistema rico              |
| Framework           | Fastify              | Alta performance; baixo overhead             |
| Banco de dados      | Convex               | Confiável                                    |
| Auth                | BetterAuth           | OAuth social + email/password out of the box |
| Storage de arquivos | UploadThing          | Áudios, imagens, episódios                   |
| Cache               | Redis (Upstash)      | Cache de sessões SRS, rate limiting          |
| Fila de tarefas     | BullMQ               | Pipeline de geração de episódios IA          |

### Serviços de IA

| Função                           | Serviço                                               |
| -------------------------------- | ----------------------------------------------------- |
| Parceiro de conversação          | OpenRouter com diferentes modelos                     |
| Geração de roteiros de episódios | Anthropic Claude com system prompt especializado      |
| Síntese de voz (TTS)             | ElevenLabs com vozes brasileiras customizadas         |
| Reconhecimento de fala (STT)     | OpenAI Whisper API                                    |
| Avaliação de pronúncia           | Whisper + comparação fonética (biblioteca Phonemizer) |

### Infraestrutura

| Recurso               | Serviço                            |
| --------------------- | ---------------------------------- |
| Hospedagem do backend | Railway ou Render                  |
| CDN de áudio          | Cloudflare R2 + CDN                |
| Monitoramento         | Sentry (erros) + PostHog (produto) |
| CI/CD                 | GitHub Actions                     |
| Builds mobile         | Expo EAS Build                     |

---

## 9. Design e Telas

### Identidade Visual

O design reflete calor, energia e a identidade cultural brasileira — sem ser folclórico ou exagerado. A paleta de cores combina tons tropicais saturados com backgrounds neutros e brancos que facilitam a leitura e o foco. A tipografia é moderna e sans-serif, clara para textos de estudo.

**Cores primárias:**

- Verde vibrante (referência ao Brasil): #00A86B — usado em elementos de sucesso, progresso, ações primárias
- Âmbar quente: #F5A623 — gamificação, streaks, XP, alertas positivos
- Laranja alerta: #E84D0E — Alerta Portunhol, erros, avisos
- Azul médio: #2D7DD2 — Rádio Brasil, reprodução de áudio, informação
- Fundo claro: #F8F6F1 — tom levemente quente, não branco puro

**Tom de voz:**  
O aplicativo fala com o usuário de forma direta, amigável e encorajadora — como um amigo brasileiro paciente. Nunca condescendente, nunca clínico. Os textos de feedback usam expressões brasileiras reais: "Boa!", "Quase lá!", "Que isso, você arrasoooou!" nos momentos de celebração.

---

### Telas Principais

#### Tela de Início (Home)

A home é o ponto de entrada diário. Exibe:

- Saudação personalizada com o nome do usuário e hora do dia em português ("Bom dia, Lucas!")
- Indicador de streak atual com chama animada
- Card de "Lição de hoje" com uma estimativa de tempo e o tema da sessão
- Barra de jornada resumida (Sobrevivência → Interação → Fluência Prática) com o marcador de posição atual
- Acesso rápido às seções: Rádio Brasil, Alerta Portunhol, Dicas de Pronúncia
- Card de episódio recomendado da Rádio Brasil baseado no nível atual

#### Tela de Lição

Interface limpa e focada, sem distrações. Barra de progresso da sessão no topo mostrando quantas atividades já foram completadas. O tipo de exercício muda a cada 2–3 atividades para manter o ritmo. Feedback imediato após cada resposta: verde com explicação positiva para acerto, vermelho com a correção e uma nota breve para erro. Botão de dica disponível com custo de XP (mecânica de gamificação). Ao final da lição, tela de resultados com XP ganho, palavras dominadas e streak atualizado.

#### Rádio Brasil

Tela dividida em duas abas: **Biblioteca** (listagem de episódios por tema e nível com capa, título e duração) e **Em reprodução**.

A tela de reprodução tem o player de áudio no topo (com controles de play/pause, velocidade 0.75×/1×/1.25× e retrocesso de 5 segundos) e o painel de transcrição sincronizada abaixo ocupando 60% da tela. A palavra em reprodução fica destacada em tempo real. Ao ativar o "modo pronúncia", o áudio pausa nos pontos predefinidos, um microfone animado aparece e o usuário repete o trecho. O score de pronúncia do trecho aparece em sobreposição antes de o áudio continuar.

#### Alerta Portunhol

Duas visualizações: **Feed** (alertas em formato de card, exibidos um por vez em sessão de revisão SRS) e **Biblioteca** (todos os alertas organizados por categoria, pesquisáveis). Cada card de alerta tem: a palavra em destaque, o erro esperado do hispanófono, a forma correta em português, um exemplo em frase completa com áudio, e uma escala de "nível de perigo" (1 a 3 estrelas de caveira).

#### Dicas de Pronúncia

Uma lista de micro-lições de pronúncia organizadas por categoria fonética. Cada item mostra se já foi completado, o nível de dificuldade para hispanófonos, e um ícone do som em destaque. Ao abrir uma dica, o usuário vê a explicação em português, escuta os exemplos comparativos e pratica com o exercício de repetição.

#### Perfil e Progresso

Tela do usuário com:

- Barra de jornada completa e expandida, com as quatro sub-dimensões por estágio
- Estatísticas: dias de streak, total de palavras dominadas, horas de escuta, episódios concluídos
- Conquistas desbloqueadas (sistema de badges)
- Configurações de idioma da interface (PT / ES / EN)
- Calendário de atividade (mapa de calor dos últimos 90 dias)

---

## 10. Gamificação

A gamificação do aplicativo é projetada para criar hábito e manter o engajamento de longo prazo — não para ser um fim em si mesmo. O sistema evita mecânicas puramente punitivas e foca em recompensa, progresso visível e identidade do aprendiz.

### Moeda de Experiência — XP

Cada ação no aplicativo gera XP. Os pontos sobem de nível e desbloqueiam conteúdo e cosméticos.

| Ação                                | XP               |
| ----------------------------------- | ---------------- |
| Completar lição diária              | 50 XP            |
| Acerto perfeito em exercício        | +5 XP            |
| Completar episódio da Rádio Brasil  | 30 XP            |
| Episódio com modo pronúncia ativado | +20 XP adicional |
| Revisar Alerta Portunhol com acerto | 10 XP            |
| Sessão com parceiro de conversação  | 40 XP            |
| Ativar streak por 7 dias seguidos   | 100 XP bônus     |

### Streaks

O streak é o indicador de consistência. Uma chama animada na home mostra o número de dias consecutivos. O streak não é zerado se o usuário usar um "escudo de proteção" (item desbloqueável com XP). Streaks de marcos (7, 30, 90, 180 dias) geram celebrações especiais e badges exclusivos.

### Sistema de Badges

Conquistas desbloqueáveis organizadas em categorias:

- **Jornada:** Completar cada estágio da barra de progresso
- **Consistência:** Streaks de 7, 30, 60, 90, 180 dias
- **Pronúncia:** Scores altos em exercícios de fala por X sessões consecutivas
- **Rádio Brasil:** Completar X episódios de cada nível; concluir uma trilha temática completa
- **Portunhol Survivor:** Rever todos os alertas de uma categoria sem erros
- **Vocabulário:** Dominar 100, 300, 500, 1000 palavras
- **Conversador:** Completar X sessões com o parceiro de conversação IA

### Ligas Semanais

Os usuários são agrupados em ligas de 20 pessoas com nível similar. Uma tabela de XP semanal rankeia os participantes. Os cinco primeiros da semana sobem de liga; os cinco últimos descem. As ligas têm nomes brasileiros com progressão temática: Caipirinha → Churrasco → Samba → Carnaval → Mestre do Batuque.

### Desafios Diários

Além da lição principal, três desafios opcionais são renovados diariamente:

- "Complete uma lição sem usar nenhuma dica"
- "Ouça um episódio da Rádio Brasil em velocidade 1.25×"
- "Erre uma questão, depois acerte a mesma questão sem consultar a resposta"

Cada desafio completado dá XP bônus e conta para badges.

### Itens Desbloqueáveis

Com XP acumulado, o usuário desbloqueia:

- Escudos de proteção de streak (1 por semana, comprado com 200 XP)
- Temas visuais da interface (paletas de cores alternativas)
- Novos personagens para o parceiro de conversação IA
- Trilhas de episódios premium da Rádio Brasil

---

## 11. IA e Geração de Conteúdo

### Pipeline de Geração de Episódios — Rádio Brasil

A geração de um novo episódio segue um pipeline em quatro etapas:

**Etapa 1 — Briefing:**  
Um sistema interno define o tema, nível, duração e personagens do episódio. O briefing especifica vocabulário-alvo, estruturas gramaticais a serem usadas naturalmente, e a região de origem dos personagens.

**Etapa 2 — Roteiro (LLM):**  
O briefing é enviado ao Claude com um system prompt especializado que instrui o modelo a gerar um diálogo em português brasileiro coloquial autêntico para o nível especificado, com marcações de pausa para o modo pronúncia e transcrição palavra a palavra com timestamps estimados.

**Etapa 3 — Síntese de voz (TTS):**  
O roteiro é enviado ao ElevenLabs com vozes customizadas para cada personagem recorrente. O áudio gerado é processado para ajustar velocidade e naturalidade se necessário.

**Etapa 4 — Curadoria humana:**  
Um revisor (professor de português brasileiro) escuta o episódio, lê o roteiro, verifica autenticidade linguística, corrige eventuais erros de naturalidade ou adequação ao nível, e aprova para publicação.

### Parceiro de Conversação IA — Arquitetura de Prompt

O parceiro de conversação usa o Claude com um system prompt que define:

- A identidade e personalidade do personagem escolhido
- O nível do usuário e as estruturas que deve usar e evitar
- A instrução de responder sempre em português, independentemente de como o usuário escreva
- A instrução de corrigir erros de forma gentil e contextualizada apenas ao final de cada turno de conversa, nunca no meio
- A instrução de usar linguagem coloquial brasileira autêntica ao personagem
- O contexto acumulado da conversa atual

O histórico da conversa é mantido no cliente e enviado a cada chamada para manter coerência. Sessões longas são resumidas automaticamente quando o contexto se aproxima do limite.

### Avaliação de Pronúncia

O fluxo de avaliação de pronúncia funciona da seguinte forma:

1. O usuário grava sua voz reproduzindo uma frase.
2. O áudio é enviado ao Whisper para transcrição.
3. A transcrição é comparada à frase original usando distância de edição fonética.
4. A frase original é analisada com o Phonemizer para gerar sua representação fonética esperada.
5. O áudio do usuário é também analisado foneticamente e comparado.
6. O score é calculado com peso maior para os fonemas que são historicamente problemáticos para hispanófonos (nasais, r gutural, vogais átonas reduzidas).
7. Feedback visual mostra quais sílabas foram bem pronunciadas (verde) e quais precisam de atenção (vermelho/laranja), com reprodução do trecho correto.

---

## 12. Roadmap de Desenvolvimento

### Fase 0 — Fundação do Conteúdo (Semanas 1–4)

Antes de escrever uma linha de código mobile, o conteúdo precisa ser validado. Esta fase é puramente de pesquisa e curadoria:

- Contratar um linguista especialista em contraste ES–PT para validar a abordagem pedagógica
- Criar o currículo completo do Estágio 1 em formato de dados estruturados (JSON/planilha): 500 itens de vocabulário, 30 lições, 50 alertas Portunhol, 15 dicas de pronúncia
- Gravar os áudios do Estágio 1 com dois locutores nativos (variantes sudeste e nordeste)
- Gerar os primeiros 10 episódios piloto da Rádio Brasil (2 por nível A1–A2) e submetê-los à revisão humana
- Testar o currículo com 8–10 usuários do perfil-alvo usando um protótipo simples (Anki ou webapp básico) e colher feedback

**Entregáveis:** Currículo validado do Estágio 1, banco de dados de conteúdo inicial, relatório de feedback de usuários piloto.

---

### Fase 1 — MVP Mobile (Semanas 5–16)

Desenvolvimento do aplicativo com o conjunto mínimo de funcionalidades para validar a proposta de valor:

- Setup do projeto React Native com Expo
- Implementação do motor SRS (FSRS) no cliente com sincronização básica
- Telas: Home, Lição diária (5 tipos de exercício), Perfil básico
- Barra de jornada (visual, sem toda a lógica de avanço)
- Alerta Portunhol integrado nas lições
- Rádio Brasil versão 1 (reprodução com transcrição sincronizada, sem modo pronúncia)
- Sistema de streak e XP básico
- Backend com Auth, Progress Service e Content Service
- Conteúdo: Estágio 1 completo + primeiros episódios A1/A2

**Entregáveis:** App funcional em TestFlight/Google Play Beta, pronto para beta fechado com 50–100 usuários.

---

### Fase 2 — Beta e Funcionalidades IA (Semanas 17–22)

Com feedback do beta em mãos, adicionar as funcionalidades que dependem de IA e refinar o produto:

- Avaliação de pronúncia com feedback visual por sílaba
- Modo pronúncia na Rádio Brasil (pausa e repetição sincronizada)
- Parceiro de conversação IA (modo texto; modo voz na iteração seguinte)
- Dicas de pronúncia como seção independente
- Pipeline de geração de episódios com revisão humana
- Sistema de ligas semanais
- Conteúdo: Estágio 2 completo, episódios B1
- Iterações baseadas no feedback do beta

**Entregáveis:** Versão 1.0 completa para submissão às lojas.

---

### Fase 3 — Lançamento e Crescimento (Semanas 23–26)

- Resolução de bugs críticos pré-lançamento
- Otimização de performance e tamanho do app
- Submissão e aprovação nas lojas (App Store + Google Play)
- Lançamento suave (soft launch) em mercados-alvo (Colômbia, México, Argentina)
- Monitoramento de retenção D1/D7/D30 e otimização do onboarding
- Conteúdo do Estágio 3
- Planejamento da versão 1.1 com base nos dados de uso

---

## 13. Considerações sobre Monetização

### Modelo Recomendado: Freemium com Assinatura

**Gratuito — acesso permanente:**

- Estágio 1 completo (Sobrevivência): todas as lições, Alertas Portunhol, Dicas de Pronúncia
- 5 episódios da Rádio Brasil por mês (sem modo pronúncia)
- Sistema de streak e XP básico
- Parceiro de conversação IA: 5 sessões por mês

**Premium (assinatura mensal ou anual):**

- Estágios 2 e 3 desbloqueados
- Rádio Brasil ilimitada com modo pronúncia
- Geração de episódios personalizados
- Parceiro de conversação IA ilimitado (texto e voz)
- Avaliação de pronúncia com feedback detalhado
- Ligas semanais
- Escudos de streak ilimitados
- Download offline de episódios

**Preço sugerido:** USD 9,99/mês ou USD 59,99/ano (equivalente a ~USD 5/mês).

### Métricas-Chave para Monitorar

- Retenção D1 (primeiro dia), D7 e D30
- Taxa de conversão free → premium
- Sessões por semana por usuário ativo
- Tempo médio de sessão
- Taxa de conclusão de lições iniciadas
- NPS (Net Promoter Score)

---

## 14. Riscos e Mitigações

| Risco                                                  | Probabilidade | Impacto | Mitigação                                                                                                     |
| ------------------------------------------------------ | ------------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| Abandono do app por falta de hábito                    | Alta          | Alto    | Notificações inteligentes, streaks, sessões curtas (15 min), onboarding focado em criar o hábito              |
| Qualidade ruim do áudio gerado por IA                  | Média         | Alto    | Revisão humana obrigatória antes de publicar; vozes premium do ElevenLabs; monitorar feedback dos usuários    |
| Avaliação de pronúncia pouco precisa                   | Média         | Médio   | Começar com avaliação permissiva e calibrar com dados reais; combinar Whisper + análise fonética              |
| Currículo não adequado ao nível declarado              | Média         | Alto    | Testes com usuários reais na Fase 0; mecânica de teste de nivelamento na entrada                              |
| Custo alto de APIs de IA (Claude, ElevenLabs, Whisper) | Média         | Médio   | Cache agressivo de respostas comuns; limites por plano; geração de episódios em batch fora do horário de pico |
| Competição de apps estabelecidos (Duolingo, Babbel)    | Alta          | Médio   | Nicho claro (hispanófonos + português BR); não competir no segmento geral; marketing de comunidade            |
| Escassez de revisores humanos para conteúdo            | Baixa         | Médio   | Banco de revisores freelance pre-qualificados; processo de revisão escalável com checklist padronizado        |

## Annexes

**Annex A — Database Schema** The core tables in plain English or pseudo-SQL: users, vocabulary_items, user_progress (SRS state per item), lessons, episodes, alerts, pronunciation_tips, conversation_sessions. Just the fields and relationships.

**Annex B — API Endpoints (rough contract)** A list of the main endpoints grouped by service: Auth, Progress, Content, AI Conversation, Pronunciation. Even a one-liner per endpoint ("POST /conversation/message — sends a user message, returns AI reply and any corrections") is enough.

**Annex C — Project Structure** Your preferred monorepo layout, naming conventions, and the top-level folder structure for both the mobile app and backend.

**Annex D — App Views** [APP_VIEWS.md](./APP_VIEWS.md)

---

*Documento mantido pela equipe de produto. Última atualização: Março 2026.*
