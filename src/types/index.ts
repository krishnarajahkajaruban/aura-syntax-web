// Service Types
export interface ServiceFeatures {
  id: number;
  serviceId: number;
  feature: string;
  description: string;
}

export interface Service {
  id: number;
  icon: string;
  iconImg: string;
  serviceName: string;
  description: string;
  serviceFeatures: ServiceFeatures[];
  status: boolean;
}

// Project Types
export interface ProjectDescription {
  id: number;
  projectId: number;
  description: string;
}

export interface ProjectSnapShot {
  id: number;
  projectId: number;
  imagePath: string;
}

export interface Project {
  id: number;
  name: string;
  image: string;
  companyLogo?: string;
  projectType: string;
  projectDescriptions: ProjectDescription[];
  hasPreview: boolean;
  previewLink: string;
  projectSnapShots: ProjectSnapShot[];
  status: boolean;
}

// Upcoming Project Types
export interface UpcomingProject {
  id: number;
  projectName: string;
  image: string;
  description: string;
  status: boolean;
}

// Milestone Types
export interface Milestone {
  id: number;
  label: string;
  value: number;
  suffix?: string;
  description?: string;
  icon?: string;
}
