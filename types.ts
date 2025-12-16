export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description?: string;
  location?: string;
  type: 'education' | 'experience';
}

export interface SkillCategory {
  title: string;
  skills: string[];
  iconName: string;
}

export interface Publication {
  id: string;
  title: string;
  journal?: string;
  year: string;
  type: 'journal' | 'book_chapter' | 'case_report';
  details?: string;
}

export interface Talk {
  id: string;
  event: string;
  role: string;
  location: string;
  year: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  year: string;
}