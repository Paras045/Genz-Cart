
import { ButtonCustom } from "@/components/ui/button-custom";
import { Product } from "@/components/products/ProductCard";
import { Minus, Plus, X } from "lucide-react";

interface CartItemProps {
  product: Product;
  quantity: number;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartItem = ({ 
  product, 
  quantity, 
  onUpdateQuantity, 
  onRemove 
}: CartItemProps) => {
  const handleIncrement = () => {
    onUpdateQuantity(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onUpdateQuantity(product.id, quantity - 1);
    } else {
      onRemove(product.id);
    }
  };

  return (
    <div className="flex py-4 animate-fade-in">
      {/* Product image */}
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product details */}
      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium">{product.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
          </div>
          
          <ButtonCustom
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => onRemove(product.id)}
            aria-label="Remove item"
          >
            <X className="h-4 w-4" />
          </ButtonCustom>
        </div>

        <div className="flex items-center justify-between mt-auto">
          {/* Quantity controls */}
          <div className="flex items-center border rounded-md">
            <ButtonCustom
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handleDecrement}
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </ButtonCustom>
            
            <span className="w-8 text-center text-sm">{quantity}</span>
            
            <ButtonCustom
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handleIncrement}
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </ButtonCustom>
          </div>
          
          {/* Item total */}
          <p className="text-sm font-medium">
            ${(product.price * quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
