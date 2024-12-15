import React, { useState } from 'react';
import { UserPreferences, FilterOptions, ClothingItem } from './types';
import UserPreferencesForm from './components/UserPreferencesForm';
import FilterPanel from './components/FilterPanel';
import OutfitGrid from './components/OutfitGrid';
import { mockClothingItems, generateOutfits } from './utils/mockData';
import { Shirt } from 'lucide-react';

function App() {
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: { min: 0, max: 1000 },
    brands: [],
    materials: [],
  });
  const [outfits, setOutfits] = useState<ClothingItem[][]>([]);

  const handlePreferencesSubmit = (newPreferences: UserPreferences) => {
    setPreferences(newPreferences);
    const generatedOutfits = generateOutfits(mockClothingItems, newPreferences, filters);
    setOutfits(generatedOutfits);
  };

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    if (preferences) {
      const generatedOutfits = generateOutfits(mockClothingItems, preferences, newFilters);
      setOutfits(generatedOutfits);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Shirt className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Style Match</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!preferences ? (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-6 text-center">
              Tell us about yourself to get personalized outfit recommendations
            </h2>
            <UserPreferencesForm onSubmit={handlePreferencesSubmit} />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <FilterPanel filters={filters} onChange={handleFilterChange} />
            </div>
            <div className="lg:col-span-3">
              {outfits.length > 0 ? (
                <OutfitGrid outfits={outfits} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    No outfits found matching your preferences and filters.
                    Try adjusting your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;