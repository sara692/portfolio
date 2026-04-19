const projectsData = [
    {
        id: "ai-1",
        title: "Smart Travel AI Agent (ReAct Pattern)",
        titleAr: "وكيل السفر الذكي (ReAct Pattern)",
        category: "ai",
        points: [
            "Designed and evaluated a multi-step autonomous agent using LangGraph and Qwen2.5-72B",
            "Implemented ReAct reasoning loop (Reasoning + Action) with dynamic tool selection",
            "Analyzed agent trajectories to improve reasoning accuracy and tool usage decisions"
        ],
        pointsAr: [
            "تصميم وتقييم وكيل مستقل متعدد الخطوات باستخدام LangGraph و Qwen2.5-72B",
            "تنفيذ حلقة التفكير ReAct مع اختيار الأدوات ديناميكيًا",
            "تحليل مسارات الوكيل لتحسين دقة التفكير وقرارات استخدام الأدوات"
        ]
    },
    {
        id: "ai-2",
        title: "Self-Correcting Analytics Agent",
        titleAr: "وكيل تحليلات ذاتي التصحيح",
        category: "ai",
        points: [
            "Built an autonomous agent capable of detecting and correcting errors in generated Python code",
            "Implemented AST-based validation layer to ensure safe and accurate execution",
            "Tested edge cases and failure scenarios to enhance system robustness"
        ],
        pointsAr: [
            "بناء وكيل مستقل قادر على اكتشاف الأخطاء وتصحيحها في كود بايثون المولد",
            "تنفيذ طبقة تحقق تعتمد على AST لضمان التنفيذ الآمن والدقيق",
            "اختبار الحالات الطرفية وسيناريوهات الفشل لتعزيز متانة النظام"
        ]
    },
    {
        id: "ai-3",
        title: "Production-Grade Chat System with Memory",
        titleAr: "نظام محادثة جاهز للإنتاج بذاكرة",
        category: "ai",
        points: [
            "Developed conversational AI system with persistent memory using FastAPI and pgvector",
            "Implemented semantic retrieval for long-term context tracking",
            "Applied rolling summarization techniques for efficient multi-turn interactions"
        ],
        pointsAr: [
            "تطوير نظام ذكاء اصطناعي للمحادثات مع ذاكرة دائمة باستخدام FastAPI و pgvector",
            "تنفيذ الاسترجاع الدلالي لتتبع السياق طويل المدى",
            "تطبيق تقنيات التلخيص المتدحرج للتفاعلات الفعالة متعددة الجولات"
        ]
    },
    {
        id: "ai-4",
        title: "PDF Q&A Bot (RAG System)",
        titleAr: "روبوت سؤال وجواب لملفات PDF (نظام RAG)",
        category: "ai",
        points: [
            "Built document question-answering system using RAG architecture",
            "Enabled semantic understanding of unstructured PDF data",
            "Evaluated retrieval accuracy and response relevance using test queries"
        ],
        pointsAr: [
            "بناء نظام للإجابة على الأسئلة من المستندات باستخدام معمارية RAG",
            "تمكين الفهم الدلالي لبيانات PDF غير المهيكلة",
            "تقييم دقة الاسترجاع وملاءمة الاستجابة باستخدام استعلامات الاختبار"
        ]
    },
    {
        id: "ai-5",
        title: "AI Proposal Generator",
        titleAr: "مولد العروض بالذكاء الاصطناعي",
        category: "ai",
        points: [
            "Built a fully automated workflow using N8N integrating Webhooks, AI processing, and response handling",
            "Integrated Google Gemini (gemini-2.5-flash) to generate structured, high-quality proposals",
            "Developed a React-based dashboard (Lovable) for user input, proposal visualization, and PDF export"
        ],
        pointsAr: [
            "بناء مسار عمل مؤتمت بالكامل باستخدام N8N يدمج الـ Webhooks، ومعالجة الذكاء الاصطناعي، والتعامل مع الاستجابة",
            "دمج Google Gemini لتوليد عروض مصممة وعالية الجودة",
            "تطوير لوحة تحكم تعتمد على React (Lovable) لإدخال المستخدم، وعرض الاقتراحات، وتصدير PDF"
        ]
    },
    {
        id: "ai-6",
        title: "WhatsApp AI Agent",
        titleAr: "وكيل ذكاء اصطناعي لواتساب",
        category: "ai",
        points: [
            "An intelligent WhatsApp assistant powered by N8N and Google Gemini that understands text, voice, and images",
            "Can perform real-world actions like sending emails, scheduling events, and searching the web"
        ],
        pointsAr: [
            "مساعد واتساب ذكي مدعوم بـ N8N و Google Gemini يفهم النص والصوت والصور",
            "يمكنه أداء إجراءات واقعية مثل إرسال رسائل البريد الإلكتروني، وجدولة الأحداث، والبحث في الويب"
        ]
    },
    {
        id: "ml-1",
        title: "Housing Price Prediction (Ensemble Learning)",
        titleAr: "توقع أسعار الإسكان (التعلم الجماعي)",
        category: "ml",
        points: [
            "Developed regression model achieving R² score of 0.92",
            "Performed feature engineering and models evaluation"
        ],
        pointsAr: [
            "تطوير نموذج انحدار يحقق درجة R² تبلغ 0.92",
            "إجراء هندسة الميزات وتقييم النماذج"
        ]
    },
    {
        id: "ml-2",
        title: "Student Success Predictive Model",
        titleAr: "نموذج تنبؤي لنجاح الطلاب",
        category: "ml",
        points: [
            "Built end-to-end regression pipeline",
            "Evaluated model performance using multiple metrics"
        ],
        pointsAr: [
            "بناء مسار انحدار متكامل (من البداية إلى النهاية)",
            "تقييم أداء النموذج باستخدام مقاييس متعددة"
        ]
    },
    {
        id: "ml-3",
        title: "Neural Network Optimization (MNIST)",
        titleAr: "تحسين الشبكات العصبية (MNIST)",
        category: "ml",
        points: [
            "Conducted advanced analysis of deep learning models using MNIST, exploring prediction behavior, overfitting, and optimization techniques",
            "Implemented and compared optimizers (SGD, Adam, AdamW), regularization methods (Dropout, L2), and activation functions",
            "Analyzed learning dynamics using loss curves, early stopping, and batch size experiments"
        ],
        pointsAr: [
            "إجراء تحليل متقدم لنماذج التعلم العميق باستخدام MNIST، واستكشاف سلوك التنبؤ وتقنيات التحسين",
            "تنفيذ ومقارنة المحسنات (SGD, Adam, AdamW)، وطرق التنظيم (Dropout, L2)، ودوال التنشيط",
            "تحليل ديناميكيات التعلم باستخدام منحنيات الخسارة، والتوقف المبكر، وتجارب حجم الدفعة"
        ]
    },
    {
        id: "da-1",
        title: "Wordle Tweets Analysis",
        titleAr: "تحليل تغريدات Wordle",
        category: "data",
        points: [
            "Explores how players around the world solved Wordle puzzles, based on thousands of tweets shared publicly",
            "Studies performance trends, solving efficiency, and puzzle difficulty using Python and data analysis techniques"
        ],
        pointsAr: [
            "يستكشف كيف قام اللاعبون حول العالم بحل ألغاز Wordle، بناءً على آلاف التغريدات",
            "يدرس اتجاهات الأداء، وكفاءة الحل، وصعوبة اللغز باستخدام بايثون وتقنيات تحليل البيانات"
        ]
    },
    {
        id: "da-2",
        title: "Startups Expansion",
        titleAr: "توسع الشركات الناشئة",
        category: "data",
        points: [
            "Analyzes store expansion and performance across different states using Python (pandas, numpy, matplotlib, seaborn)",
            "Power BI for interactive dashboard visualization"
        ],
        pointsAr: [
            "يحلل توسع المتاجر والأداء عبر الولايات المختلفة باستخدام بايثون",
            "استخدام Power BI لتصور لوحة القيادة التفاعلية"
        ]
    },
    {
        id: "da-3",
        title: "MD Water Services Data Dashboard",
        titleAr: "لوحة بيانات خدمات المياه في MD",
        category: "data",
        points: [
            "Power BI dashboard providing in-depth analysis of water services projects",
            "Tracks status of water sources, improvement needs, costs, and project implementation across provinces",
            "Designed in two pages for seamless exploration"
        ],
        pointsAr: [
            "لوحة تحكم Power BI توفر تحليلًا متعمقًا لمشاريع خدمات المياه",
            "يتتبع حالة مصادر المياه، واحتياجات التحسين، والتكاليف، وتنفيذ المشاريع عبر المقاطعات",
            "مصمم في صفحتين للاستكشاف السلس"
        ]
    },
    {
        id: "da-4",
        title: "Airlines Flights Analysis Dashboard",
        titleAr: "لوحة تحليل رحلات شركات الطيران",
        category: "data",
        points: [
            "Analyzes a Flights Booking Dataset scraped from a popular booking website",
            "Contains structured, date-wise records of flight travel between major Indian cities"
        ],
        pointsAr: [
            "يحلل مجموعة بيانات حجز الرحلات المستخرجة من موقع حجز شهير",
            "يحتوي على سجلات منظمة زمنياً للسفر بالطائرة بين المدن الهندية الرئيسية"
        ]
    },
    {
        id: "da-5",
        title: "Coffee Sales Analysis – Vending Machine",
        titleAr: "تحليل مبيعات القهوة – آلة البيع",
        category: "data",
        points: [
            "Analyzes coffee sales data from a vending machine to uncover revenue patterns, customer purchasing habits, and sales trends over time",
            "Dataset was visualized using Google Sheets with interactive filters"
        ],
        pointsAr: [
            "يحلل بيانات مبيعات القهوة من آلة بيع للكشف عن أنماط الإيرادات، وعادات الشراء، واتجاهات المبيعات بمرور الوقت",
            "تم تصور مجموعة البيانات باستخدام جداول بيانات جوجل مع فلاتر تفاعلية"
        ]
    },
    {
        id: "da-6",
        title: "Used Car Database Analysis",
        titleAr: "تحليل قاعدة بيانات السيارات المستعملة",
        category: "data",
        points: [
            "Focuses on data cleaning, transformation, and exploratory analysis of a used car dataset using MySQL",
            "Includes database creation, handling missing data, categorizing mileage, and generating various insights such as price trends, popular models, and seller analysis"
        ],
        pointsAr: [
            "يركز على تنظيف البيانات، والتحويل، والتحليل الاستكشافي لمجموعة بيانات سيارات مستعملة باستخدام MySQL",
            "يتضمن إنشاء قاعدة بيانات، والتعامل مع البيانات المفقودة، وتصنيف المسافات، وإنشاء رؤى مختلفة مثل اتجاهات الأسعار، والنماذج الشائعة"
        ]
    }
];

