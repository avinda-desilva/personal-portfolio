export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  period: string; // Display format: "Month YYYY" or "Month YYYY - Month YYYY"
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Medical Transcription and SOAP Note Generator",
    description:
        "Developed a full-stack medical transcription web app that records live conversations, performs real-time speaker-diarized transcription, and generates structured SOAP notes using large language models. Integrated Streamlit for UI, AssemblyAI for transcription, and Groq’s Llama 3.3 70B model for clinical note generation.",
    tags: [
        "Python",
        "Streamlit",
        "AssemblyAI",
        "Groq API",
        "Llama 3.3 70B",
        "Speaker Diarization",
        "AI",
        "LLM Integration",
    ],
    period: "Aug 2025 - Present"
  },
  {
    id: 2,
    title: "Cloud-Based Face Recognition System",
    description:
        "Developed a distributed face recognition platform leveraging AWS EC2, Lambda, SQS, S3, and Greengrass to demonstrate scalable, low-latency cloud and edge computing architecture. Implemented asynchronous detection and recognition pipelines using MQTT for IoT integration and real-time inference.",
    tags: ["AWS", "Lambda", "S3", "EC2", "SQS", "Greengrass", "Docker", "MQTT", "Python"],
    githubUrl: "https://github.com/yourusername/cloud-face-recognition",
    period: "Jan 2025 - May 2025",
  },
  {
    id: 3,
    title: "Network Optimization via Recurrent Graph Neural Networks",
    description:
        "Designed and trained a Recurrent Graph Neural Network (RGNN) to optimize network routing by predicting efficient paths based on latency and bitrate metrics. Achieved a 65% improvement in routing efficiency on a simulated FABRIC network with real-time streaming data.",
    tags: ["Python", "PyTorch", "RGNN", "Network Optimization", "Machine Learning", "FABRIC Network"],
    githubUrl: "https://github.com/avinda-desilva/enhanced-traffic-engineering",
    period: "Jan 2024 - May 2024",
  },
  {
    id: 4,
    title: "PowerSet Interactive Visualization",
    description:
        "Developed an interactive data visualization system to explore complex set intersections using a layered treemap approach. Implemented user-driven filtering and selection features linking bar charts to hierarchical treemap layers for real-time data exploration on large datasets.",
    tags: [
        "JS",
        "D3.js",
        "Data Visualization",
        "Interactive UI",
        "Frontend Development",
        "HCI"
    ],
    githubUrl: "https://github.com/asu-cse578-s2024/Ari-Avinda-Devansh-Likhit-Nawaf",
    period: "Jan 2024 - May 2024",
  },
  {
    id: 5,
    title: "Time-Series Anomaly Detection",
    description:
        "Implemented anomaly detection and forecasting models on NASDAQ time-series data using Python and Facebook Prophet. Identified abnormal financial patterns during major market events and improved predictive accuracy through statistical feature engineering.",
    tags: ["Python", "Prophet", "Time-Series Analysis", "Anomaly Detection", "Data Science"],
    githubUrl: "https://github.com/yourusername/time-series-anomaly-detection",
    liveUrl: "https://your-live-demo-url.com",
    period: "Aug 2023 - Dec 2023",
  },
  {
    id: 6,
    title: "NBA Game Simulator Application",
    description:
        "Developed an interactive web application that simulates NBA games based on user-selected teams and player statistics. Implemented backend logic to analyze player data and generate probabilistic outcomes, providing users with real-time game predictions and match insights.",
    tags: ["JavaScript", "Flask", "Python", "REST API", "Data Visualization", "Full-Stack Development"],
    githubUrl: "https://github.com/avinda-desilva/NBA-For-Dummies",
    period: "Dec 2020 - Jul 2021",
  },
];