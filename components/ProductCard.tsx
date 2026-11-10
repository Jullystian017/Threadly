'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/api';
import { useCart } from '@/store/cart';

interface ProductCardProps {
  product: Product;
  onOpenCart?: () => void;
}

const APPAREL_SLUGS = ['t-shirts', 'hoodies', 'outerwear', 'pants'];
const SIZES = ['S', 'M', 'L', 'XL'];

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenCart }) => {
  const isApparel = APPAREL_SLUGS.includes(product.category.slug);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    isApparel ? 'M' : undefined
  );
  const [activeImage, setActiveImage] = useState<string>(product.images[0] || '');
  const [isAdded, setIsAdded] = useState(false);

  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    if (product.stock <= 0) return;

    addItem(product, 1, selectedSize);
    setIsAdded(true);

    if (onOpenCart) {
      setTimeout(() => {
        onOpenCart();
      }, 350);
    }

    setTimeout(() => {
      setIsAdded(false);
    }, 1800);
  };

  const isLowStock = product.stock > 0 && product.stock <= 10;
  const isOutOfStock = product.stock <= 0;

  return (
    <div className="group relative flex flex-col rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image Area */}
      <div
        className="relative aspect-4/5 w-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden cursor-pointer"
        onMouseEnter={() => {
          if (product.images.length > 1) {
            setActiveImage(product.images[1]);
          }
        }}
        onMouseLeave={() => {
          setActiveImage(product.images[0]);
        }}
      >
        <Image
          src={activeImage || product.images[0]}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-black/70 text-white backdrop-blur-md">
            {product.category.name}
          </span>
          {isLowStock && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500 text-white shadow-xs">
              Only {product.stock} left
            </span>
          )}
        </div>

        {/* Stock status badge */}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-10">
            <span className="text-white font-semibold text-sm tracking-widest uppercase px-4 py-1.5 border border-white/40 rounded-full">
              Out of Stock
            </span>
          </div>
        )}

        {/* Rating overlay badge */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 px-2 py-1 rounded-lg bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md text-xs font-medium text-neutral-800 dark:text-neutral-200 shadow-xs">
          <svg
            className="w-3.5 h-3.5 text-amber-500 fill-amber-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{product.rating.rate.toFixed(1)}</span>
          <span className="text-neutral-400 dark:text-neutral-500">
            ({product.rating.count})
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-2 mb-1.5">
          <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 text-base leading-snug line-clamp-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
            {product.title}
          </h3>
          <span className="font-bold text-neutral-900 dark:text-neutral-50 text-lg shrink-0">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-2 leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Size Selection (if applicable) */}
        {isApparel && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                Size: <span className="font-bold">{selectedSize}</span>
              </span>
            </div>
            <div className="flex gap-1.5">
              {SIZES.map((size) => {
                const isSelected = selectedSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                      isSelected
                        ? 'border-neutral-950 bg-neutral-950 text-white dark:border-white dark:bg-white dark:text-neutral-950 shadow-xs'
                        : 'border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500'
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="mt-auto pt-2">
          <button
            type="button"
            disabled={isOutOfStock}
            onClick={handleAddToCart}
            className={`w-full py-2.5 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed ${
              isOutOfStock
                ? 'bg-neutral-200 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-600'
                : isAdded
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                : 'bg-neutral-900 text-white hover:bg-neutral-800 active:scale-[0.98] dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 shadow-xs'
            }`}
          >
            {isOutOfStock ? (
              <span>Unavailable</span>
            ) : isAdded ? (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span>Add to Bag</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
