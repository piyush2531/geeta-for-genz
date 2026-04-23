const CHAPTERS = [
  {
    num: 1, name: "Arjuna's Crisis", sanskrit: "Arjuna Vishada Yoga",
    genz: "When you freeze before the hardest decision of your life",
    themes: ["anxiety", "identity crisis", "duty"],
    summary: "Arjuna is on the battlefield, ready to fight. But when he sees his own family and teachers on the opposite side, he breaks down completely. He drops his bow. His hands shake. He can't do it.",
    genzExplain: "Imagine you're about to do something huge — a big confrontation, a breakup, standing up for yourself — and suddenly you just freeze. That sick feeling in your stomach? That's Arjuna right now. This chapter is literally a panic attack at the worst possible moment. Krishna hasn't spoken yet. This chapter is just you sitting with Arjuna in his most vulnerable moment. It doesn't try to fix the feeling — it validates it.",
    verses: [{ ref: "1.47", text: "Arjuna sank down on the chariot, his bow fallen from his hands, his mind overwhelmed with grief.", modern: "He literally sat down and couldn't function. Full shutdown mode. And this is where the Gita begins — not in strength, but in collapse." }]
  },
  {
    num: 2, name: "The Theory of Soul", sanskrit: "Sankhya Yoga",
    genz: "You are not your losses. You never were.",
    themes: ["impermanence", "identity", "detachment", "duty"],
    summary: "Krishna finally speaks. He tells Arjuna that grieving for those who will die is missing the point — the soul is eternal. The body is temporary, like clothes you wear for a lifetime, then shed.",
    genzExplain: "This is Krishna basically saying: 'You're not your GPA. You're not your follower count. You're not your relationship status.' Those things come and go — the real YOU doesn't. Also introduces the most iconic verse in the whole Gita: do your duty without being attached to the results. The ancient antidote to burnout culture. Do the work. Release the outcome.",
    verses: [{ ref: "2.47", text: "You have a right to perform your duty, but not to the fruits of your actions.", modern: "Do the work. Stop obsessing over the outcome. The anxiety about results? That's the problem, not the work itself." }]
  },
  {
    num: 3, name: "The Path of Action", sanskrit: "Karma Yoga",
    genz: "You can't just 'vibe'. You gotta do the thing.",
    themes: ["action", "purpose", "ego", "society"],
    summary: "Arjuna asks: if knowledge is so great, why do we need to act? Why not just meditate and detach? Krishna explains that doing nothing IS a choice — and usually the wrong one. Action done without ego is the path.",
    genzExplain: "You know that feeling when you overthink something so hard that you end up doing nothing? Krishna is directly calling that out. He says inaction is not peace — it's just running away wearing a spiritual costume. Your duty to act is built into you. The trick is to act without your ego running the show — without needing credit, clout, or a specific result.",
    verses: [{ ref: "3.27", text: "All actions are performed by the qualities of nature. The fool thinks 'I am the doer.'", modern: "Your ego is not the one doing the work. You're a vehicle for something larger. Let that humble you — and also set you free." }]
  },
  {
    num: 4, name: "Knowledge & Wisdom", sanskrit: "Jnana Yoga",
    genz: "This isn't new. The wisdom has always been here.",
    themes: ["knowledge", "teachers", "rebirth", "sacrifice"],
    summary: "Krishna reveals he has taught this wisdom in previous ages and explains why he appears on earth in different forms. He talks about how action done with knowledge becomes sacred, and why finding a true teacher matters.",
    genzExplain: "Krishna drops the ultimate plot twist: 'I've told you all this before.' The wisdom of the Gita isn't a trend — it's eternal. This chapter is also about the difference between information and wisdom. You can have a million saved posts on mental health and still not actually grow. Wisdom requires practice, a good teacher, and actual transformation — not just content consumption.",
    verses: [{ ref: "4.7", text: "Whenever there is a decline in righteousness and a rise in evil, I manifest myself.", modern: "The universe self-corrects. Darkness doesn't win forever. That's not cope — it's pattern recognition across history." }]
  },
  {
    num: 5, name: "Renunciation", sanskrit: "Karma Sanyasa Yoga",
    genz: "How to be genuinely unbothered (not just pretending)",
    themes: ["detachment", "peace", "ego dissolution", "equanimity"],
    summary: "Path of renouncing action vs. path of selfless action — which is better? Krishna says both lead to the same destination, but acting without ego while living in the world is more practical for most people.",
    genzExplain: "You don't have to delete all your apps and move to a forest to be spiritually free. True renunciation is doing everything while being completely okay if it doesn't go your way. Detachment isn't coldness — it's freedom from the emotional rollercoaster of outcomes. You can care deeply about what you do while being at peace with what happens.",
    verses: [{ ref: "5.10", text: "One who acts without attachment, surrendering actions to the divine, is untouched by sin, like a lotus in water.", modern: "Be the lotus. In the mess, but not of the mess. Present, but not consumed." }]
  },
  {
    num: 6, name: "Meditation", sanskrit: "Dhyana Yoga",
    genz: "Your mind is a phone. You can actually put it down.",
    themes: ["meditation", "mind control", "discipline", "balance"],
    summary: "Krishna teaches the actual mechanics of meditation — where to sit, how to breathe, where to focus the gaze. The mind is the biggest enemy AND best friend, depending on whether you've trained it.",
    genzExplain: "Arjuna literally says 'the mind is too restless to control, like wind.' Krishna agrees — it IS hard. But he doesn't say give up. He says: practice, and practice again, and don't give up when you fail. Sound familiar? This is the ancient version of every mindfulness app — except it goes way deeper. The goal isn't silence. It's stability under any condition.",
    verses: [{ ref: "6.5", text: "Elevate yourself through the power of your own mind, not degrade yourself, for the mind can be the friend or enemy of the self.", modern: "You are both the main character and the writer of your own story. Your mind decides which version you become." }]
  },
  {
    num: 7, name: "Knowledge of the Absolute", sanskrit: "Jnana Vijnana Yoga",
    genz: "Everything is divine. Including the chaos.",
    themes: ["divine nature", "illusion", "seeking", "truth"],
    summary: "Krishna explains his true nature — he is the essence of everything. Water, light, sound, the earth — all manifestations of the divine. He also explains why most people don't see this, and what keeps them searching in the wrong places.",
    genzExplain: "This is the 'it was me all along' chapter. The divine isn't somewhere else, waiting for you to be good enough or enlightened enough. It's in everything — including the parts of life that don't make sense. The reason most people miss this? Maya — the illusion that makes temporary things look permanent and permanent things look irrelevant.",
    verses: [{ ref: "7.19", text: "After many lives, the wise person surrenders to me, knowing that all this is the divine. Such a soul is very rare.", modern: "The deepest wisdom takes time — sometimes lifetimes. Don't rush your growth. The fact you're even asking these questions means you're already closer than most." }]
  },
  {
    num: 8, name: "The Eternal Self", sanskrit: "Aksara Brahma Yoga",
    genz: "What actually happens after this life?",
    themes: ["death", "liberation", "consciousness", "time"],
    summary: "What is the soul? What happens at death? What is liberation? Krishna answers all of it — the mechanics of cosmic time, different paths the soul takes, and why what you think about constantly shapes who you become.",
    genzExplain: "If you've ever wondered what happens when we die, this is the chapter. Krishna doesn't dodge the question. He explains that what you're fixated on at the moment of death carries enormous weight for what comes next. So whatever you're constantly feeding your mind — content, comparison, anger, love — is shaping not just your mood but your trajectory. Choose your mental diet accordingly.",
    verses: [{ ref: "8.6", text: "Whoever thinks of me at the moment of death comes to me. Whatever one thinks of at the moment of death, that is what one becomes.", modern: "You become what you constantly think about. This isn't just a motivational poster — it's a cosmic law." }]
  },
  {
    num: 9, name: "Royal Knowledge", sanskrit: "Raja Vidya Raja Guhya Yoga",
    genz: "The secret everyone already has access to",
    themes: ["devotion", "grace", "love", "acceptance"],
    summary: "Krishna calls this the 'royal secret' — the most direct path is love and devotion. Not complicated rituals or perfect credentials. Just genuine connection with the divine, available to everyone.",
    genzExplain: "This might be the most Gen Z chapter. Krishna explicitly says: you don't need to be from the right background, have the right lineage, or have figured everything out first. If you genuinely turn toward the divine with love — that's enough. It's the spiritual version of 'you belong here.' No gatekeeping. No prerequisites. Just show up with sincerity.",
    verses: [{ ref: "9.22", text: "To those who worship me with devotion, I carry what they need and preserve what they have.", modern: "When you stop trying to control everything alone, something else steps in. That's not weakness. That's the smartest thing you can do." }]
  },
  {
    num: 10, name: "Divine Manifestations", sanskrit: "Vibhuti Yoga",
    genz: "God is in the details — literally all of them",
    themes: ["awe", "divinity", "wonder", "excellence"],
    summary: "Krishna lists all the ways divinity shows up in the world — in the ocean's vastness, in the Himalayas, in great thinkers, in speed, in music, in intelligence. Everything excellent is a glimpse of the infinite.",
    genzExplain: "Next time you see something that makes you go 'wow' — a perfect sunset, a song that breaks you open, a moment of unexpected clarity — that's this chapter in real life. Krishna is saying excellence itself is divine. That person who inspires you so much it almost hurts? That's a fragment of the infinite showing up in human form. Including, potentially, you.",
    verses: [{ ref: "10.41", text: "Whatever is powerful, beautiful, or glorious in this world — know that it has sprung from a fraction of my splendor.", modern: "Everything that ever gave you goosebumps? That was a glimpse of something much larger. Don't let the glimpse be the whole story." }]
  },
  {
    num: 11, name: "The Cosmic Vision", sanskrit: "Vishwaroop Darshan Yoga",
    genz: "Arjuna sees something he can never unsee",
    themes: ["awe", "terror", "transcendence", "surrender"],
    summary: "Arjuna asks to see Krishna's true form. Krishna grants him divine sight. What Arjuna sees is overwhelming — the entire universe, all beings, all time, destruction and creation simultaneously. He's terrified.",
    genzExplain: "This is where things get very real. When you truly grasp how vast existence is — and how small and temporary everything you're stressed about actually is — it can be both terrifying and liberating at once. Arjuna breaks down and asks Krishna to please return to his normal form. Some truths are too big to hold for long. But having seen them, you're changed.",
    verses: [{ ref: "11.32", text: "I am Time, the destroyer of worlds, come to consume them. Even without you, all these warriors will not survive.", modern: "Things will end whether you act or not. The question is whether you'll show up for your part in the story." }]
  },
  {
    num: 12, name: "The Path of Devotion", sanskrit: "Bhakti Yoga",
    genz: "Love, actually — the spiritual kind",
    themes: ["devotion", "love", "simplicity", "character"],
    summary: "Which is better — devotion with form, or formless meditation? Krishna says devotion is easier for most humans. He then describes the exact qualities of someone who is truly dear to him — and it's not who you'd expect.",
    genzExplain: "This chapter is a character vibe-check. The qualities Krishna describes — no hatred, genuine kindness, equanimity in success and failure, no obsession with outcomes — read like a description of the most emotionally mature person you've ever met. Not the most accomplished. Not the most enlightened. Just genuinely, consistently kind. Turns out, that's the whole qualification.",
    verses: [{ ref: "12.13", text: "One who is not hateful to any creature, who is friendly and compassionate — that devotee of mine is very dear to me.", modern: "The spiritual qualification isn't being perfect or powerful. It's being genuinely kind. That's the whole test." }]
  },
  {
    num: 13, name: "The Field & Its Knower", sanskrit: "Kshetra Kshetrajna Vibhaga Yoga",
    genz: "You are not your body. But you're not separate from it either.",
    themes: ["consciousness", "knowledge", "body", "soul"],
    summary: "The body is the 'field.' The consciousness within it is the 'knower of the field.' Krishna explains the difference and what true knowledge actually looks like — hint: it includes humility, not just information.",
    genzExplain: "This chapter dismantles the idea that you ARE your body or your circumstances. But it doesn't say the body is bad or unimportant — just that it's not all you are. Real knowledge, says Krishna, is marked by humility, not causing pain to others, and recognizing the same divine spark in every being you encounter. Including people you can't stand.",
    verses: [{ ref: "13.28", text: "One who sees the same divine in all beings, and does not destroy the self by the self, reaches the highest goal.", modern: "When you stop othering people, you stop fragmenting yourself. Compassion isn't soft — it's the most advanced spiritual practice." }]
  },
  {
    num: 14, name: "The Three Qualities", sanskrit: "Gunatraya Vibhaga Yoga",
    genz: "Why you act the way you act (ancient psychology)",
    themes: ["psychology", "awareness", "behavior", "nature"],
    summary: "Everything in nature is made of three qualities — Sattva (clarity), Rajas (passion/desire), Tamas (inertia/darkness). Understanding which gunas dominate your current state explains so much about why you make the choices you do.",
    genzExplain: "This is the Gita's psychology chapter. Tamas is your doom-scroll, can't-get-out-of-bed mode. Rajas is your hustle-culture, always-anxious, never-satisfied mode. Sattva is your clear, creative, grounded mode. You move through all three — everyone does. The goal isn't to eliminate the other two. It's to recognize which one is running you right now, and gently move toward sattva.",
    verses: [{ ref: "14.6", text: "Sattva, being pure, illuminates and causes no disease — it binds one by attachment to happiness and knowledge.", modern: "Even clarity can become a trap if you cling to it. The gunas bind you either through suffering, ambition, or — subtly — through spiritual pride. Stay loose." }]
  },
  {
    num: 15, name: "The Supreme Self", sanskrit: "Purushottama Yoga",
    genz: "The tree of life and how to actually let go",
    themes: ["liberation", "attachment", "cosmic order", "surrender"],
    summary: "The world is like an upside-down tree — rooted in the divine, branches spreading downward into manifestation. To find liberation, you have to cut the roots of attachment. Krishna then describes the Supreme Person who pervades all existence.",
    genzExplain: "The upside-down tree is one of the Gita's most haunting images. What sustains the ego — the branches of desire, habit, and illusion — is exactly what keeps you stuck in cycles. Liberation isn't destruction of the tree; it's detachment from what keeps you clinging to suffering. The roots aren't wrong — they just aren't home.",
    verses: [{ ref: "15.15", text: "I am present in everyone's heart. From me come memory, knowledge, and reasoning.", modern: "That inner voice that knows the truth even when you ignore it? That's not just intuition. That's something deeper speaking through you." }]
  },
  {
    num: 16, name: "Divine vs. Demonic Nature", sanskrit: "Daivasura Sampad Vibhaga Yoga",
    genz: "The war between your best and worst self",
    themes: ["character", "ego", "choices", "integrity"],
    summary: "Krishna lists divine qualities — fearlessness, honesty, compassion — and demonic qualities — arrogance, self-deception, cruelty. Everyone carries both. The question is which one you water.",
    genzExplain: "This isn't about literal demons. It's about the two voices in your head. One honest, humble, and generous. One scheming, comparing, and always needing to win. Both show up in everyone — the difference is which one you feed daily. The demonic qualities all share one root: unchecked ego. The antidote? Genuine self-awareness, not self-criticism.",
    verses: [{ ref: "16.21", text: "Lust, anger, and greed — these are the three gates to self-destruction. Therefore one should abandon all three.", modern: "Your three main self-sabotage modes. You already know which one is your main character arc. This chapter helps you name it." }]
  },
  {
    num: 17, name: "The Three Divisions of Faith", sanskrit: "Shraddhatraya Vibhaga Yoga",
    genz: "You are what you actually believe in (not what you say you do)",
    themes: ["faith", "integrity", "lifestyle", "consistency"],
    summary: "Even faith, food, sacrifice, and generosity are divided by the three gunas. What you eat, how you give, what you pray for — all of it reveals your inner state more honestly than your stated beliefs.",
    genzExplain: "This chapter is about the gap between what you say you believe and how you actually live. Sattvic faith leads to clarity and growth. Rajasic faith is transactional — 'I'll be spiritual if I get what I want.' Tamasic faith worships ego, status, and power. Here's the uncomfortable question: what does your actual daily schedule reveal about your real priorities?",
    verses: [{ ref: "17.3", text: "The faith of each is in accordance with their nature. A person is made of their faith — whatever their faith is, that is what they are.", modern: "You are not what you claim to believe. You are what you consistently do with your time, money, and attention." }]
  },
  {
    num: 18, name: "Liberation Through Renunciation", sanskrit: "Moksha Sanyasa Yoga",
    genz: "Stop waiting to be ready. The answer was always: just begin.",
    themes: ["freedom", "surrender", "action", "conclusion"],
    summary: "The final chapter. Krishna summarizes all 17 chapters — the nature of renunciation, the highest path, and the most important teaching: surrender completely, and everything else falls into place. Then he asks Arjuna: what will YOU do?",
    genzExplain: "After 17 chapters of philosophy, Krishna lands on something radical: stop calculating. Stop trying to be perfect before you surrender. Stop waiting until you've figured it all out. Just begin, now, as you are. Arjuna has been in analysis paralysis this entire conversation. And the answer was always: just show up. The Gita ends not with a conclusion — but with a question back to you.",
    verses: [{ ref: "18.66", text: "Abandon all varieties of religion and just surrender to me. I will deliver you from all sins. Do not fear.", modern: "You don't have to have it together to start. You just have to start. The rest will meet you there." }]
  }
];
