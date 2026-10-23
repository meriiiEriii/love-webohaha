const DATA = {
  gift: {
    kicker: "For Bibi",
    hint: "From Nash. There's something inside, promise.",
    action: "tap to open, bam",
  },

  hero: {
    ribbon: "Happy Birthday, Bibi",
    title: "Everything's for you, Bibi",
    subtitle: "I built this little universe because I love you. No deeper reason.\nOkay, there's a deeper reason. Long story. Keep scrolling, bam.",
    cta: "Start our story",
    since: "since May 18, 2025",
    chips: ["Babam forever", "kilig, no charge", "moonlight certified"],
  },

  anniversaryISO: "2025-05-18T00:00:00",

  counter: {
    title: "Us, live",
    subtitle: "Every second since May 18. Honestly? Still don't get how I got this lucky. And yes, I checked the math. Twice. Charot.",
    units: ["Days", "Hours", "Minutes", "Seconds"],
  },

  whisper: [
    "first checkpoint of the softest corner of the internet",
    "sana all may Bam na nanonood sa bawat laro, buti ka",
    "phone checked, heart checked, grabe",
    "ready ka na? may quiz later. charot. (may quiz later talaga.)",
  ],

  origin: {
    title: "Where it all started",
    subtitle: "every Babam thing traces back to one question, bam.",
    tag: "my first move",
    quote: "Nakakuha nakag COR?",
    delivered: "delivered. best send of my life.",
    note: "One COR question. That was the whole move. Everything after, the moonlight, the yes, the games in Pangasinan, is a direct chain of small decisions. If she ever says the question was boring, remind her she replied. charot. (Thank you for replying then, thank you for replying now.)",
  },

  moonlight: {
    chip: "Oct 2024",
    title: "One night. One kiss. Under the moonlight.",
    body: "Let me go back there for a second. The world went quiet, you were laughing at a joke that did not deserve it, and then somehow I was kissing the prettiest girl under the moon. The wind took every speech I had prepared. I stopped looking for signs after that night. You already were the sign, bam.",
  },

  timeline: {
    title: "Our story so far",
    subtitle: "tiny dates. oversized us.",
    entries: [
      { date: "Oct 2024", title: "Under the moonlight", text: "First kiss. The night stayed quiet, but the whole sky basically approved. Lowkey screamed about it for weeks." },
      { date: "May 18, 2025", title: "The yes", text: "Official. Babam mode: on. Still the easiest yes anyone has ever given me, and I have receipts." },
      { date: "This October", title: "Champion season", text: "Erika's in Pangasinan playing the LCUAA National Games, and every point goes straight through our Facebook live. Screaming at my phone like it's a front-row seat. Zero regrets, grabe." },
      { date: "Every day after", title: "To be continued\u2026", text: "No final episode here. We just keep renewing the season, one ordinary day at a time, bam." },
    ],
  },

  gallery: {
    title: "Little pieces of us",
    subtitle: "Stand-ins for now. Drop our real photos in the folder and these get framed for real.",
    shuffle: "shuffle the scatter",
    items: [
      { art: "art-moon", motif: "moon", src: "photos/IMG20241121235215_01.jpg", tilt: -5, lift: 8 },
      { art: "art-date", motif: "heart", src: "photos/IMG20241130220015_01.jpg", tilt: 3, lift: 26 },
      { art: "art-ball", motif: "ball", src: "photos/IMG20250219141058.jpg", tilt: -2, lift: 0 },
      { art: "art-sky", motif: "cloud", src: "photos/IMG20250421194624_01.jpg", tilt: 6, lift: 18 },
      { art: "art-wave", motif: "wave", src: "photos/IMG20250706162738_01.jpg", tilt: -4, lift: 12 },
      { art: "art-us", motif: "sparkle", src: "photos/IMG20250925185051_01.jpg", tilt: 2, lift: 30 },
      { art: "art-moon", motif: "moon", src: "photos/Messenger_creation_052F0193-B9D9-40B9-AE32-41D3B62ED4B6.jpeg", tilt: 4, lift: 4 },
      { art: "art-date", motif: "heart", src: "photos/Messenger_creation_17359C79-1ABE-457A-8D35-A6839FB83A26.jpeg", tilt: -6, lift: 22 },
      { art: "art-ball", motif: "ball", src: "photos/Messenger_creation_2CA89DA6-C39C-4F0D-B2BA-4A377D3C3794.jpeg", tilt: 1, lift: 14 },
      { art: "art-sky", motif: "cloud", src: "photos/Messenger_creation_36CC2807-E81F-4B65-B8BE-35D0AA242611.jpeg", tilt: -3, lift: 28 },
      { art: "art-wave", motif: "wave", src: "photos/Messenger_creation_3A4D95C8-A819-40AF-9AD2-0B4F321506F2.jpeg", tilt: 5, lift: 6 },
      { art: "art-us", motif: "sparkle", src: "photos/Messenger_creation_3A5562FC-DAF8-404F-839B-C583B6013542.jpeg", tilt: -1, lift: 20 },
      { art: "art-moon", motif: "moon", src: "photos/Messenger_creation_592D5328-9B6C-445B-9F9C-73ED0726AD08.jpeg", tilt: -5, lift: 24 },
      { art: "art-date", motif: "heart", src: "photos/Messenger_creation_970C92DA-A3A6-4471-9D27-F85E0DB152BE.jpeg", tilt: 3, lift: 10 },
      { art: "art-ball", motif: "ball", src: "photos/Messenger_creation_9934588E-0E20-4D25-A53A-A46DDFC25BC4.jpeg", tilt: 7, lift: 0 },
      { art: "art-sky", motif: "cloud", src: "photos/Messenger_creation_9DEA5083-1841-42F6-B144-1773D0A93C74.jpeg", tilt: -2, lift: 16 },
      { art: "art-wave", motif: "wave", src: "photos/Messenger_creation_AA3A5780-117A-45C0-8AFC-CED2068E574E.jpeg", tilt: 2, lift: 32 },
      { art: "art-us", motif: "sparkle", src: "photos/Messenger_creation_CEBF90D6-CC47-4750-B1ED-1A08C5379E33.jpeg", tilt: -6, lift: 2 },
      { art: "art-moon", motif: "moon", src: "photos/Messenger_creation_EFD2E341-14D6-4B62-9E63-9A2BC23018CC.jpeg", tilt: 4, lift: 20 },
      { art: "art-date", motif: "heart", src: "photos/Screenshot_2025-01-01-23-43-14-54_be80aec1db9a2b53c9d399db0c602181.jpg", tilt: -3, lift: 12 },
      { art: "art-ball", motif: "ball", src: "photos/Screenshot_2025-07-13-23-46-47-67_be80aec1db9a2b53c9d399db0c602181.jpg", tilt: 3, lift: 6 },
    ],
  },

  letter: {
    paragraphs: [
      "Bibi, right now you're home and this is open on your phone. Which means I finally get to say the whole sappy speech I practiced in the shower, without cracking a smile halfway. Grabe, this is harder than it looks.",
      "The LCUAA games. Man. I couldn't be inside the gym in Pangasinan, but I swear my seat on the Facebook livestream was the best seat in the whole arena. Every spike, every save you dug out from the floor, my phone got yelled at so hard the neighbors might have heard. By the end my voice was gone but my heart was so full. You don't just play, bam. You make everyone watching believe they can fly a little too.",
      "About your birthday. We didn't get the cake-and-candles version this year, and I know it stung a little. So here's my workaround: a gift that doesn't need a cake in the same room. Truth is, celebrating you already happens on random Tuesdays. This one just comes with confetti.",
      "One year and change of being Babam, and I still catch myself smiling like an idiot at my phone. You make ordinary days feel like my birthday. That's not small. That's actually the whole thing.",
      "So when you're done reading, come here. One kiss. That's the entire request. And tonight, I'm picking up right where we left off in October. Under the moonlight.",
    ],
    ps: "P.S. You already played like a champion. Now come home and be adored.",
    signature: "Bam",
  },

  chatMeta: {
    title: "messages I saved for us",
    subtitle: "mostly 2am stuff. unedited. you know how it is, bam.",
  },

  chat: [
    { from: "bam", text: "hey bam. still up?" },
    { from: "bibi", text: "yes?? why are YOU up" },
    { from: "bam", text: "can't sleep. kept thinking about how you looked on the livestream today. even through one blurry Facebook stream, unfair, honestly" },
    { from: "bibi", text: "hala ka. grabe ka na naman" },
    { from: "bam", text: "sorry, giving myself 5 minutes to be normal about it. charot." },
    { from: "bam", text: "sana all nga may jowang nagse-spike sa buhay. good thing ako 'yon" },
    { from: "bibi", text: "hoiii you're so cringe" },
    { from: "bam", text: "weird thing to say while smiling at your phone right now. I can feel it. gigil level: maximum" },
    { from: "bibi", text: "ok stop. come home na, kinikilig na ako eh" },
    { from: "bam", text: "on my way. and so you know, for the record: out of everyone, I still choose you. every day. even on the days my jokes get zero laughs" },
  ],

  reasons: {
    title: "10 reasons I love you",
    subtitle: "Tap them one by one. Number ten is the heavy one.",
    items: [
      "You're the most understanding person I know. Even when I'm being difficult, you choose to get me anyway. Every single time.",
      "You give so much and ask so little. You have this way of making sure everyone around you feels taken care of. Including me. Especially me.",
      "Cute AND beautiful is honestly an unfair combo, bam. How am I supposed to act normal when you walk into the room?",
      "You're too kind for this world. You worry about other people's hearts while carrying your own so carefully. Let me hold some of that for you.",
      "You're funny without even trying. Half of my favorite memories are just us laughing at absolutely nothing, grabe.",
      "Good at volleyball is underselling it. You're the reason the whole gym stops when you fly. Most exciting thing I've ever watched, even through one blurry Facebook live.",
      "You're the hardest worker I know. Practice, games, everything. You never cut corners, not once, and that makes me proud in a way I can't post anywhere. So it lives here.",
      "You're so patient with me. With my moods, my bad timing, my 2am nonsense. You make loving you feel like the easiest thing in the world.",
      "You're brave. You take yourself to far places and big courts and you meet every challenge head-on. Pangasinan just hosted the bravest player they'll ever see.",
      "And above everything: you make me want to be better. Not the perfect kind of better. The kind that shows up every single day for you. Happy Birthday, bam. This whole page exists because of that.",
    ],
    finalReveal: "Happy Birthday, Bibi. Home is wherever we're together.",
  },

  quiz: {
    title: "How well does Bibi know us?",
    subtitle: "Five questions. No pressure, and Bam is far too merciful to keep score for real. (He is keeping score.)",
    questions: [
      { q: "Where did our first kiss happen?", options: ["At the movies", "Under the moonlight", "At the beach", "On a road trip"], answer: 1 },
      { q: "What's our official anniversary?", options: ["May 18, 2025", "Oct 24", "Jun 14", "May 8"], answer: 0 },
      { q: "Which of these is NOT one of our callsigns?", options: ["Babam", "Bam", "Bibi", "Bambi"], answer: 3 },
      { q: "What did Bibi compete in at the LCUAA National Games?", options: ["Volleyball", "Chess", "Badminton", "Table tennis"], answer: 0 },
      { q: "When is Bibi's birthday?", options: ["Oct 24", "Nov 2", "Oct 28", "Sep 28"], answer: 2 },
    ],
    results: {
      perfect: "Perfect score. Nobody in this universe knows us better. Achievement unlocked, bam.",
      good: "Strong. The kilig memory hits different at full speed.",
      low: "Low battery sa memory? It's fine, that's what Bam is for. I remember enough for the both of us.",
    },
    replay: "play again",
    scoreLine: "you scored",
  },

  footer: {
    madeBy: "built by Bam, for his Bibi",
    againHint: "one more confetti, bam",
    lines: [
      "Everywhere is home, as long as it's us.",
      "Sana all may this kind of love. Glad we never have to say it.",
      "Wherever you go, Babam mode travels with you.",
      "Every day with you counts as a win in my book.",
      "If the world ever stops, I'll still be right next to you.",
    ],
  },
};
