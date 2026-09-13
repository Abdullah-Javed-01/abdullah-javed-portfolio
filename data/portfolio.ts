export type ProjectCategory = "AI / GenAI" | "Machine Learning" | "Backend" | "Computer Vision" | "Data Analytics" | "Robotics";
export interface ProjectImage { src: string; alt: string; source?: string }
export interface ProjectVideo { src: string; caption: string; poster?: string }
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  categories: ProjectCategory[];
  discipline: string;
  description: string;
  context: string;
  highlights: string[];
  outcome: string;
  metric?: { value: string; label: string };
  stack: string[];
  github?: string;
  demo?: string;
  image?: ProjectImage;
  video?: ProjectVideo;
  featured: boolean;
  spotlight?: boolean;
  academic?: boolean;
  organization?: string;
  year?: string;
  visualLabel?: string;
  visual: "rag" | "backend" | "talent" | "scam" | "vision" | "document" | "churn" | "analytics" | "mri" | "robot";
}
export interface Experience {
  organization: string;
  initials: string;
  role: string;
  dates: string;
  mode: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  result?: string;
}
export interface Credential { title: string; issuer: string; date?: string; url?: string }
export interface SkillGroup { title: string; icon: "code" | "brain" | "sparkles" | "scan" | "server" | "chart" | "layers"; items: string[] }

// Personal facts and shared copy. Edit this file for routine content updates.

export const portfolio = {
  "name": "Abdullah Javed",
  "initials": "AJ",
  "location": "Lahore, Pakistan",
  "email": "work.abdullah.aj@gmail.com",
  "github": "https://github.com/Abdullah-Javed-01",
  "linkedin": "https://www.linkedin.com/in/abdullah-javed-id01/",
  "headline": "BS Robotics Student | AI/ML | Backend Development | Data Analytics & Data Science",
  "statement": "I build practical systems across AI/ML, backend development, data science, analytics, and robotics — turning ideas into working, evaluated solutions.",
  "description": "Portfolio of Abdullah Javed, a BS Robotics student building practical systems across AI/ML, backend development, data science, RAG, computer vision, document AI, analytics, and robotics.",
  "resume": {
    "enabled": false,
    "path": "/Abdullah-Javed-Resume.pdf"
  },
  "about": [
    "I’m a BS Robotics student at Superior University Lahore, building across AI/ML, backend development, data science, and analytics through internships, fellowships, and applied projects.",
    "My work ranges from RAG assistants and computer-vision pipelines to FastAPI/PostgreSQL backends, document extraction, and Power BI dashboards. I enjoy taking a practical problem from idea to implementation, evaluating the result, and improving it with evidence."
  ],
  "education": [
    {
      "degree": "BS Robotics",
      "institution": "Superior University Lahore",
      "dates": "Sep 2024 – Expected Jun 2028",
      "detail": "3.59 / 4.00 CGPA · after 4 semesters"
    },
    {
      "degree": "Intermediate in Computer Science (ICS) — Physics",
      "institution": "Punjab Group of Colleges",
      "dates": "2022 – 2024"
    }
  ],
  "contact": "I’m open to internships, early-career technical opportunities, collaborations, and interesting projects."
} as const;

export const navigation = [
  {
    "id": "home",
    "label": "Home"
  },
  {
    "id": "about",
    "label": "About"
  },
  {
    "id": "experience",
    "label": "Experience"
  },
  {
    "id": "projects",
    "label": "Projects"
  },
  {
    "id": "skills",
    "label": "Skills"
  },
  {
    "id": "credentials",
    "label": "Credentials"
  },
  {
    "id": "achievements",
    "label": "Achievements"
  },
  {
    "id": "contact",
    "label": "Contact"
  }
];

// current: true also populates the Currently cards in About.

export const experiences: Experience[] = [
  {
    "organization": "EncoderX",
    "initials": "EX",
    "role": "AI/ML Intern",
    "dates": "Sep 2026 – Present",
    "mode": "Remote",
    "current": true,
    "summary": "Selected for the AI/ML track of a four-week remote internship program.",
    "highlights": [
      "Currently working on practical AI/ML assignments and project-based technical tasks."
    ]
  },
  {
    "organization": "Skill Sprint",
    "initials": "SS",
    "role": "Operations Associate",
    "dates": "Oct 2025 – Present",
    "mode": "Full-time · Hybrid · Lahore, Pakistan",
    "current": true,
    "summary": "Support workshop and event operations, from coordination and registrations to participant communication.",
    "highlights": [
      "Coordinate scheduling, collaboration management, marketing execution, and cross-team operations."
    ]
  },
  {
    "organization": "Superior ACM Society",
    "initials": "AC",
    "role": "Marketing Head",
    "dates": "May 2026 – Present",
    "mode": "Hybrid · Lahore, Pakistan",
    "current": true,
    "summary": "Lead marketing and promotion for society events, workshops, collaborations, and student initiatives.",
    "highlights": [
      "Coordinate campaign planning, communication, content, outreach, and cross-team execution."
    ]
  },
  {
    "organization": "Khizex",
    "initials": "KH",
    "role": "Data Science Intern",
    "dates": "Aug 2026 – Sep 2026",
    "mode": "Remote · 6 weeks",
    "summary": "Completed 7 evaluated deliverables across machine learning, statistical analysis, computer vision, OCR/NLP, evaluation, and deployment.",
    "highlights": [
      "Projects included ScamSleuth, DataPulse, ChurnSignal, Credit Card Fraud Detector, Computer Vision Edge Deployment, and Automated Document Extraction.",
      "Received an official Letter of Recommendation and appreciation for Outstanding Data Science Modeling & Statistical Excellence."
    ],
    "result": "89 / 100 · Excellent (A)"
  },
  {
    "organization": "FlyRank AI",
    "initials": "FR",
    "role": "Back-End AI Engineering Intern",
    "dates": "Jul 2026 – Sep 2026",
    "mode": "Remote",
    "summary": "Built backend and applied-AI systems with FastAPI, PostgreSQL, Docker, authentication, LLM integrations, and background jobs.",
    "highlights": [
      "Completed Backend AI Engineering and AI Fluency tracks, including web scraping and automated report generation.",
      "Built the LLM Usage Metering & Billing Service with multi-tenant tracking, quotas, cost calculation, authentication, Stripe-compatible test billing, idempotency, and durable jobs.",
      "Received an official recommendation for Backend Engineering and Applied AI Systems."
    ]
  },
  {
    "organization": "INNOVIAST IT Solutions and Services",
    "initials": "IN",
    "role": "AI Chatbot Developer Intern",
    "dates": "Jun 2026 – Aug 2026",
    "mode": "Remote",
    "summary": "Built five applied AI applications spanning chatbots, local LLMs, RAG, prompt engineering, résumé/job analysis, and full-stack AI development.",
    "highlights": [
      "Applications: Student Helpdesk Bot, AI Content Generation Studio, PromptForge, KnowledgeVault, and ApplyWise.",
      "Improved KnowledgeVault’s defined 20-case evaluation from 85% to 100% through retrieval improvements, guardrails, evaluation, feedback, and analytics."
    ]
  },
  {
    "organization": "TEYZIX CORE",
    "initials": "TC",
    "role": "Data Analyst Intern",
    "dates": "Jun 2026 – Jul 2026",
    "mode": "Remote",
    "summary": "Built analytics and machine-learning projects using Python, Pandas, Power BI, Power Query, DAX, Scikit-learn, SHAP, and Streamlit.",
    "highlights": [
      "Projects: Retail Sales Analysis, Smart Public Transport Analytics Dashboard, and Customer Churn Prediction Dashboard.",
      "Received an official Letter of Recommendation."
    ]
  }
];

