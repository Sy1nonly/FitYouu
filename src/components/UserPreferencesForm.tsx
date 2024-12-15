import React from 'react';
import { UserPreferences, ClothingStyle } from '../types';

interface Props {
  onSubmit: (preferences: UserPreferences) => void;
}

export default function UserPreferencesForm({ onSubmit }: Props) {
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [colors, setColors] = React.useState<string[]>([]);
  const [style, setStyle] = React.useState<ClothingStyle>('streetwear');

  const colorOptions = [
    'black', 'white', 'navy', 'gray', 'beige',
    'brown', 'red', 'blue', 'green', 'purple'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      height: Number(height),
      weight: Number(weight),
      preferredColors: colors,
      style,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Preferred Colors</label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {colorOptions.map((color) => (
            <label key={color} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={colors.includes(color)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setColors([...colors, color]);
                  } else {
                    setColors(colors.filter((c) => c !== color));
                  }
                }}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 capitalize">{color}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Style</label>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value as ClothingStyle)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="streetwear">Streetwear</option>
          <option value="vintage">Vintage</option>
          <option value="classy">Classy</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Find Outfits
      </button>
    </form>
  );
}