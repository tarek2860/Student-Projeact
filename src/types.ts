export type Language = 'bn' | 'en';

export interface Student {
  id: string;
  name: string;
  roll: string;
  shift: string;
  semester: string;
  imageUrl: string;
}

export interface Teacher {
  id: string;
  name: string;
  department: string;
  imageUrl: string;
}

export type ViewMode = 'home' | 'students' | 'teachers' | 'dashboard';

export interface User {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export interface AppSettings {
  collegeName: string;
  collegeLogo: string;
  heroImages: string[];
}