export const fellowship = {
  "organization": "ACM UET Lahore",
  "program": "AI/ML Fellowship Program ’26",
  "role": "AI/ML Fellow",
  "dates": "Jul 2026 – Aug 2026",
  "summary": "Completed practical machine-learning work and a collaborative final project: Spam Message Detector.",
  "stack": [
    "Python",
    "TF-IDF",
    "Multinomial Naive Bayes",
    "Logistic Regression",
    "Streamlit"
  ],
  "results": [
    {
      "value": "98.55%",
      "label": "Accuracy"
    },
    {
      "value": "93.75%",
      "label": "Spam recall"
    },
    {
      "value": "94.12%",
      "label": "Spam F1"
    }
  ],
  "note": "Final Logistic Regression results · Certificate received Sep 2026"
};

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "AI / GenAI",
  "Machine Learning",
  "Backend",
  "Computer Vision",
  "Data Analytics",
  "Robotics"
];

// One record per project. featured controls placement; spotlight enlarges the two flagship cards.
// Optional URLs are omitted until a real destination is verified.

export const projects: Project[] = [
  {
    "id": "knowledgevault",
    "image": {
      "src": "/projects/knowledgevault.webp",
      "alt": "Real KnowledgeVault conversation UI showing a grounded answer and expanded document source reference.",
      "source": "https://github.com/Abdullah-Javed-01/KnowledgeVault-InnoViast/blob/main/screenshots/02_grounded_answer_sources.png"
    },
    "title": "KnowledgeVault",
    "subtitle": "Multi-Document RAG Assistant",
    "categories": [
      "AI / GenAI"
    ],
    "discipline": "Generative AI · RAG",
    "visual": "rag",
    "featured": true,
    "description": "Local document question answering with grounded answers and traceable sources.",
    "context": "Make multiple documents searchable through a local RAG assistant that connects each answer to supporting evidence.",
    "highlights": [
      "Multi-PDF ingestion with page metadata, local nomic-embed-text embeddings, and ChromaDB storage.",
      "Hybrid semantic and lexical retrieval with heading-aware reranking and section-aware evidence selection.",
      "Local Qwen 2.5 3B generation, source references, prompt-injection checks, feedback, analytics, and Markdown export."
    ],
    "outcome": "The defined 20-case evaluation improved from 85% to 100%; this is a bounded evaluation result, not a guarantee on unseen documents.",
    "metric": {
      "value": "85% → 100%",
      "label": "Defined 20-case evaluation"
    },
    "stack": [
      "Python",
      "LangChain",
      "ChromaDB",
      "Ollama",
      "Streamlit",
      "Qwen 2.5 3B",
      "nomic-embed-text",
      "RAG"
    ],
    "github": "https://github.com/Abdullah-Javed-01/KnowledgeVault-InnoViast",
    "spotlight": true,
    "year": "2026",
    "organization": "INNOVIAST"
  },
  {
    "id": "billing-service",
    "title": "LLM Usage Metering",
    "subtitle": "& Billing Service",
    "categories": [
      "Backend"
    ],
    "discipline": "Backend · Applied AI",
    "visual": "backend",
    "visualLabel": "USAGE / QUOTAS / TEST BILLING",
    "featured": true,
    "description": "A multi-tenant backend for usage tracking, quota enforcement, and test billing workflows.",
    "context": "Connect simulated LLM usage events to tenant quotas and calculated costs. The capstone demonstrates billing semantics using mock/test fixtures.",
    "highlights": [
      "Tenant-scoped idempotency, request fingerprint checks, and transaction-bound quota enforcement.",
      "Integer micro-unit pricing, monthly usage rollups, signed test webhooks, and webhook replay deduplication.",
      "A separate PostgreSQL-backed usage-audit worker with bounded retries and terminal-failure logging."
    ],
    "outcome": "Completed a backend capstone for metering, quotas, and subscription synchronization. Token counts are simulated; live payments and external model calls are outside its scope.",
    "metric": {
      "value": "Multi-tenant",
      "label": "Idempotent usage metering"
    },
    "stack": [
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Alembic",
      "Python"
    ],
    "github": "https://github.com/Abdullah-Javed-01/flyrank-capstone-metering-billing",
    "spotlight": true,
    "year": "2026",
    "organization": "FlyRank AI"
  },
  {
    "id": "talent-review",
    "title": "AI Talent Review Copilot",
    "subtitle": "Evidence-first recruitment review",
    "categories": [
      "AI / GenAI"
    ],
    "discipline": "Applied AI",
    "visual": "talent",
    "description": "Structured candidate evidence and role-specific scoring, with final decisions kept human-controlled.",
    "context": "A recruitment review prototype designed to help review an internship applicant pool of around 10,000 applications. This describes the pool size; the system is not claimed to have processed every application.",
    "highlights": [
      "Normalizes CSV/XLSX form exports, parses text-based PDF résumés, and preserves source provenance.",
      "Deterministic evidence extraction and separate role-specific rubrics for ML/AI, Data Science, Data Engineering, and DevOps.",
      "Separates technical evidence from operational fit, with manual-review fallback and human-controlled decisions."
    ],
    "outcome": "Built a local review prototype with 30 synthetic demo profiles. The public repository does not establish processing or benchmarking of the full 10,000-application pool.",
    "stack": [
      "Python",
      "Streamlit",
      "Pandas",
      "Pydantic",
      "pypdf"
    ],
    "github": "https://github.com/Abdullah-Javed-01/AI-Talent-Review-Copilot",
    "spotlight": false,
    "featured": true,
    "year": "2026"
  },
  {
    "id": "scamsleuth",
    "image": {
      "src": "/projects/scamsleuth.webp",
      "alt": "Final-test confusion matrix graphic with Safe and Scam classes.",
      "source": "https://github.com/Abdullah-Javed-01/ScamSleuth/blob/main/reports/figures/confusion_matrix.png"
    },
    "title": "ScamSleuth",
    "subtitle": "Recruitment Scam Detection",
    "categories": [
      "Machine Learning"
    ],
    "discipline": "Machine Learning · NLP",
    "visual": "scam",
    "description": "Explainable classification of recruitment-related text into scam and safe messages.",
    "context": "Classify recruitment-related text on a synthetic 600-example benchmark while separating related template clusters across data splits.",
    "highlights": [
      "Logistic Regression with TF-IDF lexical features and 11 behavioral signals.",
      "Grouped cross-validation and a validation-selected decision threshold of 0.31; final evaluation uses 90 held-out examples.",
      "Final accuracy: 92.22%; F1: 92.63%; ROC-AUC: 0.9753; PR-AUC: 0.9838."
    ],
    "outcome": "Reported results apply to the frozen synthetic benchmark. Coefficient explanations and a separate adversarial stress test document error patterns and limits.",
    "metric": {
      "value": "92.63%",
      "label": "F1 · 90-example synthetic test set"
    },
    "stack": [
      "Python",
      "Scikit-learn",
      "Logistic Regression",
      "TF-IDF",
      "NLP"
    ],
    "github": "https://github.com/Abdullah-Javed-01/ScamSleuth",
    "spotlight": false,
    "featured": true,
    "year": "2026",
    "organization": "Khizex"
  },
  {
    "id": "cv-edge",
    "image": {
      "src": "/projects/cv-edge.svg",
      "alt": "Original SVG scatter chart comparing accuracy and model size for baseline, pruned, and quantized model variants.",
      "source": "https://github.com/Abdullah-Javed-01/KHIZEX-Week5-CV-Edge-Deployment/blob/main/results/accuracy_vs_size.svg"
    },
    "title": "Computer Vision",
    "subtitle": "Edge Deployment",
    "categories": [
      "Computer Vision",
      "Machine Learning"
    ],
    "discipline": "Computer Vision",
    "visual": "vision",
    "description": "Pruning and INT8 quantization experiments for an image classifier in a CPU-only edge simulation.",
    "context": "Compare accuracy, model size, and measured CPU latency for an MLP classifier on the Scikit-learn Digits dataset.",
    "highlights": [
      "Compared FP32, L1-pruned, dynamic INT8, and combined model variants on a fixed 450-image test set.",
      "The selected INT8 model reduced saved model size by approximately 74.67% while retaining 98.67% accuracy.",
      "Benchmarked PyTorch/TorchScript CPU inference; no physical edge-device or ONNX-runtime result is claimed."
    ],
    "outcome": "Selected dynamic INT8 as the best candidate for the stated simulation constraints, preserving baseline accuracy with a smaller model.",
    "metric": {
      "value": "74.67%",
      "label": "Approx. model-size reduction"
    },
    "stack": [
      "PyTorch",
      "Python",
      "Scikit-learn",
      "TorchScript",
      "Quantization",
      "Pruning"
    ],
    "github": "https://github.com/Abdullah-Javed-01/KHIZEX-Week5-CV-Edge-Deployment",
    "spotlight": false,
    "featured": true,
    "year": "2026",
    "organization": "Khizex"
  },
  {
    "id": "document-extraction",
    "image": {
      "src": "/projects/document-extraction.svg",
      "alt": "Original SVG bar chart comparing raw and processed OCR confidence across C01–C08.",
      "source": "https://github.com/Abdullah-Javed-01/KHIZEX-Week6-Document-Extraction/blob/main/results/ocr_confidence_plot.svg"
    },
    "title": "Automated Document Extraction",
    "subtitle": "OCR + NLP",
    "categories": [
      "AI / GenAI",
      "Computer Vision"
    ],
    "discipline": "Document AI · OCR / NLP",
    "visual": "document",
    "description": "A Tesseract OCR and rule-based NLP pipeline for scanned-document processing and structured extraction.",
    "context": "Evaluate document preprocessing, section-aware extraction, and summarization on eight synthetic, single-column legal service agreements.",
    "highlights": [
      "OpenCV deskewing, denoising, illumination normalization, and binarization before Tesseract OCR.",
      "Section segmentation and typed patterns extract six fields; generic extractive and field-aware summaries are compared.",
      "Macro extraction F1: 0.979; mean OCR WER improved from 0.138 to 0.088 on the included evaluation set."
    ],
    "outcome": "Improved OCR and field extraction on the synthetic evaluation set. Unusual wording, OCR substitutions, and complex layouts remain limitations.",
    "metric": {
      "value": "0.979",
      "label": "Macro extraction F1 · 8 synthetic documents"
    },
    "stack": [
      "Python",
      "Tesseract OCR",
      "NLP",
      "OpenCV",
      "Document AI"
    ],
    "github": "https://github.com/Abdullah-Javed-01/KHIZEX-Week6-Document-Extraction",
    "spotlight": false,
    "featured": true,
    "year": "2026",
    "organization": "Khizex"
  },
  {
    "id": "customer-churn",
    "image": {
      "src": "/projects/customer-churn.webp",
      "alt": "Horizontal bar chart of the churn model's top ten feature importances.",
      "source": "https://github.com/Abdullah-Javed-01/customer-churn-prediction-dashboard/blob/main/outputs/charts/feature_importance.png"
    },
    "title": "Customer Churn",
    "subtitle": "Prediction Dashboard",
    "categories": [
      "Machine Learning",
      "Data Analytics"
    ],
    "discipline": "Data Science · Analytics",
    "visual": "churn",
    "description": "Telco churn modeling and a Streamlit dashboard with model comparison, segmentation, and SHAP analysis.",
    "context": "Explore customer churn using the IBM Telco Customer Churn dataset and compare interpretable model results.",
    "highlights": [
      "Data preparation, feature engineering, and a stratified train/test split on the IBM Telco dataset.",
      "Logistic Regression and Random Forest comparison; Random Forest SHAP explanations and customer segmentation.",
      "Logistic Regression accuracy: 80.91%; ROC-AUC: 0.8462."
    ],
    "outcome": "Combined model evaluation and a Streamlit analysis dashboard. The results describe the recorded dataset and do not establish a measured reduction in customer churn.",
    "metric": {
      "value": "0.8462",
      "label": "Best ROC-AUC"
    },
    "stack": [
      "Python",
      "Scikit-learn",
      "SHAP",
      "Pandas",
      "Streamlit"
    ],
    "github": "https://github.com/Abdullah-Javed-01/customer-churn-prediction-dashboard",
    "spotlight": false,
    "featured": true,
    "year": "2026",
    "organization": "TEYZIX CORE"
  },
  {
    "id": "public-transport",
    "image": {
      "src": "/projects/public-transport.webp",
      "alt": "Real Power BI executive dashboard showing transport KPIs, revenue by route, passenger trend, delays, and trip status.",
      "source": "https://github.com/Abdullah-Javed-01/Smart-Public-Transport-Analytics-Dashboard/blob/main/dashboard/Page%201.png"
    },
    "title": "Smart Public Transport",
    "subtitle": "Analytics Dashboard",
    "categories": [
      "Data Analytics"
    ],
    "discipline": "Data Analytics · Business Intelligence",
    "visual": "analytics",
    "description": "A three-page Power BI view of passenger demand, revenue, routes, and operational performance.",
    "context": "Explore passenger demand and operations using a synthetic Pakistan public transport dataset.",
    "highlights": [
      "Python/Pandas cleaning, feature preparation, and KPI calculation.",
      "Power BI pages for Executive Summary, Route Performance, and Operations Analysis.",
      "Power Query and DAX support interactive views of revenue, passengers, delays, occupancy, fuel consumption, and trip status."
    ],
    "outcome": "Created a three-page Power BI dashboard and supporting analysis artifacts for the synthetic transport scenario.",
    "stack": [
      "Power BI",
      "Power Query",
      "DAX",
      "Python",
      "Data Analytics"
    ],
    "github": "https://github.com/Abdullah-Javed-01/Smart-Public-Transport-Analytics-Dashboard",
    "spotlight": false,
    "featured": true,
    "year": "2026",
    "organization": "TEYZIX CORE"
  },
  {
    "id": "brain-tumor",
    "title": "Brain Tumor Classification",
    "subtitle": "Academic MRI classification",
    "categories": [
      "Computer Vision",
      "Machine Learning"
    ],
    "discipline": "Computer Vision · Deep Learning",
    "visual": "mri",
    "description": "An academic deep-learning project exploring brain MRI image classification.",
    "context": "Explore image preprocessing, transfer learning, model training, and validation in an academic MRI-classification workflow.",
    "highlights": [
      "Image preprocessing and augmentation in the training workflow.",
      "Transfer-learning training, validation, and evaluation code.",
      "A local Streamlit image-upload interface for a separately generated model artifact."
    ],
    "outcome": "Completed as academic computer-vision work. No clinical performance, clinical deployment, or unverified accuracy is presented.",
    "stack": [
      "Python",
      "Deep Learning",
      "Computer Vision",
      "Transfer Learning"
    ],
    "github": "https://github.com/Abdullah-Javed-01/Brain-Tumor-Classification-Project",
    "spotlight": false,
    "featured": true,
    "academic": true
  },
  {
    "id": "thor",
    "title": "THOR",
    "subtitle": "Sumo Combat Robot",
    "categories": [
      "Robotics"
    ],
    "discipline": "Robotics · Embedded Systems",
    "visual": "robot",

    "image": {
      "src": "/projects/thor.jpeg",
      "alt": "THOR, the Bluetooth-controlled sumo combat robot built for competition."
    },
    "video": {
      "src": "/projects/thor.mp4",
      "poster": "/projects/thor.jpeg",
      "caption": "THOR competing in the Sumo War category at Taakra 2025."
    },

    "description": "A solo-designed, Bluetooth-controlled robot built for sumo-style combat competitions.",
    "context": "Independently design and build a competition robot, from assembly and wiring to programming and operation.",
    "highlights": [
      "Solo design, assembly, wiring, programming, and operation.",
      "Bluetooth control and embedded C++."
    ],
    "outcome": "Runner-Up in Sumo War at Taakra 2025.",
    "metric": {
      "value": "Runner-Up",
      "label": "Sumo War · Taakra 2025"
    },
    "stack": [
      "Robotics",
      "C++",
      "Bluetooth Control",
      "Embedded Systems",
      "Problem Solving"
    ],
    "spotlight": false,
    "featured": true,
    "year": "2025"
  },
  {
    "id": "applywise",
    "title": "ApplyWise AI",
    "subtitle": "Résumé and job-description comparison",
    "categories": [
      "AI / GenAI"
    ],
    "discipline": "Applied AI",
    "description": "Groq-assisted document extraction and transparent required/preferred skill matching.",
    "context": "Help a job seeker compare a text-based PDF résumé with a pasted job description while reviewing the underlying evidence.",
    "highlights": [
      "Uses pypdf and Groq’s Llama 3.3 70B model for structured résumé and job extraction.",
      "Deterministic Python normalization and weighted matching separate required and preferred skills.",
      "Experience and education remain side-by-side comparisons; optional feedback and input/API error handling are implemented."
    ],
    "outcome": "Created an application-support tool with documented manual workflow tests. Scores estimate documented technical-skill overlap and do not predict hiring outcomes.",
    "stack": [
      "Python",
      "Streamlit",
      "Groq API",
      "pypdf",
      "Llama 3.3 70B"
    ],
    "featured": false,
    "visual": "talent",
    "github": "https://github.com/Abdullah-Javed-01/ApplyWise-InnoViast",
    "organization": "INNOVIAST",
    "year": "2026",
    "image": {
      "src": "/projects/applywise.webp",
      "alt": "ApplyWise interface comparing résumé evidence with job requirements.",
      "source": "https://github.com/Abdullah-Javed-01/ApplyWise-InnoViast/blob/main/docs/screenshots/testing/TC01%20%E2%80%94%20AI%20%26%20Machine%20Learning%20Engineer.png"
    }
  },
  {
    "id": "promptforge",
    "title": "PromptForge",
    "subtitle": "Structured prompt engineering",
    "categories": [
      "AI / GenAI"
    ],
    "discipline": "Generative AI",
    "description": "Turns short requests into structured prompts with validation, a repair pass, and local saving.",
    "context": "Help users express role, task, context, constraints, and output requirements in reusable prompts.",
    "highlights": [
      "React interface and Node.js/Express endpoints analyze and structure the request.",
      "Local Ollama generation with Gemma 3 1B, JSON validation, and one automatic repair pass.",
      "Browser-local prompt saving, editing, copying, and text export."
    ],
    "outcome": "Built a local prompt-generation workflow with inspectable validation feedback; the displayed quality score is a heuristic, not a benchmark.",
    "stack": [
      "React",
      "Node.js",
      "Express",
      "Ollama",
      "Gemma 3 1B"
    ],
    "featured": false,
    "visual": "rag",
    "github": "https://github.com/Abdullah-Javed-01/PromptForge-InnoViast",
    "organization": "INNOVIAST",
    "year": "2026",
    "image": {
      "src": "/projects/promptforge.webp",
      "alt": "PromptForge showing a generated structured prompt and validation feedback.",
      "source": "https://github.com/Abdullah-Javed-01/PromptForge-InnoViast/blob/main/PromptForge-InnoViast/screenshots/Prompt%20Generated.png"
    }
  },
  {
    "id": "student-helpdesk",
    "title": "Student Helpdesk Bot",
    "subtitle": "Student-services assistant",
    "categories": [
      "AI / GenAI"
    ],
    "discipline": "Generative AI",
    "description": "A local student-services chatbot with conversation history and an out-of-scope fallback.",
    "context": "Explore a conversational interface for common admissions, fees, scholarships, and campus-service questions.",
    "highlights": [
      "Streamlit chat interface with quick questions, session conversation history, and New Chat.",
      "Uses Llama 3.2 through Ollama’s OpenAI-compatible local endpoint.",
      "Keyword scope checks and a student-services system prompt guide responses; it has no university-specific retrieval database."
    ],
    "outcome": "Built a local helpdesk prototype. Answers depend on the model and prompt rather than a verified university knowledge base.",
    "stack": [
      "Python",
      "Streamlit",
      "Ollama",
      "Llama 3.2",
      "OpenAI SDK"
    ],
    "featured": false,
    "visual": "rag",
    "github": "https://github.com/Abdullah-Javed-01/StudentHelpdeskBot-InnoViast",
    "organization": "INNOVIAST",
    "year": "2026",
    "image": {
      "src": "/projects/student-helpdesk.webp",
      "alt": "Student Helpdesk Bot chat interface with quick student-services questions.",
      "source": "https://github.com/Abdullah-Javed-01/StudentHelpdeskBot-InnoViast/blob/main/Screenshots/Dashboard.png"
    }
  },
  {
    "id": "content-studio",
    "title": "AI Content Generation Studio",
    "subtitle": "Local content-generation workspace",
    "categories": [
      "AI / GenAI"
    ],
    "discipline": "Generative AI",
    "description": "Template-based writing with local generation, Markdown rendering, copying, and downloads.",
    "context": "Generate drafts such as emails, blog posts, captions, and product descriptions from a topic, tone, audience, and length.",
    "highlights": [
      "React/Vite frontend with a Node.js/Express generation endpoint.",
      "Ollama runs Gemma 3 1B locally; the selected template and controls form the prompt.",
      "Renders Markdown, reports word/character counts, and supports copy and Markdown download."
    ],
    "outcome": "Completed a local full-stack drafting application. Generated content remains a draft for user review.",
    "stack": [
      "React",
      "Node.js",
      "Express",
      "Ollama",
      "Gemma 3 1B",
      "React Markdown"
    ],
    "featured": false,
    "visual": "document",
    "github": "https://github.com/Abdullah-Javed-01/ai-content-generation-studio",
    "organization": "INNOVIAST",
    "year": "2026",
    "image": {
      "src": "/projects/content-studio.webp",
      "alt": "AI Content Generation Studio displaying an email draft and generation controls.",
      "source": "https://github.com/Abdullah-Javed-01/ai-content-generation-studio/blob/main/screenshots/Email.png"
    }
  },
  {
    "id": "datapulse",
    "title": "DataPulse",
    "subtitle": "Exploratory analysis and statistical profiling",
    "categories": [
      "Data Analytics"
    ],
    "discipline": "Data Analytics · Statistics",
    "description": "A modular air-quality analysis pipeline covering missing values, outliers, distributions, and hypothesis tests.",
    "context": "Understand data quality and statistical patterns in 9,357 UCI Air Quality observations before predictive modeling.",
    "highlights": [
      "Converts missing-value sentinels and profiles temporal, numeric, and categorical fields.",
      "Compares median, forward-fill, and standardized KNN imputation with artificial holdout validation.",
      "Generates correlation, IQR/Z-score outlier, transformation, Welch t-test, and ANOVA reports."
    ],
    "outcome": "Produced reusable tables, plots, and an evidence-based analysis report. Time dependence and high missingness are documented limitations.",
    "stack": [
      "Python",
      "Pandas",
      "SciPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn"
    ],
    "featured": false,
    "visual": "analytics",
    "github": "https://github.com/Abdullah-Javed-01/KHIZEX-Week2-DataPulse",
    "organization": "Khizex",
    "year": "2026",
    "image": {
      "src": "/projects/datapulse.webp",
      "alt": "Observed carbon monoxide distribution compared with KNN-imputed values.",
      "source": "https://github.com/Abdullah-Javed-01/KHIZEX-Week2-DataPulse/blob/main/reports/figures/imputation/CO_GT_KNN_comparison.png"
    }
  },
  {
    "id": "churnsignal",
    "title": "ChurnSignal",
    "subtitle": "Feature engineering for customer retention",
    "categories": [
      "Machine Learning",
      "Data Analytics"
    ],
    "discipline": "Machine Learning · Data Science",
    "description": "A churn pipeline comparing leakage-aware features and imbalance-aware models on synthetic customer data.",
    "context": "Explore retention modeling on 5,000 reproducibly generated customers, prioritizing missed churners and precision-recall trade-offs.",
    "highlights": [
      "Engineers ten tenure, behavioral, interaction, and discretization features.",
      "Splits before fitting preprocessing and keeps transformations inside Scikit-learn pipelines.",
      "Compares baseline and class-weighted Logistic Regression with Random Forest using five-fold CV PR-AUC and held-out evaluation."
    ],
    "outcome": "Saved the selected model with comparison tables, feature rankings, and error analysis. Results are specific to the synthetic dataset.",
    "stack": [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Logistic Regression",
      "Random Forest"
    ],
    "featured": false,
    "visual": "churn",
    "github": "https://github.com/Abdullah-Javed-01/KHIZEX-Week3-ChurnSignal",
    "organization": "Khizex",
    "year": "2026",
    "image": {
      "src": "/projects/churnsignal.webp",
      "alt": "Weighted Logistic Regression feature-importance chart from ChurnSignal.",
      "source": "https://github.com/Abdullah-Javed-01/KHIZEX-Week3-ChurnSignal/blob/main/reports/charts/feature_importance.png"
    }
  },
  {
    "id": "credit-card-fraud",
    "title": "Credit Card Fraud Detector",
    "subtitle": "Imbalanced classification and thresholds",
    "categories": [
      "Machine Learning"
    ],
    "discipline": "Machine Learning",
    "description": "Compares raw and SMOTE-trained fraud classifiers with validation-based model and threshold selection.",
    "context": "Study fraud detection under extreme class imbalance using the Kaggle credit-card transactions dataset.",
    "highlights": [
      "Removes exact duplicates and splits train, validation, and test data before resampling.",
      "Compares Logistic Regression and Random Forest, applying SMOTE only to fitting data.",
      "Tunes model depth and thresholds using validation evidence, then reports held-out precision, recall, F1, ROC-AUC, and PR-AUC."
    ],
    "outcome": "Completed a reproducible evaluation and reusable prediction helper. The work emphasizes fraud precision/recall trade-offs rather than misleading overall accuracy.",
    "stack": [
      "Python",
      "Scikit-learn",
      "imbalanced-learn",
      "SMOTE",
      "Pandas"
    ],
    "featured": false,
    "visual": "scam",
    "github": "https://github.com/Abdullah-Javed-01/KHIZEX-Week4-CreditCard-Fraud-Detector",
    "organization": "Khizex",
    "year": "2026"
  },
  {
    "id": "retail-sales",
    "title": "Retail Store Sales Analysis",
    "subtitle": "Retail business intelligence",
    "categories": [
      "Data Analytics",
      "Machine Learning"
    ],
    "discipline": "Data Analytics · Business Intelligence",
    "description": "A Streamlit dashboard for sales, products, geography, customer segments, and trend-based forecasts.",
    "context": "Analyze the supplied 2025 retail dataset across 1,489 orders, with approximately PKR 14.6M in recorded revenue.",
    "highlights": [
      "Python/Pandas cleaning and exploratory analysis feed an interactive Streamlit/Plotly dashboard.",
      "K-Means customer segmentation with scaling and elbow-method analysis.",
      "Linear Regression supports a simple three-month revenue trend forecast; filters and CSV export support exploration."
    ],
    "outcome": "Built a dashboard for exploring recorded sales, customer segments, and three-month revenue trends across the supplied dataset.",
    "stack": [
      "Python",
      "Pandas",
      "Streamlit",
      "Plotly",
      "Scikit-learn"
    ],
    "featured": false,
    "visual": "analytics",
    "github": "https://github.com/Abdullah-Javed-01/retail-store-sales-analysis",
    "organization": "TEYZIX CORE",
    "year": "2026",
    "metric": {
      "value": "≈ PKR 14.6M",
      "label": "Analyzed revenue · 1,489 orders"
    },
    "image": {
      "src": "/projects/retail-sales.webp",
      "alt": "Retail dashboard executive overview with analyzed revenue and 1,489 orders.",
      "source": "https://github.com/Abdullah-Javed-01/retail-store-sales-analysis/blob/main/screenshots_video/Executive%20Overview%201.png"
    }
  },
  {
    "id": "spam-message-detector",
    "title": "Spam Message Detector",
    "subtitle": "AI/ML Fellowship final project",
    "categories": [
      "Machine Learning"
    ],
    "discipline": "Machine Learning · NLP",
    "description": "A collaborative SMS spam classifier comparing Naive Bayes and Logistic Regression in Streamlit.",
    "context": "Final project for the ACM UET Lahore AI/ML Fellowship Program ’26, using the SMS Spam Collection dataset.",
    "highlights": [
      "Cleans the data, uses an 80/20 stratified split, and fits TF-IDF unigrams/bigrams on training text.",
      "Compares Multinomial Naive Bayes with class-weighted Logistic Regression.",
      "Logistic Regression: 98.55% accuracy, 93.75% spam recall, and 94.12% spam F1 on the recorded test split."
    ],
    "outcome": "Completed as a four-person fellowship project with saved models, evaluation plots, and an interactive comparison app.",
    "stack": [
      "Python",
      "Scikit-learn",
      "TF-IDF",
      "Streamlit",
      "Multinomial Naive Bayes",
      "Logistic Regression"
    ],
    "featured": false,
    "visual": "scam",
    "github": "https://github.com/Abdullah-Javed-01/Spam-Message-Detector",
    "organization": "ACM UET Lahore",
    "year": "2026",
    "metric": {
      "value": "98.55%",
      "label": "Logistic Regression test accuracy"
    },
    "image": {
      "src": "/projects/spam-message-detector.webp",
      "alt": "Naive Bayes and Logistic Regression comparison for accuracy and spam precision, recall, and F1.",
      "source": "https://github.com/Abdullah-Javed-01/Spam-Message-Detector/blob/main/outputs/model_comparison.png"
    }
  },
  {
    "id": "expense-categorization",
    "title": "Smart Expense Categorization",
    "subtitle": "Capstone API and application prototype",
    "categories": [
      "Machine Learning",
      "Backend"
    ],
    "discipline": "Applied ML · Backend",
    "description": "Expense-category suggestions through FastAPI and Streamlit, with confidence checks and user corrections.",
    "context": "A meaningful capstone developed across the HisabDo bootcamp’s later stages, categorizing English and Roman Urdu expense descriptions.",
    "highlights": [
      "TF-IDF and Logistic Regression trained on 1,000 records across nine categories, with an 800/200 train/test split.",
      "The saved Day-09 report records 0.99 accuracy on its 200-example test set.",
      "The Day-13 prototype connects Streamlit to FastAPI prediction and feedback endpoints, allowing users to accept or correct suggestions."
    ],
    "outcome": "Built a local application-integration prototype. The 99% result belongs to the earlier controlled model evaluation and is not a field-performance claim; low-confidence suggestions require review.",
    "stack": [
      "Python",
      "Scikit-learn",
      "TF-IDF",
      "FastAPI",
      "Streamlit",
      "Pydantic"
    ],
    "featured": false,
    "visual": "backend",
    "github": "https://github.com/Abdullah-Javed-01/HisabDo-AI-ML-Bootcamp",
    "organization": "HisabDo · Capstone",
    "year": "2026",
    "metric": {
      "value": "99%",
      "label": "Day-09 evaluation · 200 test examples"
    },
    "image": {
      "src": "/projects/expense-categorization.webp",
      "alt": "Expense categorization prototype showing a low-confidence suggestion and accept/correct controls.",
      "source": "https://github.com/Abdullah-Javed-01/HisabDo-AI-ML-Bootcamp/blob/main/Day-13/outputs/screenshots/02_ai_prediction.png"
    }
  },
  {
    "id": "plant-disease",
    "title": "Plant Disease Detection",
    "subtitle": "VGG16",
    "categories": [
      "Computer Vision",
      "Machine Learning"
    ],
    "discipline": "Computer Vision",
    "description": "Academic image-classification work exploring plant disease detection with VGG16.",
    "context": "Coursework applying a VGG16-based approach to plant-image classification.",
    "highlights": [
      "VGG16-based computer-vision coursework.",
      "Part of a wider academic collection exploring image preparation, learning, and evaluation."
    ],
    "outcome": "Completed as academic computer-vision coursework focused on plant-image classification.",
    "stack": [
      "Computer Vision",
      "VGG16",
      "Transfer Learning"
    ],
    "featured": false,
    "visual": "vision",
    "academic": true
  },
  {
    "id": "driver-drowsiness",
    "title": "Driver Drowsiness Classification",
    "subtitle": "CNN / AlexNet-style architecture",
    "categories": [
      "Computer Vision",
      "Machine Learning"
    ],
    "discipline": "Computer Vision",
    "description": "Academic image-classification work using a CNN with an AlexNet-style architecture.",
    "context": "Coursework exploring visual classification of driver drowsiness.",
    "highlights": [
      "CNN with an AlexNet-style architecture.",
      "Academic exploration of visual patterns associated with driver drowsiness."
    ],
    "outcome": "Completed as academic computer-vision coursework focused on driver-drowsiness image classification.",
    "stack": [
      "Computer Vision",
      "CNN",
      "AlexNet-style architecture"
    ],
    "featured": false,
    "visual": "vision",
    "academic": true
  },
  {
    "id": "pneumonia",
    "title": "Pneumonia Detection",
    "subtitle": "DenseNet121",
    "categories": [
      "Computer Vision",
      "Machine Learning"
    ],
    "discipline": "Computer Vision",
    "description": "Academic image-classification work exploring a DenseNet121-based approach.",
    "context": "Coursework studying transfer learning for pneumonia image classification.",
    "highlights": [
      "DenseNet121-based academic image classification.",
      "Exploration of transfer learning within the academic computer-vision collection."
    ],
    "outcome": "Completed for academic learning in image classification and transfer learning.",
    "stack": [
      "Computer Vision",
      "DenseNet121",
      "Transfer Learning"
    ],
    "featured": false,
    "visual": "mri",
    "academic": true
  },
  {
    "id": "face-mask",
    "title": "Face Mask Classification",
    "subtitle": "EfficientNetB0",
    "categories": [
      "Computer Vision",
      "Machine Learning"
    ],
    "discipline": "Computer Vision",
    "description": "Academic image-classification work using EfficientNetB0 for face-mask categories.",
    "context": "Coursework exploring an EfficientNetB0-based approach to face-mask image classification.",
    "highlights": [
      "EfficientNetB0-based computer-vision coursework.",
      "Part of a broader academic collection exploring model training and evaluation."
    ],
    "outcome": "Completed as academic computer-vision coursework focused on face-mask image classification.",
    "stack": [
      "Computer Vision",
      "EfficientNetB0",
      "Transfer Learning"
    ],
    "featured": false,
    "visual": "vision",
    "academic": true
  }
];

