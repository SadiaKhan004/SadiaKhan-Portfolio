// src/config/site.js

export const site = {
    email: "sadia.jamali.se@gmail.com",
    social: {
        linkedin: "https://www.linkedin.com/in/sadia-khan-59894b2ba/",
        github: "https://github.com/SadiaKhan004",
    },
};

export const projectsList = [
    {
        id: "hive",
        title: "Hive",
        image: "/assets/Hive.png",
        overview: "An AI-powered social media platform that helps growing businesses generate, approve, schedule, and analyze content across multiple channels — all from a single dashboard.",
        bullets: [
            "Built on a scalable, event-driven serverless architecture designed for reliability at scale.",
            "Combines multiple generative AI models with a human-in-the-loop review workflow to keep quality and brand control in the loop."
        ],
        tags: ["AWS", "Node.js", "Supabase", "GenAI"],
        link: "https://hivesocial.dev",
        linkText: "EXPLORE"
    },
    {
        id: "coloryze",
        title: "Coloryze",
        image: "/assets/Coloryze2.png",
        overview: "Engineered a multi-agent personal color analysis and fashion intelligence platform that placed 2nd overall in Folio3's final showcase competition.",
        bullets: [
            "Built a 3-agent pipeline (Search, Generation, Matching) using SmolAgents and FastAPI for custom color theory reports.",
            "Integrated Monk Skin Tone classification and reduced pipeline latency by ~68% via parallelized web scraping and caching."
        ],
        tags: ["PYTHON", "React.js", "FASTAPI", "SMOLAGENTS", "HUGGINGFACE", "GenAI", "Supabase"],
        link: "https://github.com/SadiaKhan004/Coloryze",
        linkText: "EXPLORE"
    },
    {
        id: "supportflow",
        title: "SupportFlow",
        image: "/assets/SupportFlow.png",
        overview: "Architected a multi-agent customer support triage system featuring dynamic intent routing, automated refund policy validation, and Human-in-the-Loop supervisor interrupts.",
        bullets: [
            "Implemented real-time Server-Sent Event (SSE) streaming paired with an interactive ReactFlow agent execution visualizer.",
            "Automated refund validation against database policy limits with supervisor interrupt controls for high-value requests."
        ],
        tags: ["Python", "FASTAPI", "LANGGRAPH", "GROQ", "SUPABASE", "REACTFLOW", "SSE"],
        link: "https://github.com/SadiaKhan004/supportflow",
        linkText: "EXPLORE"
    },
    {
        id: "researchmind",
        title: "ResearchMind",
        image: "/assets/Research_Agent.png",
        overview: "Engineered an autonomous ReAct research agent that dynamically routes queries between uploaded document vector stores and live web search to answer complex questions with precise source citations.",
        bullets: [
            "Implemented an end-to-end RAG pipeline featuring semantic PDF chunking and ChromaDB vector retrieval.",
            "Integrated Tavily API live web search grounding with Streamlit UI for multi-source research tasks."
        ],
        tags: ["Python", "LANGGRAPH", "CHROMADB", "HuggingFace", "GEMINI", "TAVILY"],
        link: "https://github.com/SadiaKhan004/DeepResearch",
        linkText: "EXPLORE"
    }
];

export const publicationsList = [
    {
        id: "sdn-research",
        title: "Improving Security in SDNs Through an Optimized SVM Model for DDoS Detection",
        journal: "International Journal of Communication Systems",
        image: "/assets/sdn-security.png",
        overview: "Engineered a real-time DDoS detection and mitigation system combining Support Vector Machines with Kernel PCA (KPCA) nonlinear dimensionality reduction and a 5-generation Genetic Algorithm (GA) for automated hyperparameter tuning.",
        bullets: [
            "Achieved 99.92% recall and 99.97% precision on the CIC-DDoS2019 dataset, improving significantly over baseline SVM performance (96.04% recall).",
            "Deployed the trained pipeline inside a customized Ryu SDN controller with a real-time FlowTracker module for live OpenFlow feature extraction and sub-second DROP rule mitigation.",
            "Validated end-to-end detection and mitigation performance on live traffic inside a Mininet + Ryu testbed under multi-host attack scenarios."
        ],
        tags: ["PYTHON", "SCIKIT-LEARN", "SVM", "GENETIC ALGORITHM", "KPCA", "MININET", "RYU"],
        link: "https://doi.org/10.1002/dac.70537",
        linkText: "READ PAPER (DOI)"
    },
    {
        id: "xfornet",
        title: "XForNet: Explainable AI Framework for Digital Forensics in SDNs",
        journal: "Under Review",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
        overview: "Designing an interpretable digital forensics framework for Software-Defined Networks that combines Graph Neural Networks with Explainable AI (XAI) to translate complex network threat patterns into transparent, auditable evidence.",
        bullets: [
            "Combines graph-based neural architectures with explainability tooling to make threat detection decisions fully traceable for forensic investigation.",
            "Focuses on replacing black-box intrusion detection models with human-verifiable evidence subgraphs tailored for post-incident network analysis."
        ],
        tags: ["PYTORCH", "GNN", "GRU", "EXPLAINABLE AI", "SDN FORENSICS"],
        link: "#",
        linkText: "PREPRINT UNDER REVIEW"
    }
];