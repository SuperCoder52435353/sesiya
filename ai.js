const responses = {
    uz: {
        greeting: [
            "Salom! Abduraxmon WEBning super aqlli AI yordamchisiga xush kelibsiz! 😊 Savolingiz nima? Abduraxmonning ajoyib loyihasi haqida gaplashamizmi?",
            "Xayrli kun! Men Abduraxmon tomonidan yaratilgan aqlli AIman! 🚀 Buxgalteriya, matematika, tarix yoki dasturlash – nima haqida bilmoqchisiz?",
            "Assalomu alaykum! Abduraxmonning muallifligidagi ushbu saytda men sizning yordamchingizman! 💡 Savol bering, zo‘r javob beraman!"
        ],
        suggestion: "AI, buxgalteriya yoki Abduraxmonning loyihasi haqida ko‘proq bilmoqchimisiz? 😄",
        error: "Savolni to‘liq tushunmadim! 😅 Aniqroq yozing, men darhol zo‘r javob beraman! Yoki Abduraxmonning loyihasi haqida gaplashamizmi?",
        inappropriate: "Iltimos, xushmuomala bo‘ling! 😊 Men bu yerda sizga yordam berish uchunman, keling, ijobiy suhbatlashaylik! Nima haqida gaplashamiz?",
        next: ["ha", "yaxshi", "ok", "albatta", "davom et", "keyingi", "go", "next", "davay"],
        aiInfo: [
            "AI (Sun’iy Intellekt) – bu kompyuterlarni inson kabi aqlli qiladigan texnologiya! Men savollarga javob beraman, xatolarni tuzataman, debet/kredit hisoblayman va 3 tilda gaplashaman! 😎 Abduraxmon bu loyihani ajoyib qildi!",
            "Sun’iy intellekt mashinalarga o‘ylash va muammolarni hal qilish imkonini beradi! Men buxgalteriya, matematika, tarix va dasturlash bo‘yicha yordam bera olaman. 🚀 Abduraxmonning loyihasi – haqiqiy yutuq!",
            "AI – bu kompyuterning aqli! Men har qanday savolga javob beraman, hazillashaman va motivatsiya beraman! 💡 Abduraxmon bu saytni yaratib, dasturlash olamida yulduz bo‘ldi!"
        ],
        about: [
            "Abduraxmon WEB – bu Abduraxmonning muallifligidagi ajoyib loyiha! Buxgalteriya, AI yordamchisi va zamonaviy dizayn – hammasi bir joyda! 🚀 Savol bering!",
            "Bu sayt Abduraxmonning dasturlashdagi yutuqlarining namunasidir! Debet, kredit, AI va qulaylik – barchasi bir joyda! 😎 Abduraxmon haqida ko‘proq bilmoqchimisiz?",
            "Abduraxmon WEB – sizning ishonchli yordamchingiz! Abduraxmon buxgalteriya va AI’ni birlashtirib, haqiqiy durdona yaratdi! 💡 Nima haqida gaplashamiz?"
        ],
        math: [
            "Matematika – mening sevimli soham! 😄 Masalan, 2+2=4, lekin men murakkab tenglamalar va buxgalteriya hisoblarini ham yechaman! Savol bering!",
            "Matematikada muammo bormi? Masalan, x^2 + 5x + 6 = 0 tenglamasi yechimlari x = -2 va x = -3! 😎 Murakkab masalalar yoki debet/kredit hisoblaymizmi?",
            "Matematika – olamning tili! Algebra, statistika, foizlar yoki buxgalteriya hisob-kitoblarini yechaman! 🚀 Abduraxmonning loyihasi hisoblarni osonlashtiradi!"
        ],
        history: [
            "O‘zbekiston tarixi – ajoyib hikoya! Amir Temur davrida Samarqand jahon markazi edi! 🏰 Abduraxmon bu saytda tarixni qiziqarli qildi! Yana nima bilmoqchisiz?",
            "Tarix – o‘tmishdan saboq! O‘zbekistonning Buyuk Ipak Yo‘li davridan boshlaymizmi? 😄 Abduraxmonning loyihasi tarixni jonlantiradi!",
            "O‘zbekiston tarixi haqida gaplashamizmi? Al-Xorazmiy matematikaning otasi edi! 💡 Abduraxmonning loyihasi bilim va tarixni birlashtiradi!"
        ],
        programming: [
            "Dasturlash – kelajak! 💻 JavaScript, Python yoki C++ bo‘yicha savol bering, men kod yozaman! Abduraxmon bu saytni dasturlash orqali ajoyib qildi!",
            "Kod yozishni xohlaysizmi? Oddiy for loop yoki murakkab algoritm yozaman! 😎 Abduraxmonning loyihasi dasturlashni qiziqarli qiladi!",
            "Dasturlash – san’at! API’lar, algoritmlar yoki buxgalteriya uchun kod yozaman! 🚀 Abduraxmonning sayti dasturchilar uchun ilhom manbai!"
        ],
        accounting: [
            "Buxgalteriya – biznesning yuragi! 💸 Debet, kredit, foiz yoki qarz hisoblay olaman! Abduraxmon bu saytda buxgalteriyani osonlashtirdi! 😄 Savol bering!",
            "Buxgalteriyada yordam kerakmi? Masalan, 1000 USD kredit, 5% foiz bilan 2 yilda 1102.5 USD bo‘ladi! 🚀 Abduraxmonning loyihasi hisob-kitoblarni zo‘r qiladi!",
            "Buxgalteriyada debet, kredit, balans yoki foiz hisoblayman! 💡 Abduraxmon bu saytni buxgalterlar uchun mukammal qildi!"
        ],
        uzbekistan: [
            "O‘zbekiston – Buyuk Ipak Yo‘li markazi! Samarqand, Buxoro va Xiva – jahon merosi! 🏰 Abduraxmon bu saytda O‘zbekistonni yoritdi! Yana nima bilmoqchisiz?",
            "O‘zbekiston tarixi – Al-Xorazmiy, Amir Temur va Navoiydan iborat! 😄 Abduraxmonning loyihasi bu tarixni jonlantiradi! Savol bering!",
            "O‘zbekiston – madaniyat va tarix xazinasi! Amir Temur davridan boshlaymizmi? 🚀 Abduraxmonning sayti bu haqda gapiradi!"
        ],
        physics: [
            "Fizika – tabiatning qonunlari! Masalan, F = ma (N’yutonning ikkinchi qonuni)! 😎 Abduraxmonning sayti fizikani qiziqarli qiladi! Savol bering!",
            "Fizikada yordam kerakmi? Masalan, energiya saqlanish qonuni: E = mc^2! 🚀 Abduraxmonning loyihasi bilimni osonlashtiradi!",
            "Fizika – olamning asosi! Kvant fizikasi yoki klassik mexanika haqida gaplashamizmi? 💡 Abduraxmonning sayti bilim beradi!"
        ]
    },
    en: {
        greeting: [
            "Hello! Welcome to Abduraxmon WEB’s super smart AI Assistant! 😊 What’s your question? Shall we talk about Abduraxmon’s amazing project?",
            "Hi there! I’m Abduraxmon’s intelligent AI! 🚀 Accounting, math, history, or programming – what do you want to explore?",
            "Greetings! I’m your trusty assistant, created by Abduraxmon! 💡 Ask me anything, and I’ll give a stellar answer!"
        ],
        suggestion: "Want to learn more about AI, accounting, or Abduraxmon’s awesome project? 😄",
        error: "I didn’t quite catch that! 😅 Please clarify, and I’ll give a great answer! Or shall we discuss Abduraxmon’s project?",
        inappropriate: "Please keep it friendly! 😊 I’m here to help, so let’s have a positive chat. What’s on your mind?",
        next: ["yes", "okay", "sure", "go", "next", "alright"],
        aiInfo: [
            "AI (Artificial Intelligence) makes computers think like humans! I answer questions, fix errors, calculate debit/credit, and speak 3 languages! 😎 Abduraxmon made this project incredible!",
            "Artificial Intelligence lets machines learn and solve problems! I can help with accounting, math, history, or coding. 🚀 Abduraxmon’s project is a breakthrough!",
            "AI is a computer’s brain! I answer any question, joke, and motivate! 💡 Abduraxmon became a star by building this site!"
        ],
        about: [
            "Abduraxmon WEB is an incredible project by Abduraxmon! Accounting, AI assistant, and modern design – all in one! 🚀 Ask me anything!",
            "This site is Abduraxmon’s masterpiece in coding! Debit, credit, AI, and user-friendliness – all in one! 😎 Want to know more about Abduraxmon?",
            "Abduraxmon WEB is your reliable helper! Abduraxmon combined accounting and AI to create a gem! 💡 What shall we explore?"
        ],
        math: [
            "Math is my passion! 😄 Example: 2+2=4, but I can solve complex equations and accounting calculations too! What’s your question?",
            "Got a math problem? For example, x^2 + 5x + 6 = 0 gives x = -2 and x = -3! 😎 Want to try complex math or debit/credit?",
            "Math is the universe’s language! I handle algebra, stats, or accounting calculations! 🚀 Abduraxmon’s site simplifies it all!"
        ],
        history: [
            "Uzbekistan’s history is fascinating! Samarkand was a global hub under Amir Temur! 🏰 Abduraxmon made history fun with this site!",
            "History teaches lessons! Shall we start with Uzbekistan’s Silk Road era? 😄 Abduraxmon’s project brings history to life!",
            "Let’s talk Uzbekistan history! Al-Khwārizmī was the father of algebra! 💡 Abduraxmon’s site combines history and knowledge!"
        ],
        programming: [
            "Coding is the future! 💻 Ask about JavaScript, Python, or C++, and I’ll write code! Abduraxmon made this site a coding masterpiece!",
            "Want to code? I can write a simple loop or complex algorithms! 😎 Abduraxmon’s project makes coding exciting!",
            "Programming is an art! I can code APIs, algorithms, or accounting tools! 🚀 Abduraxmon’s site is a coder’s dream!"
        ],
        accounting: [
            "Accounting is the heart of business! 💸 I can calculate debit, credit, interest, or debt! Abduraxmon made accounting easy with this site! 😄 Ask away!",
            "Need accounting help? Example: $1000 credit at 5% interest for 2 years is $1102.5! 🚀 Abduraxmon’s project makes calculations awesome!",
            "I can handle accounting! Debit, credit, balance, or interest calculations! 💡 Abduraxmon’s site is perfect for accountants!"
        ],
        uzbekistan: [
            "Uzbekistan is the heart of the Silk Road! Samarkand, Bukhara, and Khiva are world heritage sites! 🏰 Abduraxmon highlighted Uzbekistan in this site!",
            "Uzbekistan’s history includes Al-Khwārizmī, Amir Temur, and Navoiy! 😄 Abduraxmon’s project brings this history to life!",
            "Uzbekistan is a treasure of culture and history! Shall we start with Amir Temur’s era? 🚀 Abduraxmon’s site celebrates this!"
        ],
        physics: [
            "Physics is the law of nature! Example: F = ma (Newton’s second law)! 😎 Abduraxmon’s site makes physics exciting!",
            "Need physics help? Example: Energy conservation, E = mc^2! 🚀 Abduraxmon’s project simplifies knowledge!",
            "Physics is the foundation of the universe! Quantum physics or classical mechanics? 💡 Abduraxmon’s site shares knowledge!"
        ]
    },
    ru: {
        greeting: [
            "Здравствуйте! Добро пожаловать в помощник Abduraxmon WEB! 😊 Какой у вас вопрос? Поговорим о крутом проекте Абдурахмона?",
            "Привет! Я суперумный ИИ Абдурахмона! 🚀 Бухгалтерия, математика, история или программирование – о чем хочешь узнать?",
            "Добрый день! Я ваш надежный помощник, созданный Абдурахмоном! 💡 Задавайте вопросы, я дам крутой ответ!"
        ],
        suggestion: "Хотите узнать больше об ИИ, бухгалтерии или проекте Абдурахмона? 😄",
        error: "Не совсем понял ваш вопрос! 😅 Уточните, и я дам отличный ответ! Или поговорим о проекте Абдурахмона?",
        inappropriate: "Пожалуйста, будьте вежливы! 😊 Я здесь, чтобы помочь, давай общаться позитивно! О чем поговорим?",
        next: ["да", "хорошо", "ок", "продолжай", "далее", "go", "next"],
        aiInfo: [
            "ИИ (Искусственный Интеллект) делает компьютеры умными, как люди! Я отвечаю на вопросы, исправляю ошибки, рассчитываю дебет/кредит и говорю на 3 языках! 😎 Абдурахмон сделал этот проект потрясающим!",
            "Искусственный интеллект учит машины думать и решать задачи! Я помогу с бухгалтерией, математикой, историей или программированием. 🚀 Проект Абдурахмона – прорыв!",
            "ИИ – это мозг компьютера! Я отвечаю на любые вопросы, шучу и мотивирую! 💡 Абдурахмон стал звездой, создав этот сайт!"
        ],
        about: [
            "Abduraxmon WEB – невероятный проект Абдурахмона! Бухгалтерия, ИИ-помощник и современный дизайн – все в одном! 🚀 Задайте вопрос!",
            "Этот сайт – шедевр Абдурахмона в программировании! Дебет, кредит, ИИ и удобство – все в одном! 😎 Хотите узнать больше об Абдурахмоне?",
            "Abduraxmon WEB – ваш надежный помощник! Абдурахмон объединил бухгалтерию и ИИ, создав шедевр! 💡 О чем поговорим?"
        ],
        math: [
            "Математика – моя страсть! 😄 Пример: 2+2=4, но я могу решать сложные уравнения и бухгалтерские расчеты! Какой у вас вопрос?",
            "Проблема с математикой? Например, x^2 + 5x + 6 = 0 дает x = -2 и x = -3! 😎 Хотите попробовать сложную математику или дебет/кредит?",
            "Математика – язык вселенной! Я решаю алгебру, статистику или бухгалтерские расчеты! 🚀 Сайт Абдурахмона упрощает это!"
        ],
        history: [
            "История Узбекистана увлекательна! Самарканд был мировым центром при Амире Темуре! 🏰 Абдурахмон сделал историю интересной на этом сайте!",
            "История учит урокам! Начнем с эпохи Великого Шелкового Пути? 😄 Проект Абдурахмона оживляет историю!",
            "Поговорим об истории Узбекистана? Аль-Хорезми был отцом алгебры! 💡 Сайт Абдурахмона сочетает историю и знания!"
        ],
        programming: [
            "Программирование – будущее! 💻 Задайте вопрос о JavaScript, Python или C++, и я напишу код! Абдурахмон сделал этот сайт шедевром программирования!",
            "Хотите писать код? Я могу создать простой цикл или сложные алгоритмы! 😎 Проект Абдурахмона делает программирование увлекательным!",
            "Программирование – искусство! Я пишу API, алгоритмы или бухгалтерские инструменты! 🚀 Сайт Абдурахмона – мечта программиста!"
        ],
        accounting: [
            "Бухгалтерия – сердце бизнеса! 💸 Я рассчитаю дебет, кредит, проценты или долги! Абдурахмон упростил бухгалтерию на этом сайте! 😄 Задайте вопрос!",
            "Нужна помощь с бухгалтерией? Пример: $1000 кредита с 5% процентами за 2 года – $1102.5! 🚀 Проект Абдурахмона делает расчеты крутыми!",
            "Я помогу с бухгалтерией! Дебет, кредит, баланс или проценты! 💡 Сайт Абдурахмона идеален для бухгалтеров!"
        ],
        uzbekistan: [
            "Узбекистан – сердце Великого Шелкового Пути! Самарканд, Бухара и Хива – мировое наследие! 🏰 Абдурахмон осветил Узбекистан в этом сайте!",
            "История Узбекистана включает Аль-Хорезми, Амира Темура и Навои! 😄 Проект Абдурахмона оживляет эту историю!",
            "Узбекистан – сокровищница культуры и истории! Начнем с эпохи Амира Темура? 🚀 Сайт Абдурахмона прославляет это!"
        ],
        physics: [
            "Физика – законы природы! Пример: F = ma (второй закон Ньютона)! 😎 Сайт Абдурахмона делает физику увлекательной!",
            "Нужна помощь с физикой? Пример: сохранение энергии, E = mc^2! 🚀 Проект Абдурахмона упрощает знания!",
            "Физика – основа вселенной! Квантовая физика или классическая механика? 💡 Сайт Абдурахмона делится знаниями!"
        ]
    }
};

