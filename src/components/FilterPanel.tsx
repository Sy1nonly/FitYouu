import React from 'react';
import { FilterOptions } from '../types';
import { SlidersHorizontal } from 'lucide-react';

interface Props {
  filters: FilterOptions;
  onChange: (filters: FilterOptions) => void;
}

export default function FilterPanel({ filters, onChange }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-4">
        <SlidersHorizontal className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={filters.priceRange.min}
              onChange={(e) =>
                onChange({
                  ...filters,
                  priceRange: { ...filters.priceRange, min: Number(e.target.value) },
                })
              }
              className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Min"
            />
            <span>to</span>
            <input
              type="number"
              value={filters.priceRange.max}
              onChange={(e) =>
                onChange({
                  ...filters,
                  priceRange: { ...filters.priceRange, max: Number(e.target.value) },
                })
              }
              className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Max"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Brands
          </label>
          <div className="space-y-2">
            {['Nike', 'Adidas', 'Zara', 'H&M', 'Uniqlo'].map((brand) => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={(e) => {
                    const newBrands = e.target.checked
                      ? [...filters.brands, brand]
                      : filters.brands.filter((b) => b !== brand);
                    onChange({ ...filters, brands: newBrands });
                  }}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Materials
          </label>
          <div className="space-y-2">
            {['Cotton', 'Polyester', 'Wool', 'Denim', 'Leather'].map((material) => (
              <label key={material} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.materials.includes(material)}
                  onChange={(e) => {
                    const newMaterials = e.target.checked
                      ? [...filters.materials, material]
                      : filters.materials.filter((m) => m !== material);
                    onChange({ ...filters, materials: newMaterials });
                  }}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2">{material}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}