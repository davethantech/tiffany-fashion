
export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface Service {
  id: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  details?: ServiceDetail[];
  image?: string;
}

export interface ServiceDetail {
  title: string;
  content: string;
  image?: string;
}

export interface CoreValue {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string[];
  image: string;
}

export interface WhyChooseUsPoint {
    title: string;
    description: string;
    icon?: React.ReactNode;
}
