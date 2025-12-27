export interface ExperienceType {
  id?: string;
  title: string;
  year: string;
  company: string;
  role?: string;
  startDate: string;
  endDate: string;
  description: string[];
  companySite: string;
  logo: string;
  location: {
    lat: number;
    lng: number;
    city: string;
    country: string;
    isRemote?: boolean;
  };
  color: "light" | "medium" | "dark" | "white";
}

export interface ProjectItemType {
  title: string;
  year: string;
  description: string;
  demoUrl?: string;
  githubUrl?: string;
}
