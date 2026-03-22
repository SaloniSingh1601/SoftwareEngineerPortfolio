export interface Experience {
  id: string;
  company: string;
  location: string;
  title: string;
  dates: string;
  impact: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  /** Verbatim tech line from resume, when present */
  techStack?: string;
}

export interface Education {
  school: string;
  schoolLocation: string;
  degree: string;
  dates: string;
  honors: string;
}

export interface HeroHighlight {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  duration: string;
  description: string[];
  technologies: string[];
  github?: string;
  live?: string;
  missionType: 'Front-end' | 'Back-end' | 'Full-stack' | 'System Design';
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface PortfolioData {
  /** Canonical resume export served from /public (same content as source .docx HTML). */
  resumeHtmlPath: string;
  name: string;
  title: string;
  tagline: string;
  about: string;
  location: string;
  education: Education;
  heroHighlights: HeroHighlight[];
  /** Sticky sidebar metrics on experience section — from resume */
  experienceImpactSummary: HeroHighlight[];
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  achievements: Achievement[];
}
