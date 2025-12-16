import { TimelineItem, SkillCategory, Publication, Talk, Award } from './types';
import { 
  Stethoscope, 
  BrainCircuit, 
  Workflow, 
  Code2, 
  BookOpen, 
  Award as AwardIcon, 
  Mic,
  Microscope
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Dr. Atul Tiwari, MD",
  designation: "Assistant Professor (Pathology)",
  roles: "Pathologist | AI & Bioinformatics Researcher | Medical AI Educator",
  tagline: "Bridging Diagnostic Medicine and Artificial Intelligence",
  email: "contact@atultiwari.in", // Placeholder based on domain
  website: "https://atultiwari.in",
  linkedin: "https://www.linkedin.com/in/dr-atul-tiwari/",
  location: "Chittorgarh, Rajasthan, India"
};

export const ABOUT_TEXT = `
  I am an academic pathologist serving as an Assistant Professor at Government Medical College, Chittorgarh, where I act as the In-Charge of the Department of Pathology. 
  
  My professional journey bridges the gap between traditional diagnostic medicine and cutting-edge technology. With a strong foundation in MBBS, MD Pathology, and Clinical Pathology, I have expanded my expertise into Machine Learning, Artificial Intelligence, Bioinformatics, and Computer Applications.
  
  I am deeply passionate about teaching, conducting interdisciplinary research, and translating complex AI concepts into practical clinical applications, specifically focusing on no-code AI tools to empower medical professionals.
`;

export const EDUCATION: TimelineItem[] = [
  {
    id: "e1",
    title: "MS in Machine Learning & AI",
    organization: "Liverpool John Moores University, UK",
    period: "Recent",
    type: "education"
  },
  {
    id: "e2",
    title: "MD Pathology",
    organization: "Medical College", // Generic placeholder if specific college not provided in prompt for MD
    period: "Completed",
    type: "education"
  },
  {
    id: "e3",
    title: "DCP (Clinical Pathology)",
    organization: "Medical College",
    period: "Completed",
    type: "education"
  },
  {
    id: "e4",
    title: "MCA (Master of Computer Applications)",
    organization: "Manipal University Jaipur",
    period: "Recent",
    type: "education"
  },
  {
    id: "e5",
    title: "MBBS",
    organization: "Medical College",
    period: "Completed",
    type: "education"
  },
  {
    id: "e6",
    title: "Diploma in AI",
    organization: "IIIT Bangalore",
    period: "Completed",
    type: "education"
  },
  {
    id: "e7",
    title: "Diploma in Bioinformatics",
    organization: "Various Institutions",
    period: "Completed",
    type: "education"
  },
  {
    id: "e8",
    title: "Diploma in Hospital Administration",
    organization: "Various Institutions",
    period: "Completed",
    type: "education"
  }
];

export const EXPERIENCE: TimelineItem[] = [
  {
    id: "ex1",
    title: "Assistant Professor (Pathology)",
    organization: "Government Medical College, Chittorgarh",
    period: "Current",
    type: "experience",
    description: "Acting In-Charge, Department of Pathology. Focusing on lab development, teaching MBBS students, and administrative leadership."
  },
  {
    id: "ex2",
    title: "Assistant Professor (Pathology)",
    organization: "RVRS GMC Bhilwara",
    period: "Previous",
    type: "experience",
    description: "Academic teaching and diagnostic services."
  },
  {
    id: "ex3",
    title: "Assistant Professor (Pathology)",
    organization: "RNT Medical College Udaipur",
    period: "Previous",
    type: "experience"
  },
  {
    id: "ex4",
    title: "Senior Resident",
    organization: "SMS Medical College Jaipur",
    period: "Previous",
    type: "experience",
    description: "Specialized training in hematopathology, histopathology, and cytopathology."
  },
  {
    id: "ex5",
    title: "Medical Officer",
    organization: "Govt. of Rajasthan",
    period: "Previous",
    type: "experience"
  },
  {
    id: "ex6",
    title: "AI Faculty & Advisory Board Member",
    organization: "DoctorsAI / NSDA",
    period: "Ongoing",
    type: "experience",
    description: "Educating medical professionals on AI integration and contributing to strategic development in digital health."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Medical & Pathology",
    iconName: "microscope",
    skills: [
      "Hematopathology",
      "Histopathology",
      "Cytopathology",
      "Flow Cytometry",
      "Transfusion Medicine",
      "Lab Management"
    ]
  },
  {
    title: "AI & Research",
    iconName: "brain",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "Foundation Models",
      "RAG & SLMs",
      "AI in Drug Discovery"
    ]
  },
  {
    title: "No-Code & Automation",
    iconName: "workflow",
    skills: [
      "Orange Data Mining",
      "Weka",
      "Google Vertex AI",
      "Azure ML Designer",
      "n8n & Flowise",
      "DataRobot & BigML"
    ]
  },
  {
    title: "Programming & Dev",
    iconName: "code",
    skills: [
      "Python",
      "Java & C++",
      "PHP & SQL",
      "HTML/CSS/Bootstrap",
      "Android Dev",
      "Web App Dev"
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "p1",
    title: "Various Book Chapters on AI in Diagnostic Medicine",
    year: "Recent",
    type: "book_chapter",
    details: "Contributions to foundational texts discussing the integration of AI models in pathology workflows."
  },
  {
    id: "p2",
    title: "Peer-Reviewed Articles on Pathology & Oncology",
    year: "Various",
    type: "journal",
    details: "Research focused on hematological malignancies, solid tumors, and diagnostic accuracy."
  },
  {
    id: "p3",
    title: "AI & Machine Learning in Healthcare",
    year: "Various",
    type: "journal",
    details: "Papers exploring the efficacy of ML algorithms in predictive diagnostics and COVID-19 management."
  },
  {
    id: "p4",
    title: "Interdisciplinary Case Reports",
    year: "Various",
    type: "case_report",
    details: "Clinical case studies highlighting rare pathologies and the role of modern diagnostic tools."
  }
];

export const TALKS: Talk[] = [
  {
    id: "t1",
    event: "Doctors AI Global Summit",
    role: "Speaker",
    location: "Global / Virtual",
    year: "2023-2024"
  },
  {
    id: "t2",
    event: "Emirates Pathology Conference",
    role: "Speaker",
    location: "Dubai",
    year: "Recent"
  },
  {
    id: "t3",
    event: "Hands-on No-Code AI Workshops",
    role: "Lead Instructor",
    location: "Various",
    year: "Ongoing"
  }
];

export const AWARDS: Award[] = [
  {
    id: "a1",
    title: "Outstanding Achiever Award in Artificial Intelligence",
    issuer: "United Kingdom (Organization)",
    year: "Recent"
  },
  {
    id: "a2",
    title: "Best Poster & E-Poster Presentations",
    issuer: "Various Medical Conferences",
    year: "Various"
  }
];