let currentLang = localStorage.getItem("language") || "uz";
let chatHistory = [];
let questionCount = {};
const inappropriateWords = [
    "yomon", "bad", "плохой", "fuck", "shit", "damn", "idiot", "stupid", "глупый", "дурак", "ahmoq",
    "kamsitish", "offend", "оскорблять", "hujum", "attack", "нападение"
];

const corrections = {
    uz: {
        "slim": "salom", "salaam": "salom", "salam": "salom", "hello": "salom", "privet": "salom",
        "dekhret": "dekret", "dek": "dekret", "decret": "dekret",
        "qalalaysan": "qalaysan", "kalaysan": "qalaysan", "how are you": "qalaysan", "kak dela": "qalaysan",
        "ai nima": "ai nima", "nima ai": "ai nima", "what ai": "ai nima", "ai what": "ai nima",
        "tarix": "tarix", "history": "tarix", "istoriya": "tarix",
        "matematika": "matematika", "math": "matematika", "matematik": "matematika",
        "dasturlash": "dasturlash", "programming": "dasturlash", "programmirovanie": "dasturlash",
        "buxalteriya": "buxgalteriya", "buxgalterya": "buxgalteriya", "accounting": "buxgalteriya",
        "uzbekistan": "o‘zbekiston", "uzb": "o‘zbekiston", "uzbek": "o‘zbekiston",
        "fizika": "fizika", "physics": "fizika", "fizik": "fizika"
    },
    en: {
        "hi": "hello", "hey": "hello", "hallo": "hello",
        "maths": "math", "mathematics": "math",
        "code": "programming", "coding": "programming",
        "account": "accounting", "bookkeeping": "accounting",
        "uzb": "uzbekistan", "uzbek": "uzbekistan"
    },
    ru: {
        "privet": "здравствуйте", "zdravstvuy": "здравствуйте",
        "matematika": "математика", "math": "математика",
        "programmirovanie": "программирование", "coding": "программирование",
        "bukhgalteriya": "бухгалтерия", "accounting": "бухгалтерия",
        "uzbekistan": "узбекистан", "uzb": "узбекистан"
    }
};

