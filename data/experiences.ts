export interface Experience {
  id: number;
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    position: "Software/System Validation Engineer",
    company: "Intel Corporation",
    location: "Chandler, AZ",
    period: "Oct 2021 - Dec 2022",
    description:
        "Executed validation and emulation testing on Intel’s Accelerator IPs, ensuring functional accuracy, performance, and compatibility across complex SOC architectures. Collaborated with design and architecture teams to debug and optimize virtualization-based directed I/O solutions.",
    achievements: [
        "Developed and executed SOC emulation tests for Intel’s Accelerator IP, identifying and resolving high-impact software defects.",
        "Enhanced concurrency and stress frameworks, improving test robustness and increasing detection of corner-case scenarios.",
        "Collaborated cross-functionally with design and architecture teams, providing critical insights and debugging support via system-level tracking and waveform analysis.",
        "Validated VT-d (Virtualization Technology for Directed I/O) functionality, ensuring seamless hardware-software interaction and system stability."
    ],
    skills: ["System Validation", "Linux", "Virtualization (VT-d)", "Debugging", "Emulation", "Automation", "SOC Architecture"]
  },
  {
    id: 2,
    position: "Software Engineer Intern",
    company: "Intel Corporation",
    location: "Chandler, AZ",
    period: "Jul 2020 - Dec 2020",
    description:
        "Contributed to performance optimization and automation efforts across benchmarking and IoT data systems. Focused on improving compute efficiency and enabling real-time industrial data streaming through cloud integration.",
    achievements: [
        "Optimized ECS Benchmarking Suite to leverage Cache Allocation Technology, improving system performance and reducing test runtime.",
        "Developed software enabling Industrial Control Systems to communicate with AWS clients, providing real-time operational insights to users.",
        "Collaborated with senior engineers to modernize testing workflows and enhance system reliability across diverse hardware configurations."
    ],
    skills: ["Python", "AWS", "ECS Benchmarking", "Automation", "IoT Integration"]
  },
  {
    id: 3,
    position: "App Development Intern",
    company: "Ameren Corporation",
    location: "Urbana-Champaign, IL",
    period: "Oct 2019 - Mar 2020",
    description:
        "Led development of internal web applications for project management, integrating real-time data updates and secure communication with enterprise databases. Focused on enhancing user experience and workflow transparency across large-scale company projects.",
    achievements: [
        "Led development of a full-stack project management web application improving collaboration and deadline tracking across multiple departments.",
        "Implemented security enhancements and dynamic project features using Angular and cx_Oracle for seamless backend communication.",
        "Delivered real-time project schedule updates and status visibility through interactive dashboards, improving cross-team coordination."
    ],
    skills: ["Angular", "JavaScript", "cx_Oracle", "UI/UX Design", "Full-Stack Development"]
  },
  {
    id: 4,
    position: "Engineering Student Intern",
    company: "NXP Semiconductors",
    location: "Chandler, AZ",
    period: "May 2018 - Aug 2018",
    description:
        "Supported sensor testing, database migration, and data management initiatives for automotive and industrial sensing systems. Collaborated with engineering teams to improve data accessibility and streamline testing workflows.",
    achievements: [
        "Conducted Electric Field and Bulk Current Injection tests to optimize shield sensor performance and reliability.",
        "Migrated the Sensors Project database to IBM Rational DOORS Next Generation, enhancing accessibility and data management efficiency.",
        "Presented migration process documentation to internal teams, enabling streamlined adoption for future engineering projects."
    ],
    skills: ["Injection Testing", "Data Migration", "IBM DOORS Next Generation", "Database Management"]
  },
];