export const skillGroups: SkillGroup[] = [
  {
    "title": "Programming",
    "icon": "code",
    "items": [
      "Python",
      "SQL",
      "JavaScript",
      "C++"
    ]
  },
  {
    "title": "Machine Learning & Data Science",
    "icon": "brain",
    "items": [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow/Keras",
      "Pandas",
      "NumPy",
      "Feature Engineering",
      "Model Evaluation"
    ]
  },
  {
    "title": "Generative AI & RAG",
    "icon": "sparkles",
    "items": [
      "LangChain",
      "LlamaIndex",
      "ChromaDB",
      "Ollama",
      "LLM APIs",
      "Embeddings",
      "RAG",
      "Prompt Engineering"
    ]
  },
  {
    "title": "Computer Vision & Document AI",
    "icon": "scan",
    "items": [
      "OpenCV",
      "Tesseract OCR",
      "OCR/NLP Pipelines",
      "Model Quantization",
      "Model Pruning"
    ]
  },
  {
    "title": "Backend & Databases",
    "icon": "server",
    "items": [
      "FastAPI",
      "REST APIs",
      "Pydantic",
      "PostgreSQL",
      "Docker",
      "Node.js",
      "Authentication / JWT",
      "Background Jobs"
    ]
  },
  {
    "title": "Data Analytics & BI",
    "icon": "chart",
    "items": [
      "Power BI",
      "Power Query",
      "DAX",
      "Microsoft Excel",
      "Exploratory Data Analysis",
      "Statistical Analysis"
    ]
  },
  {
    "title": "Application Development & Tools",
    "icon": "layers",
    "items": [
      "Streamlit",
      "React",
      "Next.js",
      "Git",
      "GitHub"
    ]
  }
];

