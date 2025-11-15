const allVocabularyQuestions = [
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Accept'?",
        options: ["গ্রহণ করা", "প্রত্যাখ্যান করা", "যোগ করা", "বাদ দেওয়া"],
        answer: "গ্রহণ করা",
        explanation: "'Accept' মানে গ্রহণ করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Add'?",
        options: ["যোগ করা", "বাদ দেওয়া", "গুণ করা", "ভাগ করা"],
        answer: "যোগ করা",
        explanation: "'Add' মানে যোগ করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Advice'?",
        options: ["উপদেশ", "আদেশ", "অনুরোধ", "প্রশ্ন"],
        answer: "উপদেশ",
        explanation: "'Advice' মানে উপদেশ।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Afraid'?",
        options: ["ভীত", "সাহসী", "শান্ত", "রাগান্বিত"],
        answer: "ভীত",
        explanation: "'Afraid' মানে ভীত।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Angry'?",
        options: ["রাগান্বিত", "সুখী", "দুঃখী", "শান্ত"],
        answer: "রাগান্বিত",
        explanation: "'Angry' মানে রাগান্বিত।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Arrive'?",
        options: ["পৌঁছানো", "ছেড়ে যাওয়া", "আসা", "যাওয়া"],
        answer: "পৌঁছানো",
        explanation: "'Arrive' মানে পৌঁছানো।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Avoid'?",
        options: ["এড়ানো", "সামনে আসা", "গ্রহণ করা", "যোগ করা"],
        answer: "এড়ানো",
        explanation: "'Avoid' মানে এড়ানো।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Believe'?",
        options: ["বিশ্বাস করা", "সন্দেহ করা", "জানা", "ভুলে যাওয়া"],
        answer: "বিশ্বাস করা",
        explanation: "'Believe' মানে বিশ্বাস করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Borrow'?",
        options: ["ধার নেওয়া", "ধার দেওয়া", "কেনা", "বিক্রি করা"],
        answer: "ধার নেওয়া",
        explanation: "'Borrow' মানে ধার নেওয়া।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Brave'?",
        options: ["সাহসী", "ভীত", "দুর্বল", "শক্তিশালী"],
        answer: "সাহসী",
        explanation: "'Brave' মানে সাহসী।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Busy'?",
        options: ["ব্যস্ত", "অবসর", "শান্ত", "দ্রুত"],
        answer: "ব্যস্ত",
        explanation: "'Busy' মানে ব্যস্ত।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Calm'?",
        options: ["শান্ত", "রাগান্বিত", "ব্যস্ত", "দ্রুত"],
        answer: "শান্ত",
        explanation: "'Calm' মানে শান্ত।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Change'?",
        options: ["পরিবর্তন", "স্থির", "বৃদ্ধি", "হ্রাস"],
        answer: "পরিবর্তন",
        explanation: "'Change' মানে পরিবর্তন।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Clean'?",
        options: ["পরিষ্কার", "নোংরা", "সুন্দর", "খারাপ"],
        answer: "পরিষ্কার",
        explanation: "'Clean' মানে পরিষ্কার।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Continue'?",
        options: ["চালিয়ে যাওয়া", "থামানো", "শুরু করা", "শেষ করা"],
        answer: "চালিয়ে যাওয়া",
        explanation: "'Continue' মানে চালিয়ে যাওয়া।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Create'?",
        options: ["তৈরি করা", "ধ্বংস করা", "পরিবর্তন করা", "যোগ করা"],
        answer: "তৈরি করা",
        explanation: "'Create' মানে তৈরি করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Decide'?",
        options: ["সিদ্ধান্ত নেওয়া", "সন্দেহ করা", "ভুলে যাওয়া", "জানা"],
        answer: "সিদ্ধান্ত নেওয়া",
        explanation: "'Decide' মানে সিদ্ধান্ত নেওয়া।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Deep'?",
        options: ["গভীর", "অগভীর", "উচ্চ", "নিম্ন"],
        answer: "গভীর",
        explanation: "'Deep' মানে গভীর।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Difficult'?",
        options: ["কঠিন", "সহজ", "শক্তিশালী", "দুর্বল"],
        answer: "কঠিন",
        explanation: "'Difficult' মানে কঠিন।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Dream'?",
        options: ["স্বপ্ন", "বাস্তব", "চিন্তা", "ঘুম"],
        answer: "স্বপ্ন",
        explanation: "'Dream' মানে স্বপ্ন।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Easy'?",
        options: ["সহজ", "কঠিন", "দ্রুত", "ধীর"],
        answer: "সহজ",
        explanation: "'Easy' মানে সহজ।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Enjoy'?",
        options: ["উপভোগ করা", "ঘৃণা করা", "কাজ করা", "খেলা করা"],
        answer: "উপভোগ করা",
        explanation: "'Enjoy' মানে উপভোগ করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Enough'?",
        options: ["যথেষ্ট", "কম", "বেশি", "কিছুই না"],
        answer: "যথেষ্ট",
        explanation: "'Enough' মানে যথেষ্ট।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Explain'?",
        options: ["ব্যাখ্যা করা", "লুকানো", "প্রশ্ন করা", "উত্তর দেওয়া"],
        answer: "ব্যাখ্যা করা",
        explanation: "'Explain' মানে ব্যাখ্যা করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Famous'?",
        options: ["বিখ্যাত", "অপরিচিত", "সাধারণ", "বিশেষ"],
        answer: "বিখ্যাত",
        explanation: "'Famous' মানে বিখ্যাত।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Fast'?",
        options: ["দ্রুত", "ধীর", "শক্তিশালী", "দুর্বল"],
        answer: "দ্রুত",
        explanation: "'Fast' মানে দ্রুত।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Focus'?",
        options: ["মনোযোগ দেওয়া", "বিচলিত হওয়া", "ভুলে যাওয়া", "জানা"],
        answer: "মনোযোগ দেওয়া",
        explanation: "'Focus' মানে মনোযোগ দেওয়া।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Forget'?",
        options: ["ভুলে যাওয়া", "মনে রাখা", "জানা", "শেখা"],
        answer: "ভুলে যাওয়া",
        explanation: "'Forget' মানে ভুলে যাওয়া।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Friend'?",
        options: ["বন্ধু", "শত্রু", "পরিবার", "সহকর্মী"],
        answer: "বন্ধু",
        explanation: "'Friend' মানে বন্ধু।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Future'?",
        options: ["ভবিষ্যৎ", "অতীত", "বর্তমান", "সময়"],
        answer: "ভবিষ্যৎ",
        explanation: "'Future' মানে ভবিষ্যৎ।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Gain'?",
        options: ["অর্জন করা", "হারানো", "দেওয়া", "নেওয়া"],
        answer: "অর্জন করা",
        explanation: "'Gain' মানে অর্জন করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Govern'?",
        options: ["শাসন করা", "পালন করা", "নিয়ন্ত্রণ করা", "মুক্ত করা"],
        answer: "শাসন করা",
        explanation: "'Govern' মানে শাসন করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Habit'?",
        options: ["অভ্যাস", "অস্বাভাবিক", "পরিবর্তন", "স্থির"],
        answer: "অভ্যাস",
        explanation: "'Habit' মানে অভ্যাস।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Handle'?",
        options: ["সামলানো", "ছেড়ে দেওয়া", "ধরা", "ফেলা"],
        answer: "সামলানো",
        explanation: "'Handle' মানে সামলানো।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Honest'?",
        options: ["সৎ", "অসৎ", "মিথ্যাবাদী", "সত্যবাদী"],
        answer: "সৎ",
        explanation: "'Honest' মানে সৎ।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Improve'?",
        options: ["উন্নতি করা", "খারাপ করা", "পরিবর্তন করা", "স্থির রাখা"],
        answer: "উন্নতি করা",
        explanation: "'Improve' মানে উন্নতি করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Include'?",
        options: ["অন্তর্ভুক্ত করা", "বাদ দেওয়া", "যোগ করা", "বিচ্ছিন্ন করা"],
        answer: "অন্তর্ভুক্ত করা",
        explanation: "'Include' মানে অন্তর্ভুক্ত করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Increase'?",
        options: ["বৃদ্ধি করা", "হ্রাস করা", "স্থির রাখা", "পরিবর্তন করা"],
        answer: "বৃদ্ধি করা",
        explanation: "'Increase' মানে বৃদ্ধি করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Intelligent'?",
        options: ["বুদ্ধিমান", "নির্বোধ", "শক্তিশালী", "দুর্বল"],
        answer: "বুদ্ধিমান",
        explanation: "'Intelligent' মানে বুদ্ধিমান।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Journey'?",
        options: ["যাত্রা", "থাকা", "বসা", "ঘুম"],
        answer: "যাত্রা",
        explanation: "'Journey' মানে যাত্রা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Justice'?",
        options: ["ন্যায়", "অন্যায়", "আইন", "শাসন"],
        answer: "ন্যায়",
        explanation: "'Justice' মানে ন্যায়।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Knowledge'?",
        options: ["জ্ঞান", "অজ্ঞান", "শিক্ষা", "তথ্য"],
        answer: "জ্ঞান",
        explanation: "'Knowledge' মানে জ্ঞান।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Limit'?",
        options: ["সীমা", "অসীম", "বৃদ্ধি", "হ্রাস"],
        answer: "সীমা",
        explanation: "'Limit' মানে সীমা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Lucky'?",
        options: ["সৌভাগ্যবান", "দুর্ভাগ্যবান", "সফল", "ব্যর্থ"],
        answer: "সৌভাগ্যবান",
        explanation: "'Lucky' মানে সৌভাগ্যবান।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Manage'?",
        options: ["পরিচালনা করা", "ছেড়ে দেওয়া", "নিয়ন্ত্রণ করা", "মুক্ত করা"],
        answer: "পরিচালনা করা",
        explanation: "'Manage' মানে পরিচালনা করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Mention'?",
        options: ["উল্লেখ করা", "লুকানো", "বলা", "শোনা"],
        answer: "উল্লেখ করা",
        explanation: "'Mention' মানে উল্লেখ করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Mistake'?",
        options: ["ভুল", "সঠিক", "ত্রুটি", "সফলতা"],
        answer: "ভুল",
        explanation: "'Mistake' মানে ভুল।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Natural'?",
        options: ["প্রাকৃতিক", "কৃত্রিম", "সাধারণ", "বিশেষ"],
        answer: "প্রাকৃতিক",
        explanation: "'Natural' মানে প্রাকৃতিক।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Necessary'?",
        options: ["প্রয়োজনীয়", "অপ্রয়োজনীয়", "গুরুত্বপূর্ণ", "সাধারণ"],
        answer: "প্রয়োজনীয়",
        explanation: "'Necessary' মানে প্রয়োজনীয়।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Offer'?",
        options: ["প্রস্তাব করা", "গ্রহণ করা", "প্রত্যাখ্যান করা", "চাওয়া"],
        answer: "প্রস্তাব করা",
        explanation: "'Offer' মানে প্রস্তাব করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Ordinary'?",
        options: ["সাধারণ", "বিশেষ", "অসাধারণ", "বিখ্যাত"],
        answer: "সাধারণ",
        explanation: "'Ordinary' মানে সাধারণ।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Patient'?",
        options: ["ধৈর্যশীল", "অধৈর্য", "শান্ত", "দ্রুত"],
        answer: "ধৈর্যশীল",
        explanation: "'Patient' মানে ধৈর্যশীল।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Perform'?",
        options: ["সম্পাদন করা", "শুরু করা", "শেষ করা", "থামানো"],
        answer: "সম্পাদন করা",
        explanation: "'Perform' মানে সম্পাদন করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Positive'?",
        options: ["ইতিবাচক", "নেতিবাচক", "সঠিক", "ভুল"],
        answer: "ইতিবাচক",
        explanation: "'Positive' মানে ইতিবাচক।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Powerful'?",
        options: ["শক্তিশালী", "দুর্বল", "বড়", "ছোট"],
        answer: "শক্তিশালী",
        explanation: "'Powerful' মানে শক্তিশালী।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Protect'?",
        options: ["রক্ষা করা", "আক্রমণ করা", "ধ্বংস করা", "তৈরি করা"],
        answer: "রক্ষা করা",
        explanation: "'Protect' মানে রক্ষা করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Purpose'?",
        options: ["উদ্দেশ্য", "কারণ", "ফলাফল", "পরিকল্পনা"],
        answer: "উদ্দেশ্য",
        explanation: "'Purpose' মানে উদ্দেশ্য।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Regular'?",
        options: ["নিয়মিত", "অনিয়মিত", "সাধারণ", "বিশেষ"],
        answer: "নিয়মিত",
        explanation: "'Regular' মানে নিয়মিত।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Respect'?",
        options: ["সম্মান", "অসম্মান", "ভালোবাসা", "ঘৃণা"],
        answer: "সম্মান",
        explanation: "'Respect' মানে সম্মান।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Responsible'?",
        options: ["দায়িত্বশীল", "দায়িত্বহীন", "সক্রিয়", "নিষ্ক্রিয়"],
        answer: "দায়িত্বশীল",
        explanation: "'Responsible' মানে দায়িত্বশীল।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Secret'?",
        options: ["গোপন", "প্রকাশ্য", "জানা", "অজানা"],
        answer: "গোপন",
        explanation: "'Secret' মানে গোপন।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Serious'?",
        options: ["গুরুত্বপূর্ণ", "সাধারণ", "মজার", "দুঃখী"],
        answer: "গুরুত্বপূর্ণ",
        explanation: "'Serious' মানে গুরুত্বপূর্ণ।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Similar'?",
        options: ["অনুরূপ", "ভিন্ন", "একই", "আলাদা"],
        answer: "অনুরূপ",
        explanation: "'Similar' মানে অনুরূপ।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Solve'?",
        options: ["সমাধান করা", "জটিল করা", "প্রশ্ন করা", "উত্তর দেওয়া"],
        answer: "সমাধান করা",
        explanation: "'Solve' মানে সমাধান করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Strength'?",
        options: ["শক্তি", "দুর্বলতা", "সাহস", "ভয়"],
        answer: "শক্তি",
        explanation: "'Strength' মানে শক্তি।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Support'?",
        options: ["সমর্থন", "বিরোধিতা", "সাহায্য", "বাধা"],
        answer: "সমর্থন",
        explanation: "'Support' মানে সমর্থন।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Surprise'?",
        options: ["বিস্ময়", "সাধারণ", "জানা", "অজানা"],
        answer: "বিস্ময়",
        explanation: "'Surprise' মানে বিস্ময়।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Tolerate'?",
        options: ["সহ্য করা", "অসহ্য করা", "গ্রহণ করা", "প্রত্যাখ্যান করা"],
        answer: "সহ্য করা",
        explanation: "'Tolerate' মানে সহ্য করা।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Trust'?",
        options: ["বিশ্বাস", "অবিশ্বাস", "সন্দেহ", "জানা"],
        answer: "বিশ্বাস",
        explanation: "'Trust' মানে বিশ্বাস।"
    },
    {
        category: "Basic",
        difficulty: "easy",
        question: "What is the meaning of 'Valuable'?",
        options: ["মূল্যবান", "মূল্যহীন", "গুরুত্বপূর্ণ", "সাধারণ"],
        answer: "মূল্যবান",
        explanation: "'Valuable' মানে মূল্যবান।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Accomplish'?",
        options: ["সফলভাবে সম্পন্ন করা", "ব্যর্থ হওয়া", "শুরু করা", "থামানো"],
        answer: "সফলভাবে সম্পন্ন করা",
        explanation: "'Accomplish' মানে সফলভাবে সম্পন্ন করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Accurate'?",
        options: ["নির্ভুল", "ভুল", "সঠিক", "অসঠিক"],
        answer: "নির্ভুল",
        explanation: "'Accurate' মানে নির্ভুল।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Ambition'?",
        options: ["উচ্চাকাঙ্ক্ষা", "নিষ্ক্রিয়তা", "লক্ষ্য", "স্বপ্ন"],
        answer: "উচ্চাকাঙ্ক্ষা",
        explanation: "'Ambition' মানে উচ্চাকাঙ্ক্ষা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Analyze'?",
        options: ["বিশ্লেষণ করা", "সংশ্লেষণ করা", "যোগ করা", "বাদ দেওয়া"],
        answer: "বিশ্লেষণ করা",
        explanation: "'Analyze' মানে বিশ্লেষণ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Anticipate'?",
        options: ["আগাম অনুমান করা", "অপেক্ষা করা", "ভুলে যাওয়া", "জানা"],
        answer: "আগাম অনুমান করা",
        explanation: "'Anticipate' মানে আগাম অনুমান করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Appropriate'?",
        options: ["উপযুক্ত", "অনুপযুক্ত", "সঠিক", "ভুল"],
        answer: "উপযুক্ত",
        explanation: "'Appropriate' মানে উপযুক্ত।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Complicate'?",
        options: ["জটিল করা", "সহজ করা", "সমাধান করা", "প্রশ্ন করা"],
        answer: "জটিল করা",
        explanation: "'Complicate' মানে জটিল করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Comprehensive'?",
        options: ["ব্যাপক", "সীমিত", "ছোট", "বড়"],
        answer: "ব্যাপক",
        explanation: "'Comprehensive' মানে ব্যাপক।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Contribute'?",
        options: ["অবদান রাখা", "বাদ দেওয়া", "গ্রহণ করা", "দেওয়া"],
        answer: "অবদান রাখা",
        explanation: "'Contribute' মানে অবদান রাখা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Crucial'?",
        options: ["অত্যন্ত গুরুত্বপূর্ণ", "অপ্রয়োজনীয়", "সাধারণ", "বিশেষ"],
        answer: "অত্যন্ত গুরুত্বপূর্ণ",
        explanation: "'Crucial' মানে অত্যন্ত গুরুত্বপূর্ণ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Dedicate'?",
        options: ["উৎসর্গ করা", "বাদ দেওয়া", "গ্রহণ করা", "দেওয়া"],
        answer: "উৎসর্গ করা",
        explanation: "'Dedicate' মানে উৎসর্গ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Demonstrate'?",
        options: ["প্রদর্শন করা", "লুকানো", "বলা", "শোনা"],
        answer: "প্রদর্শন করা",
        explanation: "'Demonstrate' মানে প্রদর্শন করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Determine'?",
        options: ["নির্ধারণ করা", "সন্দেহ করা", "ভুলে যাওয়া", "জানা"],
        answer: "নির্ধারণ করা",
        explanation: "'Determine' মানে নির্ধারণ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Discipline'?",
        options: ["শৃঙ্খলা", "অশৃঙ্খলা", "নিয়ম", "আইন"],
        answer: "শৃঙ্খলা",
        explanation: "'Discipline' মানে শৃঙ্খলা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Efficient'?",
        options: ["দক্ষ", "অদক্ষ", "শক্তিশালী", "দুর্বল"],
        answer: "দক্ষ",
        explanation: "'Efficient' মানে দক্ষ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Evaluate'?",
        options: ["মূল্যায়ন করা", "বাদ দেওয়া", "যোগ করা", "গুণ করা"],
        answer: "মূল্যায়ন করা",
        explanation: "'Evaluate' মানে মূল্যায়ন করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Evidence'?",
        options: ["প্রমাণ", "সন্দেহ", "মিথ্যা", "সত্য"],
        answer: "প্রমাণ",
        explanation: "'Evidence' মানে প্রমাণ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Fundamental'?",
        options: ["মৌলিক", "অতিরিক্ত", "সাধারণ", "বিশেষ"],
        answer: "মৌলিক",
        explanation: "'Fundamental' মানে মৌলিক।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Identify'?",
        options: ["সনাক্ত করা", "লুকানো", "জানা", "ভুলে যাওয়া"],
        answer: "সনাক্ত করা",
        explanation: "'Identify' মানে সনাক্ত করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Implement'?",
        options: ["বাস্তবায়ন করা", "পরিকল্পনা করা", "শুরু করা", "শেষ করা"],
        answer: "বাস্তবায়ন করা",
        explanation: "'Implement' মানে বাস্তবায়ন করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Influence'?",
        options: ["প্রভাব", "অপ্রভাব", "কারণ", "ফলাফল"],
        answer: "প্রভাব",
        explanation: "'Influence' মানে প্রভাব।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Initiative'?",
        options: ["উদ্যোগ", "নিষ্ক্রিয়তা", "পরিকল্পনা", "কাজ"],
        answer: "উদ্যোগ",
        explanation: "'Initiative' মানে উদ্যোগ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Interpret'?",
        options: ["ব্যাখ্যা করা", "লুকানো", "প্রশ্ন করা", "উত্তর দেওয়া"],
        answer: "ব্যাখ্যা করা",
        explanation: "'Interpret' মানে ব্যাখ্যা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Maintain'?",
        options: ["বজায় রাখা", "পরিবর্তন করা", "ধ্বংস করা", "তৈরি করা"],
        answer: "বজায় রাখা",
        explanation: "'Maintain' মানে বজায় রাখা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Neglect'?",
        options: ["অবহেলা করা", "যত্ন নেওয়া", "মনোযোগ দেওয়া", "দেখা"],
        answer: "অবহেলা করা",
        explanation: "'Neglect' মানে অবহেলা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Priority'?",
        options: ["অগ্রাধিকার", "সাধারণ", "গুরুত্বপূর্ণ", "অপ্রয়োজনীয়"],
        answer: "অগ্রাধিকার",
        explanation: "'Priority' মানে অগ্রাধিকার।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Recommend'?",
        options: ["সুপারিশ করা", "বিরোধিতা করা", "প্রশ্ন করা", "উত্তর দেওয়া"],
        answer: "সুপারিশ করা",
        explanation: "'Recommend' মানে সুপারিশ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Regret'?",
        options: ["অনুশোচনা", "আনন্দ", "সুখ", "দুঃখ"],
        answer: "অনুশোচনা",
        explanation: "'Regret' মানে অনুশোচনা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Significant'?",
        options: ["গুরুত্বপূর্ণ", "অগুরুত্বপূর্ণ", "সাধারণ", "বিশেষ"],
        answer: "গুরুত্বপূর্ণ",
        explanation: "'Significant' মানে গুরুত্বপূর্ণ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Ultimate'?",
        options: ["চূড়ান্ত", "প্রাথমিক", "মাঝারি", "শেষ"],
        answer: "চূড়ান্ত",
        explanation: "'Ultimate' মানে চূড়ান্ত।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Acceptable'?",
        options: ["গ্রহণযোগ্য", "অগ্রহণযোগ্য", "সঠিক", "ভুল"],
        answer: "গ্রহণযোগ্য",
        explanation: "'Acceptable' মানে গ্রহণযোগ্য।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Achieve'?",
        options: ["অর্জন করা", "ব্যর্থ হওয়া", "শুরু করা", "শেষ করা"],
        answer: "অর্জন করা",
        explanation: "'Achieve' মানে অর্জন করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Admire'?",
        options: ["প্রশংসা করা", "ঘৃণা করা", "ভালোবাসা", "অপছন্দ করা"],
        answer: "প্রশংসা করা",
        explanation: "'Admire' মানে প্রশংসা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Admit'?",
        options: ["স্বীকার করা", "অস্বীকার করা", "লুকানো", "বলা"],
        answer: "স্বীকার করা",
        explanation: "'Admit' মানে স্বীকার করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Agree'?",
        options: ["সম্মত হওয়া", "অসম্মত হওয়া", "প্রশ্ন করা", "উত্তর দেওয়া"],
        answer: "সম্মত হওয়া",
        explanation: "'Agree' মানে সম্মত হওয়া।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Allow'?",
        options: ["অনুমতি দেওয়া", "নিষেধ করা", "গ্রহণ করা", "প্রত্যাখ্যান করা"],
        answer: "অনুমতি দেওয়া",
        explanation: "'Allow' মানে অনুমতি দেওয়া।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Announce'?",
        options: ["ঘোষণা করা", "লুকানো", "বলা", "শোনা"],
        answer: "ঘোষণা করা",
        explanation: "'Announce' মানে ঘোষণা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Answer'?",
        options: ["উত্তর দেওয়া", "প্রশ্ন করা", "বলা", "শোনা"],
        answer: "উত্তর দেওয়া",
        explanation: "'Answer' মানে উত্তর দেওয়া।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Arrive'?",
        options: ["পৌঁছানো", "ছেড়ে যাওয়া", "আসা", "যাওয়া"],
        answer: "পৌঁছানো",
        explanation: "'Arrive' মানে পৌঁছানো।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Assist'?",
        options: ["সহায়তা করা", "বাধা দেওয়া", "কাজ করা", "খেলা করা"],
        answer: "সহায়তা করা",
        explanation: "'Assist' মানে সহায়তা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Assume'?",
        options: ["ধারণা করা", "জানা", "সন্দেহ করা", "ভুলে যাওয়া"],
        answer: "ধারণা করা",
        explanation: "'Assume' মানে ধারণা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Available'?",
        options: ["উপলভ্য", "অনুপলভ্য", "আছে", "নেই"],
        answer: "উপলভ্য",
        explanation: "'Available' মানে উপলভ্য।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Avoidance'?",
        options: ["এড়ানো", "সামনে আসা", "গ্রহণ করা", "যোগ করা"],
        answer: "এড়ানো",
        explanation: "'Avoidance' মানে এড়ানো।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Balance'?",
        options: ["সমতা", "অসমতা", "বৃদ্ধি", "হ্রাস"],
        answer: "সমতা",
        explanation: "'Balance' মানে সমতা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Behave'?",
        options: ["আচরণ করা", "কাজ করা", "খেলা করা", "বসা"],
        answer: "আচরণ করা",
        explanation: "'Behave' মানে আচরণ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Benefit'?",
        options: ["সুবিধা", "অসুবিধা", "লাভ", "ক্ষতি"],
        answer: "সুবিধা",
        explanation: "'Benefit' মানে সুবিধা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Believe'?",
        options: ["বিশ্বাস করা", "সন্দেহ করা", "জানা", "ভুলে যাওয়া"],
        answer: "বিশ্বাস করা",
        explanation: "'Believe' মানে বিশ্বাস করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Betray'?",
        options: ["বিশ্বাসঘাতকতা", "বিশ্বাস", "সততা", "বন্ধুত্ব"],
        answer: "বিশ্বাসঘাতকতা",
        explanation: "'Betray' মানে বিশ্বাসঘাতকতা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Build'?",
        options: ["গড়া", "ধ্বংস করা", "তৈরি করা", "ভাঙা"],
        answer: "গড়া",
        explanation: "'Build' মানে গড়া।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Calculate'?",
        options: ["গণনা করা", "যোগ করা", "বাদ দেওয়া", "গুণ করা"],
        answer: "গণনা করা",
        explanation: "'Calculate' মানে গণনা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Cancel'?",
        options: ["বাতিল করা", "শুরু করা", "শেষ করা", "চালিয়ে যাওয়া"],
        answer: "বাতিল করা",
        explanation: "'Cancel' মানে বাতিল করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Careful'?",
        options: ["সাবধান", "অসাবধান", "দ্রুত", "ধীর"],
        answer: "সাবধান",
        explanation: "'Careful' মানে সাবধান।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Celebrate'?",
        options: ["উদযাপন করা", "দুঃখ করা", "কাজ করা", "খেলা করা"],
        answer: "উদযাপন করা",
        explanation: "'Celebrate' মানে উদযাপন করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Challenge'?",
        options: ["চ্যালেঞ্জ", "সহজ", "কঠিন", "কাজ"],
        answer: "চ্যালেঞ্জ",
        explanation: "'Challenge' মানে চ্যালেঞ্জ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Choose'?",
        options: ["পছন্দ করা", "প্রত্যাখ্যান করা", "গ্রহণ করা", "বাদ দেওয়া"],
        answer: "পছন্দ করা",
        explanation: "'Choose' মানে পছন্দ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Collect'?",
        options: ["সংগ্রহ করা", "ছড়িয়ে দেওয়া", "যোগ করা", "বাদ দেওয়া"],
        answer: "সংগ্রহ করা",
        explanation: "'Collect' মানে সংগ্রহ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Comfort'?",
        options: ["সান্ত্বনা", "অশান্তি", "সুখ", "দুঃখ"],
        answer: "সান্ত্বনা",
        explanation: "'Comfort' মানে সান্ত্বনা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Compare'?",
        options: ["তুলনা করা", "একই রাখা", "ভিন্ন করা", "যোগ করা"],
        answer: "তুলনা করা",
        explanation: "'Compare' মানে তুলনা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Complete'?",
        options: ["সম্পন্ন করা", "অসম্পূর্ণ রাখা", "শুরু করা", "থামানো"],
        answer: "সম্পন্ন করা",
        explanation: "'Complete' মানে সম্পন্ন করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Concern'?",
        options: ["উদ্বেগ", "শান্তি", "সুখ", "দুঃখ"],
        answer: "উদ্বেগ",
        explanation: "'Concern' মানে উদ্বেগ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Confirm'?",
        options: ["নিশ্চিত করা", "অনিশ্চিত করা", "সন্দেহ করা", "জানা"],
        answer: "নিশ্চিত করা",
        explanation: "'Confirm' মানে নিশ্চিত করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Connect'?",
        options: ["সংযুক্ত করা", "বিচ্ছিন্ন করা", "যোগ করা", "বাদ দেওয়া"],
        answer: "সংযুক্ত করা",
        explanation: "'Connect' মানে সংযুক্ত করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Consider'?",
        options: ["বিবেচনা করা", "উপেক্ষা করা", "জানা", "ভুলে যাওয়া"],
        answer: "বিবেচনা করা",
        explanation: "'Consider' মানে বিবেচনা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Consist'?",
        options: ["গঠিত হওয়া", "ভাঙা", "তৈরি করা", "ধ্বংস করা"],
        answer: "গঠিত হওয়া",
        explanation: "'Consist' মানে গঠিত হওয়া।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Construct'?",
        options: ["নির্মাণ করা", "ধ্বংস করা", "তৈরি করা", "ভাঙা"],
        answer: "নির্মাণ করা",
        explanation: "'Construct' মানে নির্মাণ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Control'?",
        options: ["নিয়ন্ত্রণ করা", "মুক্ত করা", "ছেড়ে দেওয়া", "ধরা"],
        answer: "নিয়ন্ত্রণ করা",
        explanation: "'Control' মানে নিয়ন্ত্রণ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Convinced'?",
        options: ["বিশ্বাসী", "অবিশ্বাসী", "সন্দেহবাদী", "জানা"],
        answer: "বিশ্বাসী",
        explanation: "'Convinced' মানে বিশ্বাসী।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Cooperate'?",
        options: ["সহযোগিতা করা", "বিরোধিতা করা", "কাজ করা", "খেলা করা"],
        answer: "সহযোগিতা করা",
        explanation: "'Cooperate' মানে সহযোগিতা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Correct'?",
        options: ["সঠিক", "ভুল", "সত্য", "মিথ্যা"],
        answer: "সঠিক",
        explanation: "'Correct' মানে সঠিক।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Courage'?",
        options: ["সাহস", "ভয়", "শক্তি", "দুর্বলতা"],
        answer: "সাহস",
        explanation: "'Courage' মানে সাহস।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Create'?",
        options: ["তৈরি করা", "ধ্বংস করা", "পরিবর্তন করা", "যোগ করা"],
        answer: "তৈরি করা",
        explanation: "'Create' মানে তৈরি করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Damage'?",
        options: ["ক্ষতি", "লাভ", "বৃদ্ধি", "হ্রাস"],
        answer: "ক্ষতি",
        explanation: "'Damage' মানে ক্ষতি।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Danger'?",
        options: ["বিপদ", "নিরাপত্তা", "ভয়", "সাহস"],
        answer: "বিপদ",
        explanation: "'Danger' মানে বিপদ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Decade'?",
        options: ["দশক", "বছর", "মাস", "দিন"],
        answer: "দশক",
        explanation: "'Decade' মানে দশক।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Declare'?",
        options: ["ঘোষণা", "লুকানো", "বলা", "শোনা"],
        answer: "ঘোষণা",
        explanation: "'Declare' মানে ঘোষণা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Defend'?",
        options: ["রক্ষা করা", "আক্রমণ করা", "ধ্বংস করা", "তৈরি করা"],
        answer: "রক্ষা করা",
        explanation: "'Defend' মানে রক্ষা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Deliver'?",
        options: ["সরবরাহ করা", "গ্রহণ করা", "প্রত্যাখ্যান করা", "চাওয়া"],
        answer: "সরবরাহ করা",
        explanation: "'Deliver' মানে সরবরাহ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Demand'?",
        options: ["চাহিদা", "সরবরাহ", "প্রস্তাব", "প্রশ্ন"],
        answer: "চাহিদা",
        explanation: "'Demand' মানে চাহিদা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Depend'?",
        options: ["নির্ভর করা", "স্বাধীন হওয়া", "কাজ করা", "খেলা করা"],
        answer: "নির্ভর করা",
        explanation: "'Depend' মানে নির্ভর করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Describe'?",
        options: ["বর্ণনা করা", "লুকানো", "বলা", "শোনা"],
        answer: "বর্ণনা করা",
        explanation: "'Describe' মানে বর্ণনা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Design'?",
        options: ["নকশা করা", "তৈরি করা", "ধ্বংস করা", "পরিবর্তন করা"],
        answer: "নকশা করা",
        explanation: "'Design' মানে নকশা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Destroy'?",
        options: ["ধ্বংস করা", "তৈরি করা", "গড়া", "ভাঙা"],
        answer: "ধ্বংস করা",
        explanation: "'Destroy' মানে ধ্বংস করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Develop'?",
        options: ["উন্নয়ন করা", "খারাপ করা", "স্থির রাখা", "পরিবর্তন করা"],
        answer: "উন্নয়ন করা",
        explanation: "'Develop' মানে উন্নয়ন করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Different'?",
        options: ["ভিন্ন", "একই", "অনুরূপ", "আলাদা"],
        answer: "ভিন্ন",
        explanation: "'Different' মানে ভিন্ন।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Direction'?",
        options: ["দিকনির্দেশনা", "পথ", "লক্ষ্য", "উদ্দেশ্য"],
        answer: "দিকনির্দেশনা",
        explanation: "'Direction' মানে দিকনির্দেশনা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Disappear'?",
        options: ["অদৃশ্য হওয়া", "দৃশ্যমান হওয়া", "লুকানো", "দেখা"],
        answer: "অদৃশ্য হওয়া",
        explanation: "'Disappear' মানে অদৃশ্য হওয়া।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Dislike'?",
        options: ["অপছন্দ", "পছন্দ", "ভালোবাসা", "ঘৃণা"],
        answer: "অপছন্দ",
        explanation: "'Dislike' মানে অপছন্দ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Distance'?",
        options: ["দূরত্ব", "নিকটত্ব", "লম্বা", "খাটো"],
        answer: "দূরত্ব",
        explanation: "'Distance' মানে দূরত্ব।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Divide'?",
        options: ["বিভক্ত করা", "যোগ করা", "গুণ করা", "ভাগ করা"],
        answer: "বিভক্ত করা",
        explanation: "'Divide' মানে বিভক্ত করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Education'?",
        options: ["শিক্ষা", "অশিক্ষা", "জ্ঞান", "তথ্য"],
        answer: "শিক্ষা",
        explanation: "'Education' মানে শিক্ষা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Effective'?",
        options: ["কার্যকর", "অকার্যকর", "শক্তিশালী", "দুর্বল"],
        answer: "কার্যকর",
        explanation: "'Effective' মানে কার্যকর।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Effort'?",
        options: ["প্রয়াস", "সহজ", "কঠিন", "কাজ"],
        answer: "প্রয়াস",
        explanation: "'Effort' মানে প্রয়াস।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Emotion'?",
        options: ["অনুভূতি", "চিন্তা", "জ্ঞান", "তথ্য"],
        answer: "অনুভূতি",
        explanation: "'Emotion' মানে অনুভূতি।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Empathy'?",
        options: ["সহানুভূতি", "সহানুভূতিহীনতা", "ভালোবাসা", "ঘৃণা"],
        answer: "সহানুভূতি",
        explanation: "'Empathy' মানে সহানুভূতি।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Employ'?",
        options: ["নিয়োগ করা", "বরখাস্ত করা", "কাজ করা", "খেলা করা"],
        answer: "নিয়োগ করা",
        explanation: "'Employ' মানে নিয়োগ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Encourage'?",
        options: ["উত্সাহিত করা", "নিরুৎসাহিত করা", "সাহায্য করা", "বাধা দেওয়া"],
        answer: "উত্সাহিত করা",
        explanation: "'Encourage' মানে উত্সাহিত করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Endure'?",
        options: ["সহ্য করা", "অসহ্য করা", "গ্রহণ করা", "প্রত্যাখ্যান করা"],
        answer: "সহ্য করা",
        explanation: "'Endure' মানে সহ্য করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Energy'?",
        options: ["শক্তি", "দুর্বলতা", "কাজ", "খেলা"],
        answer: "শক্তি",
        explanation: "'Energy' মানে শক্তি।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Engage'?",
        options: ["সম্পৃক্ত হওয়া", "বিচ্ছিন্ন হওয়া", "যোগ করা", "বাদ দেওয়া"],
        answer: "সম্পৃক্ত হওয়া",
        explanation: "'Engage' মানে সম্পৃক্ত হওয়া।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Enjoyment'?",
        options: ["আনন্দ", "দুঃখ", "সুখ", "কষ্ট"],
        answer: "আনন্দ",
        explanation: "'Enjoyment' মানে আনন্দ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Essential'?",
        options: ["প্রয়োজনীয়", "অপ্রয়োজনীয়", "গুরুত্বপূর্ণ", "সাধারণ"],
        answer: "প্রয়োজনীয়",
        explanation: "'Essential' মানে প্রয়োজনীয়।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Establish'?",
        options: ["প্রতিষ্ঠা করা", "ধ্বংস করা", "তৈরি করা", "ভাঙা"],
        answer: "প্রতিষ্ঠা করা",
        explanation: "'Establish' মানে প্রতিষ্ঠা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Event'?",
        options: ["ঘটনা", "সময়", "স্থান", "মানুষ"],
        answer: "ঘটনা",
        explanation: "'Event' মানে ঘটনা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Example'?",
        options: ["উদাহরণ", "নিয়ম", "আইন", "নীতি"],
        answer: "উদাহরণ",
        explanation: "'Example' মানে উদাহরণ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Exchange'?",
        options: ["বিনিময়", "গ্রহণ করা", "দেওয়া", "কেনা"],
        answer: "বিনিময়",
        explanation: "'Exchange' মানে বিনিময়।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Exercise'?",
        options: ["ব্যায়াম", "কাজ", "খেলা", "ঘুম"],
        answer: "ব্যায়াম",
        explanation: "'Exercise' মানে ব্যায়াম।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Experience'?",
        options: ["অভিজ্ঞতা", "অজ্ঞান", "জ্ঞান", "তথ্য"],
        answer: "অভিজ্ঞতা",
        explanation: "'Experience' মানে অভিজ্ঞতা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Explore'?",
        options: ["অন্বেষণ", "লুকানো", "দেখা", "জানা"],
        answer: "অন্বেষণ",
        explanation: "'Explore' মানে অন্বেষণ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Express'?",
        options: ["প্রকাশ করা", "লুকানো", "বলা", "শোনা"],
        answer: "প্রকাশ করা",
        explanation: "'Express' মানে প্রকাশ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Extend'?",
        options: ["বাড়ানো", "হ্রাস করা", "ছোট করা", "বড় করা"],
        answer: "বাড়ানো",
        explanation: "'Extend' মানে বাড়ানো।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Extreme'?",
        options: ["চরম", "সাধারণ", "মাঝারি", "বিশেষ"],
        answer: "চরম",
        explanation: "'Extreme' মানে চরম।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Familiar'?",
        options: ["পরিচিত", "অপরিচিত", "জানা", "অজানা"],
        answer: "পরিচিত",
        explanation: "'Familiar' মানে পরিচিত।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Famous'?",
        options: ["বিখ্যাত", "অপরিচিত", "সাধারণ", "বিশেষ"],
        answer: "বিখ্যাত",
        explanation: "'Famous' মানে বিখ্যাত।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Fearless'?",
        options: ["নির্ভীক", "ভীত", "সাহসী", "দুর্বল"],
        answer: "নির্ভীক",
        explanation: "'Fearless' মানে নির্ভীক।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Feature'?",
        options: ["বৈশিষ্ট্য", "সাধারণ", "বিশেষ", "অসাধারণ"],
        answer: "বৈশিষ্ট্য",
        explanation: "'Feature' মানে বৈশিষ্ট্য।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Feeling'?",
        options: ["অনুভূতি", "চিন্তা", "জ্ঞান", "তথ্য"],
        answer: "অনুভূতি",
        explanation: "'Feeling' মানে অনুভূতি।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Flexible'?",
        options: ["লচনীয়", "অনমনীয়", "শক্ত", "নরম"],
        answer: "লচনীয়",
        explanation: "'Flexible' মানে লচনীয়।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Follow'?",
        options: ["অনুসরণ করা", "নেতৃত্ব দেওয়া", "ছেড়ে যাওয়া", "আসা"],
        answer: "অনুসরণ করা",
        explanation: "'Follow' মানে অনুসরণ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Force'?",
        options: ["জোর", "দুর্বলতা", "শক্তি", "ভয়"],
        answer: "জোর",
        explanation: "'Force' মানে জোর।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Freedom'?",
        options: ["স্বাধীনতা", "পরাধীনতা", "মুক্তি", "বন্ধন"],
        answer: "স্বাধীনতা",
        explanation: "'Freedom' মানে স্বাধীনতা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Friendly'?",
        options: ["বন্ধুভাবাপন্ন", "শত্রুভাবাপন্ন", "দয়ালু", "নিষ্ঠুর"],
        answer: "বন্ধুভাবাপন্ন",
        explanation: "'Friendly' মানে বন্ধুভাবাপন্ন।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Function'?",
        options: ["কার্য", "অকার্য", "কাজ", "খেলা"],
        answer: "কার্য",
        explanation: "'Function' মানে কার্য।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Gather'?",
        options: ["সংগ্রহ করা", "ছড়িয়ে দেওয়া", "যোগ করা", "বাদ দেওয়া"],
        answer: "সংগ্রহ করা",
        explanation: "'Gather' মানে সংগ্রহ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Generous'?",
        options: ["উদার", "কৃপণ", "দয়ালু", "নিষ্ঠুর"],
        answer: "উদার",
        explanation: "'Generous' মানে উদার।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Global'?",
        options: ["বিশ্বব্যাপী", "স্থানীয়", "জাতীয়", "আন্তর্জাতিক"],
        answer: "বিশ্বব্যাপী",
        explanation: "'Global' মানে বিশ্বব্যাপী।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Grateful'?",
        options: ["কৃতজ্ঞ", "অকৃতজ্ঞ", "সুখী", "দুঃখী"],
        answer: "কৃতজ্ঞ",
        explanation: "'Grateful' মানে কৃতজ্ঞ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Habitual'?",
        options: ["অভ্যাসগত", "অস্বাভাবিক", "নিয়মিত", "অনিয়মিত"],
        answer: "অভ্যাসগত",
        explanation: "'Habitual' মানে অভ্যাসগত।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Handle'?",
        options: ["নিয়ন্ত্রণ করা", "ছেড়ে দেওয়া", "ধরা", "ফেলা"],
        answer: "নিয়ন্ত্রণ করা",
        explanation: "'Handle' মানে নিয়ন্ত্রণ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Happiness'?",
        options: ["সুখ", "দুঃখ", "আনন্দ", "কষ্ট"],
        answer: "সুখ",
        explanation: "'Happiness' মানে সুখ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Healthy'?",
        options: ["স্বাস্থ্যকর", "অস্বাস্থ্যকর", "শক্তিশালী", "দুর্বল"],
        answer: "স্বাস্থ্যকর",
        explanation: "'Healthy' মানে স্বাস্থ্যকর।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Helpful'?",
        options: ["সহায়ক", "অসহায়ক", "উপকারী", "ক্ষতিকারক"],
        answer: "সহায়ক",
        explanation: "'Helpful' মানে সহায়ক।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'History'?",
        options: ["ইতিহাস", "ভবিষ্যৎ", "বর্তমান", "সময়"],
        answer: "ইতিহাস",
        explanation: "'History' মানে ইতিহাস।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Hopeful'?",
        options: ["আশাবাদী", "নিরাশাবাদী", "সুখী", "দুঃখী"],
        answer: "আশাবাদী",
        explanation: "'Hopeful' মানে আশাবাদী।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Humor'?",
        options: ["রসিকতা", "গুরুত্বপূর্ণ", "সাধারণ", "বিশেষ"],
        answer: "রসিকতা",
        explanation: "'Humor' মানে রসিকতা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Idea'?",
        options: ["আইডিয়া", "চিন্তা", "জ্ঞান", "তথ্য"],
        answer: "আইডিয়া",
        explanation: "'Idea' মানে আইডিয়া।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Identify'?",
        options: ["চিহ্নিত করা", "লুকানো", "জানা", "ভুলে যাওয়া"],
        answer: "চিহ্নিত করা",
        explanation: "'Identify' মানে চিহ্নিত করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Ignore'?",
        options: ["উপেক্ষা করা", "মনোযোগ দেওয়া", "দেখা", "শোনা"],
        answer: "উপেক্ষা করা",
        explanation: "'Ignore' মানে উপেক্ষা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Imagine'?",
        options: ["কল্পনা করা", "বাস্তব", "চিন্তা", "স্বপ্ন"],
        answer: "কল্পনা করা",
        explanation: "'Imagine' মানে কল্পনা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Improve'?",
        options: ["উন্নতি", "খারাপ", "পরিবর্তন", "স্থির"],
        answer: "উন্নতি",
        explanation: "'Improve' মানে উন্নতি।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Inform'?",
        options: [" জানানো", "লুকানো", "বলা", "শোনা"],
        answer: " জানানো",
        explanation: "'Inform' মানে জানানো।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Inspire'?",
        options: ["অনুপ্রাণিত", "নিরুৎসাহিত", "সাহায্য", "বাধা"],
        answer: "অনুপ্রাণিত",
        explanation: "'Inspire' মানে অনুপ্রাণিত।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Instruction'?",
        options: ["নির্দেশনা", "প্রশ্ন", "উত্তর", "উপদেশ"],
        answer: "নির্দেশনা",
        explanation: "'Instruction' মানে নির্দেশনা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Insurance'?",
        options: ["বীমা", "ব্যাংক", "টাকা", "অর্থ"],
        answer: "বীমা",
        explanation: "'Insurance' মানে বীমা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Intention'?",
        options: ["উদ্দেশ্য", "কারণ", "ফলাফল", "পরিকল্পনা"],
        answer: "উদ্দেশ্য",
        explanation: "'Intention' মানে উদ্দেশ্য।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Introduce'?",
        options: ["পরিচয় করানো", "লুকানো", "বলা", "শোনা"],
        answer: "পরিচয় করানো",
        explanation: "'Introduce' মানে পরিচয় করানো।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Invent'?",
        options: ["আবিষ্কার করা", "ধ্বংস করা", "তৈরি করা", "ভাঙা"],
        answer: "আবিষ্কার করা",
        explanation: "'Invent' মানে আবিষ্কার করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Involve'?",
        options: ["জড়িত করা", "বিচ্ছিন্ন করা", "যোগ করা", "বাদ দেওয়া"],
        answer: "জড়িত করা",
        explanation: "'Involve' মানে জড়িত করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Journey'?",
        options: ["যাত্রা", "থাকা", "বসা", "ঘুম"],
        answer: "যাত্রা",
        explanation: "'Journey' মানে যাত্রা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Justice'?",
        options: ["ন্যায়বিচার", "অন্যায়", "আইন", "শাসন"],
        answer: "ন্যায়বিচার",
        explanation: "'Justice' মানে ন্যায়বিচার।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Knowledge'?",
        options: ["জ্ঞান", "অজ্ঞান", "শিক্ষা", "তথ্য"],
        answer: "জ্ঞান",
        explanation: "'Knowledge' মানে জ্ঞান।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Language'?",
        options: ["ভাষা", "শব্দ", "বাক্য", "বর্ণ"],
        answer: "ভাষা",
        explanation: "'Language' মানে ভাষা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Learn'?",
        options: ["শেখা", "ভুলে যাওয়া", "জানা", "পড়া"],
        answer: "শেখা",
        explanation: "'Learn' মানে শেখা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Legal'?",
        options: ["বৈধ", "অবৈধ", "আইন", "নিয়ম"],
        answer: "বৈধ",
        explanation: "'Legal' মানে বৈধ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Level'?",
        options: ["স্তর", "উচ্চতা", "গভীরতা", "চওড়া"],
        answer: "স্তর",
        explanation: "'Level' মানে স্তর।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Library'?",
        options: ["গ্রন্থাগার", "স্কুল", "কলেজ", "বিশ্ববিদ্যালয়"],
        answer: "গ্রন্থাগার",
        explanation: "'Library' মানে গ্রন্থাগার।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Limitless'?",
        options: ["সীমাহীন", "সীমিত", "বৃদ্ধি", "হ্রাস"],
        answer: "সীমাহীন",
        explanation: "'Limitless' মানে সীমাহীন।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Logic'?",
        options: ["যুক্তি", "অযুক্তি", "চিন্তা", "জ্ঞান"],
        answer: "যুক্তি",
        explanation: "'Logic' মানে যুক্তি।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Manage'?",
        options: ["পরিচালনা করা", "ছেড়ে দেওয়া", "নিয়ন্ত্রণ করা", "মুক্ত করা"],
        answer: "পরিচালনা করা",
        explanation: "'Manage' মানে পরিচালনা করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Meaning'?",
        options: ["অর্থ", "শব্দ", "বাক্য", "বর্ণ"],
        answer: "অর্থ",
        explanation: "'Meaning' মানে অর্থ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Measure'?",
        options: ["পরিমাপ", "গণনা", "যোগ করা", "বাদ দেওয়া"],
        answer: "পরিমাপ",
        explanation: "'Measure' মানে পরিমাপ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Memory'?",
        options: ["স্মৃতি", "ভুলে যাওয়া", "জানা", "শেখা"],
        answer: "স্মৃতি",
        explanation: "'Memory' মানে স্মৃতি।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Mental'?",
        options: ["মানসিক", "শারীরিক", "সুস্থ", "অসুস্থ"],
        answer: "মানসিক",
        explanation: "'Mental' মানে মানসিক।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Motive'?",
        options: ["প্রেরণা", "কারণ", "ফলাফল", "উদ্দেশ্য"],
        answer: "প্রেরণা",
        explanation: "'Motive' মানে প্রেরণা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Movement'?",
        options: ["চলাচল", "স্থির", "গতি", "শক্তি"],
        answer: "চলাচল",
        explanation: "'Movement' মানে চলাচল।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Necessary'?",
        options: ["প্রয়োজনীয়", "অপ্রয়োজনীয়", "গুরুত্বপূর্ণ", "সাধারণ"],
        answer: "প্রয়োজনীয়",
        explanation: "'Necessary' মানে প্রয়োজনীয়।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Negative'?",
        options: ["নেতিবাচক", "ইতিবাচক", "সঠিক", "ভুল"],
        answer: "নেতিবাচক",
        explanation: "'Negative' মানে নেতিবাচক।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Notice'?",
        options: ["খেয়াল করা", "উপেক্ষা করা", "দেখা", "শোনা"],
        answer: "খেয়াল করা",
        explanation: "'Notice' মানে খেয়াল করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Obey'?",
        options: ["মান্য করা", "অমান্য করা", "নিয়ন্ত্রণ করা", "মুক্ত করা"],
        answer: "মান্য করা",
        explanation: "'Obey' মানে মান্য করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Objective'?",
        options: ["উদ্দেশ্য", "কারণ", "ফলাফল", "পরিকল্পনা"],
        answer: "উদ্দেশ্য",
        explanation: "'Objective' মানে উদ্দেশ্য।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Observe'?",
        options: ["পর্যবেক্ষণ করা", "লুকানো", "দেখা", "শোনা"],
        answer: "পর্যবেক্ষণ করা",
        explanation: "'Observe' মানে পর্যবেক্ষণ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Obvious'?",
        options: ["স্পষ্ট", "অস্পষ্ট", "জানা", "অজানা"],
        answer: "স্পষ্ট",
        explanation: "'Obvious' মানে স্পষ্ট।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Operate'?",
        options: ["পরিচালনা", "থামানো", "শুরু করা", "শেষ করা"],
        answer: "পরিচালনা",
        explanation: "'Operate' মানে পরিচালনা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Opinion'?",
        options: ["মতামত", "তথ্য", "জ্ঞান", "চিন্তা"],
        answer: "মতামত",
        explanation: "'Opinion' মানে মতামত।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Opportunity'?",
        options: ["সুযোগ", "বাধা", "সমস্যা", "সমাধান"],
        answer: "সুযোগ",
        explanation: "'Opportunity' মানে সুযোগ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Organize'?",
        options: ["সংগঠিত করা", "অগোছালো করা", "তৈরি করা", "ধ্বংস করা"],
        answer: "সংগঠিত করা",
        explanation: "'Organize' মানে সংগঠিত করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Original'?",
        options: ["মূল", "নকল", "নতুন", "পুরানো"],
        answer: "মূল",
        explanation: "'Original' মানে মূল।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Participate'?",
        options: ["অংশগ্রহণ", "বাদ দেওয়া", "যোগ করা", "বিচ্ছিন্ন করা"],
        answer: "অংশগ্রহণ",
        explanation: "'Participate' মানে অংশগ্রহণ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Partner'?",
        options: ["সঙ্গী", "শত্রু", "বন্ধু", "সহকর্মী"],
        answer: "সঙ্গী",
        explanation: "'Partner' মানে সঙ্গী।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Passion'?",
        options: ["উদ্দীপনা", "নিষ্ক্রিয়তা", "আগ্রহ", "বিরক্তি"],
        answer: "উদ্দীপনা",
        explanation: "'Passion' মানে উদ্দীপনা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Peaceful'?",
        options: ["শান্তিপূর্ণ", "অশান্তিপূর্ণ", "সুখী", "দুঃখী"],
        answer: "শান্তিপূর্ণ",
        explanation: "'Peaceful' মানে শান্তিপূর্ণ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Perfect'?",
        options: ["নিখুঁত", "অনিখুঁত", "সঠিক", "ভুল"],
        answer: "নিখুঁত",
        explanation: "'Perfect' মানে নিখুঁত।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Performance'?",
        options: ["কর্মসম্পাদন", "কাজ", "খেলা", "ঘুম"],
        answer: "কর্মসম্পাদন",
        explanation: "'Performance' মানে কর্মসম্পাদন।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Permission'?",
        options: ["অনুমতি", "নিষেধ", "আদেশ", "অনুরোধ"],
        answer: "অনুমতি",
        explanation: "'Permission' মানে অনুমতি।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Personality'?",
        options: ["ব্যক্তিত্ব", "চরিত্র", "মানুষ", "জীবন"],
        answer: "ব্যক্তিত্ব",
        explanation: "'Personality' মানে ব্যক্তিত্ব।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Physical'?",
        options: ["শারীরিক", "মানসিক", "সুস্থ", "অসুস্থ"],
        answer: "শারীরিক",
        explanation: "'Physical' মানে শারীরিক।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Pleasure'?",
        options: ["আনন্দ", "দুঃখ", "সুখ", "কষ্ট"],
        answer: "আনন্দ",
        explanation: "'Pleasure' মানে আনন্দ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Popular'?",
        options: ["জনপ্রিয়", "অজনপ্রিয়", "বিখ্যাত", "অপরিচিত"],
        answer: "জনপ্রিয়",
        explanation: "'Popular' মানে জনপ্রিয়।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Position'?",
        options: ["অবস্থান", "স্থান", "সময়", "দিক"],
        answer: "অবস্থান",
        explanation: "'Position' মানে অবস্থান।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Possibility'?",
        options: ["সম্ভাবনা", "অসম্ভব", "নিশ্চিত", "অনিশ্চিত"],
        answer: "সম্ভাবনা",
        explanation: "'Possibility' মানে সম্ভাবনা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Potential'?",
        options: ["সম্ভাব্য", "অসম্ভাব্য", "শক্তিশালী", "দুর্বল"],
        answer: "সম্ভাব্য",
        explanation: "'Potential' মানে সম্ভাব্য।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Practice'?",
        options: ["অনুশীলন", "কাজ", "খেলা", "ঘুম"],
        answer: "অনুশীলন",
        explanation: "'Practice' মানে অনুশীলন।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Prepare'?",
        options: ["প্রস্তুতি", "অপ্রস্তুতি", "শুরু", "শেষ"],
        answer: "প্রস্তুতি",
        explanation: "'Prepare' মানে প্রস্তুতি।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Present'?",
        options: ["উপস্থিত", "অনুপস্থিত", "বর্তমান", "অতীত"],
        answer: "উপস্থিত",
        explanation: "'Present' মানে উপস্থিত।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Pressure'?",
        options: ["চাপ", "মুক্ত", "শক্তিশালী", "দুর্বল"],
        answer: "চাপ",
        explanation: "'Pressure' মানে চাপ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Prevent'?",
        options: ["প্রতিরোধ করা", "অনুমতি দেওয়া", "গ্রহণ করা", "প্রত্যাখ্যান করা"],
        answer: "প্রতিরোধ করা",
        explanation: "'Prevent' মানে প্রতিরোধ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Primary'?",
        options: ["প্রাথমিক", "মাধ্যমিক", "গুরুত্বপূর্ণ", "সাধারণ"],
        answer: "প্রাথমিক",
        explanation: "'Primary' মানে প্রাথমিক।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Principle'?",
        options: ["নীতি", "আইন", "নিয়ম", "উদ্দেশ্য"],
        answer: "নীতি",
        explanation: "'Principle' মানে নীতি।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Priority'?",
        options: ["অগ্রাধিকার", "সাধারণ", "গুরুত্বপূর্ণ", "অপ্রয়োজনীয়"],
        answer: "অগ্রাধিকার",
        explanation: "'Priority' মানে অগ্রাধিকার।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Process'?",
        options: ["প্রক্রিয়া", "কাজ", "খেলা", "ঘুম"],
        answer: "প্রক্রিয়া",
        explanation: "'Process' মানে প্রক্রিয়া।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Produce'?",
        options: ["উৎপাদন", "ধ্বংস", "তৈরি", "ভাঙা"],
        answer: "উৎপাদন",
        explanation: "'Produce' মানে উৎপাদন।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Progress'?",
        options: ["অগ্রগতি", "পশ্চাদগতি", "বৃদ্ধি", "হ্রাস"],
        answer: "অগ্রগতি",
        explanation: "'Progress' মানে অগ্রগতি।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Promise'?",
        options: ["প্রতিশ্রুতি", "মিথ্যা", "সত্য", "কথা"],
        answer: "প্রতিশ্রুতি",
        explanation: "'Promise' মানে প্রতিশ্রুতি।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Proper'?",
        options: ["যথাযথ", "ভুল", "সঠিক", "অসঠিক"],
        answer: "যথাযথ",
        explanation: "'Proper' মানে যথাযথ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Protection'?",
        options: ["সুরক্ষা", "আক্রমণ", "ধ্বংস", "তৈরি"],
        answer: "সুরক্ষা",
        explanation: "'Protection' মানে সুরক্ষা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Prove'?",
        options: ["প্রমাণ করা", "অপ্রমাণ করা", "সন্দেহ করা", "জানা"],
        answer: "প্রমাণ করা",
        explanation: "'Prove' মানে প্রমাণ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Quality'?",
        options: ["গুণমান", "পরিমাণ", "মান", "সংখ্যা"],
        answer: "গুণমান",
        explanation: "'Quality' মানে গুণমান।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Quantity'?",
        options: ["পরিমাণ", "গুণমান", "মান", "সংখ্যা"],
        answer: "পরিমাণ",
        explanation: "'Quantity' মানে পরিমাণ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Question'?",
        options: ["প্রশ্ন", "উত্তর", "বলা", "শোনা"],
        answer: "প্রশ্ন",
        explanation: "'Question' মানে প্রশ্ন।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Quiet'?",
        options: ["নিঃশব্দ", "শব্দ", "শান্ত", "কোলাহল"],
        answer: "নিঃশব্দ",
        explanation: "'Quiet' মানে নিঃশব্দ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Reaction'?",
        options: ["প্রতিক্রিয়া", "কারণ", "ফলাফল", "পরিকল্পনা"],
        answer: "প্রতিক্রিয়া",
        explanation: "'Reaction' মানে প্রতিক্রিয়া।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Realistic'?",
        options: ["বাস্তবসম্মত", "অবাস্তব", "সত্য", "মিথ্যা"],
        answer: "বাস্তবসম্মত",
        explanation: "'Realistic' মানে বাস্তবসম্মত।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Reason'?",
        options: ["কারণ", "ফলাফল", "উদ্দেশ্য", "পরিকল্পনা"],
        answer: "কারণ",
        explanation: "'Reason' মানে কারণ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Receive'?",
        options: ["গ্রহণ করা", "দেওয়া", "কেনা", "বিক্রি করা"],
        answer: "গ্রহণ করা",
        explanation: "'Receive' মানে গ্রহণ করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Recognize'?",
        options: ["স্বীকৃতি", "অস্বীকৃতি", "জানা", "ভুলে যাওয়া"],
        answer: "স্বীকৃতি",
        explanation: "'Recognize' মানে স্বীকৃতি।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Recovery'?",
        options: ["পুনরুদ্ধার", "ক্ষতি", "লাভ", "বৃদ্ধি"],
        answer: "পুনরুদ্ধার",
        explanation: "'Recovery' মানে পুনরুদ্ধার।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Reduce'?",
        options: ["হ্রাস করা", "বৃদ্ধি করা", "স্থির রাখা", "পরিবর্তন করা"],
        answer: "হ্রাস করা",
        explanation: "'Reduce' মানে হ্রাস করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Refuse'?",
        options: ["প্রত্যাখ্যান", "গ্রহণ", "অনুমতি", "নিষেধ"],
        answer: "প্রত্যাখ্যান",
        explanation: "'Refuse' মানে প্রত্যাখ্যান।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Relation'?",
        options: ["সম্পর্ক", "বিচ্ছিন্নতা", "বন্ধুত্ব", "শত্রুতা"],
        answer: "সম্পর্ক",
        explanation: "'Relation' মানে সম্পর্ক।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Relax'?",
        options: ["বিশ্রাম", "কাজ", "খেলা", "ঘুম"],
        answer: "বিশ্রাম",
        explanation: "'Relax' মানে বিশ্রাম।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Release'?",
        options: ["মুক্ত করা", "আটকানো", "ধরা", "ছেড়ে দেওয়া"],
        answer: "মুক্ত করা",
        explanation: "'Release' মানে মুক্ত করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Reliable'?",
        options: ["বিশ্বাসযোগ্য", "অবিশ্বাসযোগ্য", "সঠিক", "ভুল"],
        answer: "বিশ্বাসযোগ্য",
        explanation: "'Reliable' মানে বিশ্বাসযোগ্য।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Remark'?",
        options: ["মন্তব্য", "প্রশ্ন", "উত্তর", "বলা"],
        answer: "মন্তব্য",
        explanation: "'Remark' মানে মন্তব্য।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Remember'?",
        options: ["মনে রাখা", "ভুলে যাওয়া", "জানা", "শেখা"],
        answer: "মনে রাখা",
        explanation: "'Remember' মানে মনে রাখা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Remove'?",
        options: ["অপসারণ", "যোগ করা", "স্থাপন করা", "রাখা"],
        answer: "অপসারণ",
        explanation: "'Remove' মানে অপসারণ।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Repair'?",
        options: ["মেরামত", "ধ্বংস", "তৈরি", "ভাঙা"],
        answer: "মেরামত",
        explanation: "'Repair' মানে মেরামত।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Replace'?",
        options: ["প্রতিস্থাপন", "রাখা", "যোগ করা", "বাদ দেওয়া"],
        answer: "প্রতিস্থাপন",
        explanation: "'Replace' মানে প্রতিস্থাপন।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Reply'?",
        options: ["জবাব", "প্রশ্ন", "বলা", "শোনা"],
        answer: "জবাব",
        explanation: "'Reply' মানে জবাব।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Report'?",
        options: ["রিপোর্ট", "লুকানো", "বলা", "শোনা"],
        answer: "রিপোর্ট",
        explanation: "'Report' মানে রিপোর্ট।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Represent'?",
        options: ["প্রতিনিধিত্ব করা", "লুকানো", "বলা", "শোনা"],
        answer: "প্রতিনিধিত্ব করা",
        explanation: "'Represent' মানে প্রতিনিধিত্ব করা।"
    },
    {
        category: "Intermediate",
        difficulty: "medium",
        question: "What is the meaning of 'Require'?",
        options: ["প্রয়োজন", "অপ্রয়োজন", "চাওয়া", "দেওয়া"],
        answer: "প্রয়োজন",
        explanation: "'Require' মানে প্রয়োজন।"
    },
    {
        category: "Advanced",
        difficulty: "hard",
        question: "What is the meaning of 'Comprehensive'?",
        options: ["ব্যাপক", "সীমিত", "ছোট", "বড়"],
        answer: "ব্যাপক",
        explanation: "'Comprehensive' মানে ব্যাপক।"
    },
    {
        category: "Advanced",
        difficulty: "hard",
        question: "What is the meaning of 'Demonstrate'?",
        options: ["প্রদর্শন করা", "লুকানো", "বলা", "শোনা"],
        answer: "প্রদর্শন করা",
        explanation: "'Demonstrate' মানে প্রদর্শন করা।"
    },
    {
        category: "Advanced",
        difficulty: "hard",
        question: "What is the meaning of 'Efficient'?",
        options: ["দক্ষ", "অদক্ষ", "শক্তিশালী", "দুর্বল"],
        answer: "দক্ষ",
        explanation: "'Efficient' মানে দক্ষ।"
    },
    {
        category: "Advanced",
        difficulty: "hard",
        question: "What is the meaning of 'Fundamental'?",
        options: ["মৌলিক", "অতিরিক্ত", "সাধারণ", "বিশেষ"],
        answer: "মৌলিক",
        explanation: "'Fundamental' মানে মৌলিক।"
    },
    {
        category: "Advanced",
        difficulty: "hard",
        question: "What is the meaning of 'Implement'?",
        options: ["বাস্তবায়ন করা", "পরিকল্পনা করা", "শুরু করা", "শেষ করা"],
        answer: "বাস্তবায়ন করা",
        explanation: "'Implement' মানে বাস্তবায়ন করা।"
    }
];