
import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  className?: string;
}

const ProductGrid = ({ products, onAddToCart, className }: ProductGridProps) => {
  // Animation delay increments for each card
  const getAnimationDelay = (index: number) => {
    return `${100 + index * 50}ms`;
  };

  return (
    <div className={cn(
      "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
      className
    )}>
      {products.map((product, index) => (
        <div 
          key={product.id}
          className="animate-fade-in"
          style={{ animationDelay: getAnimationDelay(index) }}
        >
          <ProductCard 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
