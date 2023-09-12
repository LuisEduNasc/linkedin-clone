export interface IExperience {
  role: string;
  company: string;
  duration: string;
}

export interface IEducation {
  school: string;
  degree: string;
  graduationYear: number;
}

export interface ILinkedInUser {
  id: number;
  firstName: string;
  lastName: string;
  headline: string;
  location: string;
  connections: number;
  profilePicture: string;
  summary: string;
  skills: string[];
  experience: IExperience[];
  education: IEducation[];
}
