import { ClothingItem } from '../types';

// Mock data to simulate clothing database
export const mockClothingItems: ClothingItem[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    brand: 'Uniqlo',
    price: 19.90,
    color: 'white',
    material: 'Cotton',
    category: 'tops',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400',
    storeUrl: 'https://www.uniqlo.com',
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    brand: 'Zara',
    price: 49.90,
    color: 'blue',
    material: 'Denim',
    category: 'bottoms',
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=400',
    storeUrl: 'https://www.zara.com',
  },
  {
    id: '3',
    name: 'Leather Sneakers',
    brand: 'Nike',
    price: 89.90,
    color: 'white',
    material: 'Leather',
    category: 'shoes',
    imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400',
    storeUrl: 'https://www.nike.com',
  },
  // Add more mock items as needed
];

export function generateOutfits(
  items: ClothingItem[],
  preferences: any,
  filters: any
): ClothingItem[][] {
  // Simple algorithm to create outfit combinations
  const filteredItems = items.filter((item) => {
    const priceInRange =
      item.price >= filters.priceRange.min && item.price <= filters.priceRange.max;
    const brandMatch =
      filters.brands.length === 0 || filters.brands.includes(item.brand);
    const materialMatch =
      filters.materials.length === 0 || filters.materials.includes(item.material);

    return priceInRange && brandMatch && materialMatch;
  });

  // Group items by category
  const tops = filteredItems.filter((item) => item.category === 'tops');
  const bottoms = filteredItems.filter((item) => item.category === 'bottoms');
  const shoes = filteredItems.filter((item) => item.category === 'shoes');

  // Create outfit combinations
  const outfits: ClothingItem[][] = [];
  tops.forEach((top) => {
    bottoms.forEach((bottom) => {
      shoes.forEach((shoe) => {
        if (preferences.preferredColors.includes(top.color)) {
          outfits.push([top, bottom, shoe]);
        }
      });
    });
  });

  return outfits.slice(0, 6); // Return max 6 outfits
}