
export interface ClassInfo {
  id: string;
  name: string;
  description: string;
  intensity: 'Low' | 'Medium' | 'High';
  category: 'Strength' | 'Cardio' | 'Relax';
  image: string;
  duration: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
}

export interface ScheduleItem {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
