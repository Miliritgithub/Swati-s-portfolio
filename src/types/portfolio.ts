export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Languages" | "Tools";
  level: "Advanced" | "Proficient";
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  repo: string;
}

export interface NavLink {
  label: string;
  href: string;
}
