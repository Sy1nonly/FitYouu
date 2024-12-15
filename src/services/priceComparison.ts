import { ClothingItem } from '../types/clothing';

export async function findBestPrices(item: ClothingItem): Promise<ClothingItem['stores']> {
  // This would integrate with various store APIs to find current prices
  // For now, return mock data
  return item.stores.sort((a, b) => a.price - b.price);
}

export function getPriceAlerts(item: ClothingItem, targetPrice: number): boolean {
  return item.stores.some(store => store.price <= targetPrice);
}