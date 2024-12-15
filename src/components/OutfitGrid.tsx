import React from 'react';
import { ClothingItem } from '../types';
import { ExternalLink } from 'lucide-react';

interface Props {
  outfits: ClothingItem[][];
}

export default function OutfitGrid({ outfits }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {outfits.map((outfit, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Outfit {index + 1}</h3>
          <div className="space-y-4">
            {outfit.map((item) => (
              <div key={item.id} className="flex items-start space-x-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.brand}</p>
                  <p className="text-sm font-medium">${item.price}</p>
                  <a
                    href={item.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500 mt-1"
                  >
                    Shop Now
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Total: ${outfit.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
}