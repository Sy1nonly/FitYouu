import React, { useRef, useState } from 'react';
import { sketchToOutfitSearch } from '../../services/aiVisualization';
import { ClothingItem } from '../../types/clothing';

export default function SketchToSearch() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [results, setResults] = useState<ClothingItem[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleSearch = async () => {
    if (!canvasRef.current) return;
    const sketchData = canvasRef.current.toDataURL();
    const searchResults = await sketchToOutfitSearch(sketchData, {
      priceRange: { min: 0, max: 200 },
      material: 'cotton'
    });
    setResults(searchResults);
  };

  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4">
        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="border border-gray-200 rounded"
          onMouseDown={() => setIsDrawing(true)}
          onMouseUp={() => setIsDrawing(false)}
          onMouseMove={(e) => {
            if (!isDrawing || !canvasRef.current) return;
            const ctx = canvasRef.current.getContext('2d');
            if (!ctx) return;
            ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            ctx.stroke();
          }}
        />
      </div>
      <button
        onClick={handleSearch}
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Search Similar Items
      </button>
      {results.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          {results.map(item => (
            <div key={item.id} className="border rounded-lg p-2">
              <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
              <p className="mt-2 font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}