
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ButtonCustom } from "@/components/ui/button-custom";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    onAddToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg hover-lift">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
        {/* Image loading placeholder */}
        <div className={cn(
          "absolute inset-0 image-loading",
          imageLoaded ? "opacity-0" : "opacity-100"
        )}></div>
        
        {/* Product image */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className={cn(
            "h-full w-full object-cover transition-all duration-300 group-hover:scale-105",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Quick add button - appears on hover */}
        <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ButtonCustom
            size="icon"
            aria-label="Add to cart"
            onClick={handleAddToCart}
          >
            <Plus className="h-4 w-4" />
          </ButtonCustom>
        </div>
      </div>
      
      {/* Product info */}
      <div className="mt-4 flex flex-col">
        <Link 
          to={`/products/${product.id}`}
          className="text-base font-medium transition-colors hover:text-muted-foreground"
        >
          {product.name}
        </Link>
        
        <div className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </div>
        
        <div className="mt-2 font-medium">
          ${product.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