export const credentials: Credential[] = [
  {
    "title": "Google AI Professional Certificate",
    "issuer": "Google",
    "date": "Sep 2026"
  },
  {
    "title": "Backend AI Engineering",
    "issuer": "FlyRank AI",
    "date": "Sep 2026"
  },
  {
    "title": "AI Fluency",
    "issuer": "FlyRank AI",
    "date": "Sep 2026"
  },
  {
    "title": "Data Science Internship",
    "issuer": "Khizex",
    "date": "Sep 2026"
  },
  {
    "title": "AI Chatbot Development",
    "issuer": "INNOVIAST",
    "date": "Aug 2026"
  },
  {
    "title": "Data Analytics Internship",
    "issuer": "TEYZIX CORE",
    "date": "Jul 2026"
  },
  {
    "title": "AI/ML Fellowship Program ’26",
    "issuer": "ACM UET Lahore",
    "date": "Received Sep 2026"
  },
  {
    "title": "Claude 101 · Claude Platform 101 · Claude Code 101 · AI Fluency: Framework & Foundations",
    "issuer": "Anthropic Academy"
  },
  {
    "title": "Introduction to SQL",
    "issuer": "Sololearn",
    "date": "2026"
  }
];

export const recognition = [
  {
    "organization": "FlyRank AI",
    "title": "Official Recommendation Letter",
    "description": "Recommended for Backend Engineering and Applied AI Systems."
  },
  {
    "organization": "Khizex",
    "title": "Official Letter of Recommendation",
    "description": "Received following completion of the Data Science internship."
  },
  {
    "organization": "Khizex",
    "title": "Certificate of Appreciation",
    "description": "Outstanding Data Science Modeling & Statistical Excellence."
  },
  {
    "organization": "TEYZIX CORE",
    "title": "Official Letter of Recommendation",
    "description": "Recommended for future academic and professional opportunities."
  }
];

export const awards = [
  {
    "year": "2025",
    "place": "Runner-Up",
    "title": "Sumo War · Taakra 2025",
    "description": "Competed with THOR, a Bluetooth-controlled combat robot I independently designed, assembled, wired, programmed, and operated.",
    "image": {
      "src": "/projects/thor-award.jpeg",
      "alt": "Runner-Up award from the Sumo War category at Taakra 2025."
    }
  },
  {
    "year": "2024",
    "place": "Overall 1st Position",
    "title": "PGC Annual Robotics Competition",
    "description": "Also achieved 1st Position in Robo Soccer, Sumo War, and Maze Solving."
  }
];
