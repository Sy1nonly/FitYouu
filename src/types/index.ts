export type ClothingStyle = 'streetwear' | 'vintage' | 'classy';

export interface UserPreferences {
  height: number;
  weight: number;
  preferredColors: string[];
  style: ClothingStyle;
}

export interface ClothingItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  color: string;
  material: string;
  category: string;
  imageUrl: string;
  storeUrl: string;
}

export interface FilterOptions {
  priceRange: {
    min: number;
    max: number;
  };
  brands: string[];
  materials: string[];
}