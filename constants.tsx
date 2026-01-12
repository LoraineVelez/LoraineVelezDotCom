
import { Project, Product } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Aether Canvas',
    year: '2024',
    description: 'A generative art platform focused on procedural textures and minimal aesthetics.',
    details: 'WebGL rendering engine and React-based design systems.',
    tags: ['Web Design', 'Development', 'Generative Art'],
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200',
    url: 'https://example.com'
  },
  {
    id: 'p2',
    title: 'Mono Journal',
    year: '2023',
    description: 'A minimalist publishing system for long-form essays and digital literature.',
    details: 'Typography-first UI/UX with headless CMS integration.',
    tags: ['UX Design', 'Branding', 'CMS'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200',
    url: 'https://example.com'
  },
  {
    id: 'p3',
    title: 'Flow State',
    year: '2023',
    description: 'A task management tool that visualizes project progression as fluid animations.',
    details: 'Product design strategy and custom motion library development.',
    tags: ['Product Design', 'Interface'],
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1200',
    url: 'https://example.com'
  },
  {
    id: 'p4',
    title: 'Kinetic Type',
    year: '2022',
    description: 'An interactive typography experiment showcasing the intersection of code and glyphs.',
    details: 'Physics-based typography library reacting to scroll velocity.',
    tags: ['Motion Design', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
    url: 'https://example.com'
  }
];

export const PRODUCTS: Product[] = [
  { 
    id: 'sh1', 
    name: 'Internal Review', 
    price: '$55.00', 
    type: 'PRINT', 
    image: 'https://i.ibb.co/nNvwg8Cg/Photos-for-Website-Shop.png',
    description: '12 x 12 archival print, frame ready'
  },
  { 
    id: 'sh2', 
    name: 'Temporal Drift', 
    price: '$350.00', 
    type: 'ORIGINAL', 
    image: 'https://i.ibb.co/0jHqGrMh/COOMING-SOON-SHOP-43.png',
    description: 'Original acrylic on canvas, 24 x 36'
  },
  { 
    id: 'sh3', 
    name: 'Inner Dialogues', 
    price: '$32.00', 
    type: 'BOOK', 
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600',
    description: 'Hardcover, linen wrap edition'
  },
  { 
    id: 'sh4', 
    name: 'COMING SOON', 
    price: '---', 
    type: 'PRINT', 
    image: 'https://i.ibb.co/GQsc9s4M/SHOP-ITEM-COMING-SOON.png',
    description: '12 x 12 archival print, frame ready'
  },
  { 
    id: 'sh5', 
    name: 'Echoes of Light', 
    price: '$280.00', 
    type: 'ORIGINAL', 
    image: 'https://i.ibb.co/0jHqGrMh/COOMING-SOON-SHOP-43.png',
    description: 'Original acrylic on canvas, 18 x 24'
  },
  { 
    id: 'sh6', 
    name: 'COMING SOON', 
    price: '---', 
    type: 'PRINT', 
    image: 'https://i.ibb.co/GQsc9s4M/SHOP-ITEM-COMING-SOON.png',
    description: '12 x 12 archival print, frame ready'
  }
];
