export type ClothingCategory = 'tops' | 'bottoms' | 'shoes' | 'accessories' | 'jewelry';
export type ClothingStyle = 'streetwear' | 'vintage' | 'classy' | 'casual' | 'formal' | 'bohemian' | 'minimalist';

export interface PriceRange {
  min: number;
  max: number;
}

export interface ClothingItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  color: string;
  material: string;
  category: ClothingCategory;
  style: ClothingStyle[];
  imageUrl: string;
  storeUrl: string;
  sizes: string[];
  currentPrice: number;
  originalPrice: number;
  stores: {
    name: string;
    price: number;
    url: string;
    inStock: boolean;
  }[];
}