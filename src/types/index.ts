export interface ServiceFeatures {
  id: number;
  serviceId: number;
  feature: string;
}

export interface Service {
  id: number;
  icon: string;
  serviceName: string;
  description: string;
  serviceFeatures: ServiceFeatures[];
  status: boolean;
}

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
  projectType: string;
  projectDescriptions: ProjectDescription[];
  hasPreview: boolean;
  previewLink: string;
  projectSnapShots: ProjectSnapShot[];
  status: boolean;
}

export interface UpcomingProject {
  id: number;
  projectName: string;
  image: string;
  description: string;
  status: boolean;
}

export interface Milestone {
  id: number;
  title: string;
  count: number;
  icon: string;
}
