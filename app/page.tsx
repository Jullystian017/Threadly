'use client';

import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '@/lib/mock-data';
import { ProductGrid } from '@/components/ProductGrid';
import { CartDrawer } from '@/components/CartDrawer';
import { useCart } from '@/store/cart';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalCount = useCart((state) => state.totalCount);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col font-sans transition-colors">
      {/* Top Announcement Bar */}
      <div className="bg-neutral-900 text-neutral-300 dark:bg-neutral-900 dark:text-neutral-400 text-xs py-2 px-4 text-center tracking-wide font-medium">
        <span>Free standard shipping on all domestic orders over $100</span>
        <span className="mx-2 hidden sm:inline">•</span>
        <span className="hidden sm:inline text-neutral-400">Crafted with intentional design</span>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-2xl font-black tracking-tighter uppercase text-neutral-950 dark:text-white"
            >
              Threadly<span className="text-neutral-400 dark:text-neutral-600">.</span>
            </a>
            <span className="hidden sm:inline-block px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
              Studio Edit 2026
            </span>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-neutral-600 dark:text-neutral-400">
            <a
              href="#collection"
              className="hover:text-neutral-950 dark:hover:text-white transition-colors"
            >
              All Garments
            </a>
            <a
              href="#collection"
              className="hover:text-neutral-950 dark:hover:text-white transition-colors"
            >
              New Arrivals
            </a>
            <a
              href="#about"
              className="hover:text-neutral-950 dark:hover:text-white transition-colors"
            >
              Philosophy
            </a>
          </nav>

          {/* Cart Trigger Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-xs font-semibold shadow-xs hover:opacity-90 active:scale-95 transition-all cursor-pointer"
              aria-label="View shopping bag"
            >
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
              <span>Bag</span>
              <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-bold bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white">
                {totalCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-14 sm:py-20 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                New Season Collection Available
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.08] mb-6">
                Essential garments.
                <br />
                Elevated fundamentals.
              </h1>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-2xl mb-8">
                Designed with heavyweight natural fibres, architectural silhouettes, and enduring craftsmanship. Built for daily wear without obsolescence.
              </p>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs">
                <div>
                  <span className="block font-bold text-neutral-900 dark:text-neutral-100">
                    Organic Heavyweight
                  </span>
                  <span className="text-neutral-500">280–450 GSM pure cottons</span>
                </div>
                <div>
                  <span className="block font-bold text-neutral-900 dark:text-neutral-100">
                    Sustainable Mills
                  </span>
                  <span className="text-neutral-500">Low-impact garment dye</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block font-bold text-neutral-900 dark:text-neutral-100">
                    Tailored Fits
                  </span>
                  <span className="text-neutral-500">Boxy and relaxed silhouettes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Catalog Section with ProductGrid */}
        <section id="collection" className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 dark:text-white">
                  Current Release
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  Explore our carefully engineered seasonal pieces.
                </p>
              </div>
            </div>

            {/* ProductGrid Component */}
            <ProductGrid
              products={PRODUCTS}
              categories={CATEGORIES}
              onOpenCart={() => setIsCartOpen(true)}
            />
          </div>
        </section>

        {/* Brand Philosophy Section */}
        <section id="about" className="py-16 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400">
                  01 / Materials
                </span>
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  Substance in Every Weave
                </h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  We reject fast fashion flimsiness. Every fabric is sourced from heritage mills with verified durability standards.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400">
                  02 / Longevity
                </span>
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  Built to Age with Character
                </h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  Double-needle flatlock construction and reinforced stress points ensure garments retain structure through years of regular wear.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400">
                  03 / Transparency
                </span>
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  Honest Pricing & Supply
                </h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  No artificial markups or disposable seasonal churn. Straightforward essentials engineered for discerning daily wear.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950 py-12 text-neutral-500 dark:text-neutral-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
              Threadly
            </span>
            <span>—</span>
            <span>Architectural Apparel Studio</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">
              Shipping & Returns
            </a>
          </div>

          <p>© {new Date().getFullYear()} Threadly Inc. All rights reserved.</p>
        </div>
      </footer>

      {/* CartDrawer Component */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
