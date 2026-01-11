
import { Project, Product } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Aether Canvas',
    year: '2024',
    description: 'A generative art platform focused on procedural textures and minimal aesthetics. Built with WebGL and React. The scope involved creating a custom rendering engine that translates user brush strokes into mathematical noise patterns.',
    tags: ['Web Design', 'Development', 'Generative Art'],
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'p2',
    title: 'Mono Journal',
    year: '2023',
    description: 'A minimalist publishing system for long-form essays. We focused on high-legibility typography and a "distraction-free" writing interface. The project scope covered the full design system and CMS integration.',
    tags: ['UX Design', 'Branding', 'CMS'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'p3',
    title: 'Flow State',
    year: '2023',
    description: 'A task management tool that visualizes project progression as fluid animations. The scope was to rethink traditional kanban boards into a more organic, time-based visualization.',
    tags: ['Product Design', 'Interface'],
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'p4',
    title: 'Kinetic Type',
    year: '2022',
    description: 'An interactive typography experiment. The scope involved developing a library of motion-based glyphs that react to cursor proximity and scroll velocity.',
    tags: ['Motion Design', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200'
  }
];

export const PRODUCTS: Product[] = [
  { id: 'sh1', name: 'Midnight Solace', price: '$45.00', type: 'PRINT', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600' },
  { id: 'sh2', name: 'Temporal Drift', price: '$350.00', type: 'ORIGINAL', image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=600' },
  { id: 'sh3', name: 'Inner Dialogues', price: '$32.00', type: 'BOOK', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600' },
  { id: 'sh4', name: 'Fractured Silence', price: '$45.00', type: 'PRINT', image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=600' },
  { id: 'sh5', name: 'Echoes of Light', price: '$280.00', type: 'ORIGINAL', image: 'https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=600' },
  { id: 'sh6', name: 'Shapes of Thought', price: '$12.00', type: 'PRINT', image: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&q=80&w=600' }
];
