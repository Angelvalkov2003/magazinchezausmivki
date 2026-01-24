"use client";

import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import type { Collection } from "lib/types";

interface FilterModalProps {
  collections: Collection[];
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: {
    minPrice?: number;
    maxPrice?: number;
    categories: string[];
    onSaleOnly: boolean;
  }) => void;
  currentFilters: {
    minPrice?: number;
    maxPrice?: number;
    categories: string[];
    onSaleOnly: boolean;
  };
}

export function FilterModal({
  collections,
  isOpen,
  onClose,
  onApply,
  currentFilters,
}: FilterModalProps) {
  const [minPrice, setMinPrice] = useState(currentFilters.minPrice?.toString() || "");
  const [maxPrice, setMaxPrice] = useState(currentFilters.maxPrice?.toString() || "");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(currentFilters.categories);
  const [onSaleOnly, setOnSaleOnly] = useState(currentFilters.onSaleOnly);

  useEffect(() => {
    setMinPrice(currentFilters.minPrice?.toString() || "");
    setMaxPrice(currentFilters.maxPrice?.toString() || "");
    setSelectedCategories(currentFilters.categories);
    setOnSaleOnly(currentFilters.onSaleOnly);
  }, [currentFilters, isOpen]);

  if (!isOpen) return null;

  const handleCategoryToggle = (categoryHandle: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryHandle)
        ? prev.filter((c) => c !== categoryHandle)
        : [...prev, categoryHandle]
    );
  };

  const handleApply = () => {
    onApply({
      minPrice: minPrice ? parseFloat(minPrice) : undefined,
      maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
      categories: selectedCategories,
      onSaleOnly,
    });
    onClose();
  };

  const handleReset = () => {
    setMinPrice("");
    setMaxPrice("");
    setSelectedCategories([]);
    setOnSaleOnly(false);
    onApply({
      minPrice: undefined,
      maxPrice: undefined,
      categories: [],
      onSaleOnly: false,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-mustard dark:text-mustard">Филтри</h2>
            <button
              onClick={onClose}
              className="text-sage hover:text-mustard dark:hover:text-mustard"
              aria-label="Затвори"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-mustard dark:text-mustard mb-4">
              Ценови диапазон (EUR)
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-sage dark:text-sage mb-1">
                  От
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="0.00"
                  className="w-full rounded-md border border-light-sage bg-white px-3 py-2 text-sm text-mustard shadow-sm focus:border-mustard focus:outline-none focus:ring-1 focus:ring-mustard dark:border-sage dark:bg-light-sage/20 dark:text-mustard"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-sage dark:text-sage mb-1">
                  До
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="1000.00"
                  className="w-full rounded-md border border-light-sage bg-white px-3 py-2 text-sm text-mustard shadow-sm focus:border-mustard focus:outline-none focus:ring-1 focus:ring-mustard dark:border-sage dark:bg-light-sage/20 dark:text-mustard"
                />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-mustard dark:text-mustard mb-4">
              Категории
            </h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {collections.map((collection) => (
                <label
                  key={collection.id}
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-light-sage dark:hover:bg-sage/20 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(collection.handle)}
                    onChange={() => handleCategoryToggle(collection.handle)}
                    className="h-4 w-4 text-mustard rounded border-sage focus:ring-mustard"
                  />
                  <span className="text-sm text-mustard dark:text-mustard">
                    {collection.title}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* On Sale Only */}
          <div className="mb-6">
            <label className="flex items-center gap-2 p-2 rounded-md hover:bg-light-sage dark:hover:bg-sage/20 cursor-pointer">
              <input
                type="checkbox"
                checked={onSaleOnly}
                onChange={(e) => setOnSaleOnly(e.target.checked)}
                className="h-4 w-4 text-mustard rounded border-sage focus:ring-mustard"
              />
              <span className="text-sm font-medium text-mustard dark:text-mustard">
                Само продукти на намаление
              </span>
            </label>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-sage dark:border-sage/50">
            <button
              onClick={handleApply}
              className="flex-1 px-6 py-2 text-sm font-medium text-white bg-mustard rounded-md hover:opacity-90 transition-colors"
            >
              Приложи
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-2 text-sm font-medium text-mustard dark:text-mustard bg-light-sage dark:bg-sage/30 rounded-md hover:bg-sage dark:hover:bg-sage/50 transition-colors"
            >
              Изчисти
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 text-sm font-medium text-mustard dark:text-mustard bg-peach dark:bg-peach/30 rounded-md hover:opacity-80 dark:hover:opacity-80 transition-colors"
            >
              Отказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
