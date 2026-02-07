
import { ClassInfo, Trainer, ScheduleItem } from './types';

export const CLASSES: ClassInfo[] = [
  {
    id: '1',
    name: 'Red HIIT',
    description: 'Alta intensidad bajo luces rojas pulsantes para maximizar la quema de calorías.',
    intensity: 'High',
    category: 'Cardio',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    duration: '45 min'
  },
  {
    id: '2',
    name: 'Power Lifting',
    description: 'Enfocado en fuerza bruta y técnica de levantamiento olímpico.',
    intensity: 'High',
    category: 'Strength',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    duration: '60 min'
  },
  {
    id: '3',
    name: 'Yoga Zen-Red',
    description: 'Relajación profunda con cromoterapia roja para la recuperación muscular.',
    intensity: 'Low',
    category: 'Relax',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    duration: '50 min'
  },
  {
    id: '4',
    name: 'Boxing Inferno',
    description: 'Libera tensiones y mejora tus reflejos en el ring.',
    intensity: 'Medium',
    category: 'Cardio',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800',
    duration: '45 min'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Alex "The Beast" Vance',
    specialty: 'Powerlifting & HIIT',
    bio: 'Certificado internacionalmente con más de 10 años transformando cuerpos.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Sarah Connor',
    specialty: 'Functional Training',
    bio: 'Especialista en movilidad y agilidad extrema.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Marco Rossi',
    specialty: 'Boxing & MMA',
    bio: 'Ex-luchador profesional dedicado a la enseñanza de artes marciales.',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=400'
  }
];

export const SCHEDULE: ScheduleItem[] = [
  { time: '07:00', monday: 'Red HIIT', tuesday: 'Boxing', wednesday: 'Red HIIT', thursday: 'Yoga', friday: 'Red HIIT', saturday: 'Power' },
  { time: '09:00', monday: 'Yoga', tuesday: 'Power', wednesday: 'Boxing', thursday: 'Red HIIT', friday: 'Yoga', saturday: 'Boxing' },
  { time: '17:00', monday: 'Boxing', tuesday: 'Red HIIT', wednesday: 'Yoga', thursday: 'Power', friday: 'Boxing', saturday: 'Free Gym' },
  { time: '19:00', monday: 'Red HIIT', tuesday: 'Boxing', wednesday: 'Power', thursday: 'Red HIIT', friday: 'Yoga', saturday: 'Closed' }
];
