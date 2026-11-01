export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface ClientWebsite {
  title: string;
  url: string;
  badge?: string;
}

export interface Project {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  contributions: string[];
  link?: string;
  clientWebsites?: ClientWebsite[];
}

export interface Education {
  degree: string;
  institution: string;
  year?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
