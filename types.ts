
export type ViewState = 'HOME' | 'INFO' | 'SHOP_ART' | 'SHOP_BOOKS' | 'WORK';

export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  details: string; // Specifics of what was done
  tags: string[];
  image: string;
  url: string; // Direct link to the live site
}

export interface Product {
  id: string;
  name: string;
  price: string;
  type: 'PRINT' | 'ORIGINAL' | 'BOOK';
  image: string;
}
