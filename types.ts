
export type ViewState = 'HOME' | 'INFO' | 'SHOP_ART' | 'SHOP_BOOKS' | 'WORK' | 'PROJECT';

export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  type: 'PRINT' | 'ORIGINAL' | 'BOOK';
  image: string;
}