const translations = {
    en: {
        modeDark: "Dark",
        modeLight: "Light",
        langToggle: "عربي",
        name: "Sara Ibrahim Mohamed Omran",
        title: "AI Engineer | LLMs • AI Agents • RAG Systems • AI Evaluation",
        location: "Giza, Egypt",
        summaryTitle: "Professional Summary",
        summaryText1: "AI Engineer specializing in Large Language Models (LLMs), AI Agents, and RAG systems, with strong experience in designing, evaluating, and optimizing multi-step autonomous workflows. Skilled in analyzing agent trajectories, identifying failure modes, and improving reasoning reliability through structured evaluation and debugging.",
        summaryText2: "Brings 3+ years of experience in telecom operations at Huawei, applying system-level thinking, root-cause analysis, and real-time troubleshooting to production environments. Passionate about building and refining intelligent systems that are reliable, safe, and scalable.",
        skillsTitle: "Technical Skills",
        skillAI: "AI & LLMs",
        skillAgents: "AI Agents & Orchestration",
        skillEval: "AI Evaluation & Safety",
        skillML: "Machine Learning & Data Science",
        skillBackend: "Backend & Systems",
        projectsTitle: "Projects",
        filterAll: "All",
        filterAI: "AI Agents & LLMs",
        filterML: "Machine & Deep Learning",
        filterData: "Data Analysis & BI",
        expTitle: "Professional Experience",
        exp1Title: "RAN Back Office Engineer",
        exp1Task1: "Applied data-driven troubleshooting to improve system reliability and uptime",
        exp1Task2: "Performed root-cause analysis for complex system failures",
        exp2Title: "RAN Front Office Engineer",
        exp2Task1: "Monitored network systems and performed initial fault diagnosis",
        exp2Task2: "Supported incident resolution and escalation processes",
        eduTitle: "Education",
        eduDegree: "Bachelor of Engineering in Electronics & Communications",
        eduUni: "Cairo University | 2016 – 2021",
        eduProj: "Graduation Project: Excellent",
        eduGrade: "Overall Grade: Good",
        certTitle: "Training & Certifications",
        cert1: "Generative & Agentic AI Program – DEPI (ongoing)",
        cert2: "LLM Engineering, RAG, & AI Agents Masterclass (2026)",
        cert3: "Data Science Program – ALX (2025 – 2026)",
        cert4: "Data Analysis (SQL, Power BI, Google Sheets) – ALX(2025)",
        footerText: "© 2026 Sara Ibrahim Mohamed Omran. All Rights Reserved."
    },
    ar: {
        modeDark: "مظلم",
        modeLight: "مضيء",
        langToggle: "English",
        name: "سارة إبراهيم محمد عمران",
        title: "مهندسة ذكاء اصطناعي | النماذج اللغوية الكبيرة • وكلاء الذكاء الاصطناعي • أنظمة RAG • تقييم الذكاء الاصطناعي",
        location: "الجيزة، مصر",
        summaryTitle: "الملخص المهني",
        summaryText1: "مهندسة ذكاء اصطناعي متخصصة في النماذج اللغوية الكبيرة (LLMs)، ووكلاء الذكاء الاصطناعي، وأنظمة RAG، مع خبرة قوية في تصميم، وتقييم، وتحسين مسارات العمل المستقلة متعددة الخطوات. ماهرة في تحليل مسارات الوكيل، وتحديد أنماط الفشل، وتحسين موثوقية التفكير من خلال التقييم المنظم والتنقيح.",
        summaryText2: "لديها أكثر من 3 سنوات من الخبرة في عمليات الاتصالات في هواوي، حيث طبقت التفكير المنظومي، وتحليل الأسباب الجذرية، واستكشاف الأخطاء وإصلاحها في الوقت الفعلي في بيئات الإنتاج. شغوفة ببناء وتحسين الأنظمة الذكية لتكون موثوقة وآمنة وقابلة للتطوير.",
        skillsTitle: "المهارات التقنية",
        skillAI: "الذكاء الاصطناعي والنماذج اللغوية الكبيرة",
        skillAgents: "وكلاء الذكاء الاصطناعي والتنسيق",
        skillEval: "تقييم الذكاء الاصطناعي والأمان",
        skillML: "تعلم الآلة وعلم البيانات",
        skillBackend: "الأنظمة والخلفية (Backend)",
        projectsTitle: "المشاريع",
        filterAll: "الكل",
        filterAI: "وكلاء الذكاء الاصطناعي والنماذج اللغوية",
        filterML: "التعلم الآلي والتعلم العميق",
        filterData: "تحليل البيانات وذكاء الأعمال",
        expTitle: "الخبرة المهنية",
        exp1Title: "مهندس المكتب الخلفي لشبكات الراديو (RAN Back Office)",
        exp1Task1: "تطبيق استكشاف الأخطاء وإصلاحها المستندة إلى البيانات لتحسين موثوقية النظام ووقت التشغيل",
        exp1Task2: "إجراء تحليل الأسباب الجذرية لفشل الأنظمة المعقدة",
        exp2Title: "مهندس المكتب الأمامي لشبكات الراديو (RAN Front Office)",
        exp2Task1: "مراقبة أنظمة الشبكة وإجراء التشخيص الأولي للأعطال",
        exp2Task2: "دعم عمليات حل الحوادث والتصعيد",
        eduTitle: "التعليم",
        eduDegree: "بكالوريوس الهندسة في الإلكترونيات والاتصالات",
        eduUni: "جامعة القاهرة | 2016 – 2021",
        eduProj: "مشروع التخرج: ممتاز",
        eduGrade: "التقدير العام: جيد",
        certTitle: "التدريب والشهادات",
        cert1: "برنامج الذكاء الاصطناعي التوليدي والوكيلي – DEPI (مستمر)",
        cert2: "هندسة النماذج اللغوية، RAG، ووكلاء الذكاء الاصطناعي (2026)",
        cert3: "برنامج علوم البيانات – ALX (2025 – 2026)",
        cert4: "تحليل البيانات (SQL، Power BI، جداول Google) – ALX (2025)",
        footerText: "© 2026 سارة إبراهيم محمد عمران. جميع الحقوق محفوظة."
    }
};