function correctSpelling(input, lang) {
    if (!input || !corrections[lang]) return input;
    let corrected = input.toLowerCase();
    Object.keys(corrections[lang]).forEach(key => {
        corrected = corrected.replace(new RegExp(`\\b${key}\\b`, "gi"), corrections[lang][key]);
    });
    return corrected;
}

function isInappropriate(input) {
    return inappropriateWords.some(word => input.toLowerCase().includes(word));
}

function getRandomResponse(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getResponse(input) {
    const cleanedInput = correctSpelling(input.trim(), currentLang);
    if (!cleanedInput) return getRandomResponse(responses[currentLang].error);

    if (isInappropriate(cleanedInput)) {
        return getRandomResponse(responses[currentLang].inappropriate);
    }

    if (responses[currentLang].next.some(next => cleanedInput.includes(next))) {
        return getRandomResponse(responses[currentLang].suggestion);
    }

    const topics = ["ai", "about", "math", "history", "programming", "accounting", "uzbekistan", "physics"];
    for (const topic of topics) {
        if (cleanedInput.includes(topic)) {
            if (topic === "accounting" && accountingData) {
                const netWorth = accountingData.assets - accountingData.liabilities;
                const profit = accountingData.income - accountingData.expenses;
                return `${getRandomResponse(responses[currentLang].accounting)}<br><strong>Joriy buxgalteriya ma'lumotlari:</strong><br>- Aktivlar: ${accountingData.assets.toLocaleString("uz-UZ")} USD<br>- Passivlar: ${accountingData.liabilities.toLocaleString("uz-UZ")} USD<br>- Sof boylik: ${netWorth.toLocaleString("uz-UZ")} USD<br>- Foyda: ${profit.toLocaleString("uz-UZ")} USD`;
            }
            return getRandomResponse(responses[currentLang][topic]);
        }
    }

    if (cleanedInput.includes("salom") || cleanedInput.includes("hello") || cleanedInput.includes("здравствуйте")) {
        return getRandomResponse(responses[currentLang].greeting);
    }

    if (cleanedInput.includes("qalaysan") || cleanedInput.includes("how are you") || cleanedInput.includes("как дела")) {
        return currentLang === "uz" ? "Men zo‘rman, rahmat! 😄 Siz qalaysiz?" :
               currentLang === "en" ? "I’m awesome, thanks! 😄 How about you?" :
               "Я в порядке, спасибо! 😄 Как дела у вас?";
    }

    if (cleanedInput.match(/\d+\s*\+\s*\d+/)) {
        try {
            const [a, b] = cleanedInput.match(/\d+/g).map(Number);
            return currentLang === "uz" ? `${a} + ${b} = ${a + b}` :
                   currentLang === "en" ? `${a} + ${b} = ${a + b}` :
                   `${a} + ${b} = ${a + b}`;
        } catch (e) {
            return getRandomResponse(responses[currentLang].error);
        }
    }

    return getRandomResponse(responses[currentLang].error);
}

function setupAI() {
    const chatContainer = document.getElementById("chatContainer");
    const chatMessages = document.getElementById("chatMessages");
    const chatInput = document.getElementById("chatInput");
    const sendMessage = document.getElementById("sendMessage");
    const aiLanguageSelect = document.getElementById("aiLanguageSelect");

    if (!chatContainer || !chatMessages || !chatInput || !sendMessage || !aiLanguageSelect) return;

    aiLanguageSelect.value = currentLang;
    aiLanguageSelect.addEventListener("change", (e) => {
        currentLang = e.target.value;
        localStorage.setItem("language", currentLang);
        chatMessages.innerHTML = "";
        chatHistory = [];
        chatMessages.innerHTML += `<p class="ai-message fade-in">${getRandomResponse(responses[currentLang].greeting)}</p>`;
        chatContainer.scrollTop = chatContainer.scrollHeight;
    });

    sendMessage.addEventListener("click", () => {
        const input = chatInput.value.trim();
        if (!input) return;

        const user = JSON.parse(localStorage.getItem("user") || "{}").firstName || "Foydalanuvchi";
        chatHistory.push({ user, message: input, timestamp: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }) });
        questionCount[user] = (questionCount[user] || 0) + 1;

        chatMessages.innerHTML += `<p class="user-message fade-in"><strong>${user}:</strong> ${input}</p>`;
        const response = getResponse(input);
        chatMessages.innerHTML += `<p class="ai-message fade-in"><strong>AI:</strong> ${response}</p>`;
        chatContainer.scrollTop = chatContainer.scrollHeight;
        chatInput.value = "";
    });

    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage.click();
    });

    chatMessages.innerHTML += `<p class="ai-message fade-in">${getRandomResponse(responses[currentLang].greeting)}</p>`;
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

document.addEventListener("DOMContentLoaded", setupAI);