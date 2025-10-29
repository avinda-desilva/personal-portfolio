export interface Skill {
  id: number;
  title: string;
  description: string;
  color: string;
}

export const skills: Skill[] = [
  {
    id: 1,
    title: "Machine & Deep Learning",
    description:
      "Experience implementing neural networks, including Graph Neural Networks and anomaly detection systems using Python, PyTorch, and Prophet.",
    color: "border-[#6366f1] bg-[#6366f1]/10",
  },
  {
    id: 2,
    title: "Generative AI & LLM Integration",
    description:
      "Developed intelligent automation systems leveraging ChatGPT, M365 Copilot, and DeepSeek with prompt engineering and model-assisted coding.",
    color: "border-[#61dafb] bg-[#61dafb]/10",
  },
  {
    id: 3,
    title: "Cloud & Serverless Architecture",
    description:
      "Designed and deployed scalable applications on AWS (EC2, Lambda, S3, SQS, ECR, Greengrass) using MQTT and IoT Core for real-time edge inference.",
    color: "border-[#3178c6] bg-[#3178c6]/10",
  },
  {
    id: 4,
    title: "Software & Systems Engineering",
    description:
      "Strong foundation in full-stack and low-level system development, SOC emulation, virtualization (VT-d), and concurrency frameworks for OS-level integration.",
    color: "border-[#a855f7] bg-[#a855f7]/10",
  },
  {
    id: 5,
    title: "Programming & Scripting",
    description:
      "Proficient in Python, C++, and C with working knowledge of Java, C#, JavaScript, Bash, and PowerShell for backend, automation, and integration tasks.",
    color: "border-[#f59e0b] bg-[#f59e0b]/10",
  },
  {
    id: 6,
    title: "DevOps & Containerization",
    description:
      "Experienced in Docker-based deployment, CI/CD concepts, and managing AWS ECR pipelines for serverless and edge environments.",
    color: "border-[#10b981] bg-[#10b981]/10",
  },
  {
    id: 7,
    title: "Data & Distributed Systems",
    description:
      "Skilled in SQL and Neo4j for data modeling and real-time data pipelines; knowledgeable in distributed systems and ML-based network optimization.",
    color: "border-[#ef4444] bg-[#ef4444]/10",
  },
];